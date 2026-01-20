# Transaction Monitoring with GoldenGate Free

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with Oracle Database technologies. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction

Financial institutions face increasing pressure to detect fraud and meet compliance requirements in real-time. Traditional batch-based approaches that process transactions hourly or daily are no longer sufficient—by the time suspicious activity is detected, the damage is done.

**Why GoldenGate for Real-Time Monitoring?**

GoldenGate uses change data capture (CDC) to read database transaction logs directly, providing several advantages over alternative approaches:

| Approach | Latency | Source Impact | Limitations |
|----------|---------|---------------|-------------|
| **GoldenGate CDC** | Sub-second | Near-zero | None for this use case |
| Application triggers | Sub-second | High (executes with every transaction) | Tightly coupled, maintenance burden |
| Polling/ETL jobs | Minutes to hours | Moderate (repeated queries) | Misses intermediate states, gaps |
| Database replication | Sub-second | Low | Replicates entire database, not selective |

GoldenGate captures changes at the log level without modifying your application code, adding database triggers, or impacting transactional performance. You can selectively replicate specific tables to dedicated monitoring schemas, keeping your operational and analytical workloads separated.

**What You'll Build**

In this FastLab, you'll replicate financial transactions from Seer Group Finance's transactional schema (SEER\_FINANCE) to a monitoring schema (SEER\_MONITOR) for compliance and fraud detection. Every transaction is instantly captured and replicated, enabling real-time dashboards and alerts without touching the source application.

### Prerequisites

- GoldenGate Free and Oracle AI Database Free deployed on OCI Compute

    - Check our [LiveLabs FastLab - Deploy GoldenGate Free on OCI Compute](link-to-gg-free-fastlab)

## Task 1: Connect to the Database and Create Demo Environment

Seer Group Finance needs to separate their transactional systems from their monitoring infrastructure. The transactional schema (SEER\_FINANCE) handles live customer transactions and must remain performant. The monitoring schema (SEER\_MONITOR) feeds fraud detection dashboards and compliance reports. By creating both schemas upfront with identical table structures, you establish the foundation for GoldenGate to replicate data between them without impacting production workloads.

Connect to Oracle AI Database Free and run the setup script.

1. SSH into your compute instance:

    ```bash
    <copy>
    ssh -i <your-private-key> opc@<public-ip-address>
    </copy>
    ```

2. Connect to the Oracle AI Database Free container as SYSDBA:

    ```bash
    <copy>
    sudo podman exec -it oracle-db sqlplus sys/Welcome1#GG23@FREEPDB1 as sysdba
    </copy>
    ```

3. Run the following script to set up the complete demo environment. The script cleans up any existing objects so you can run it multiple times:

    ```sql
    <copy>
    -- ============================================
    -- GoldenGate Transaction Monitoring Setup
    -- Run this script to create a clean environment
    -- ============================================

    -- Enable supplemental logging for GoldenGate
    ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
    ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;

    -- ============================================
    -- Clean up existing objects (ignore errors if not exist)
    -- ============================================
    BEGIN EXECUTE IMMEDIATE 'DROP USER seer_finance CASCADE'; EXCEPTION WHEN OTHERS THEN NULL; END;
    /
    BEGIN EXECUTE IMMEDIATE 'DROP USER seer_monitor CASCADE'; EXCEPTION WHEN OTHERS THEN NULL; END;
    /

    -- ============================================
    -- Create source schema: SEER_FINANCE
    -- ============================================
    CREATE USER seer_finance IDENTIFIED BY "Welcome1#GG23"
        DEFAULT TABLESPACE users QUOTA UNLIMITED ON users;

    GRANT CREATE SESSION, CREATE TABLE, CREATE SEQUENCE TO seer_finance;

    CREATE TABLE seer_finance.transactions (
        transaction_id   NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        account_id       VARCHAR2(20) NOT NULL,
        transaction_type VARCHAR2(20) NOT NULL,
        amount           NUMBER(15,2) NOT NULL,
        recipient_acct   VARCHAR2(20),
        transaction_ts   TIMESTAMP DEFAULT SYSTIMESTAMP,
        status           VARCHAR2(20) DEFAULT 'PENDING'
    );

    -- ============================================
    -- Create target schema: SEER_MONITOR
    -- ============================================
    CREATE USER seer_monitor IDENTIFIED BY "Welcome1#GG23"
        DEFAULT TABLESPACE users QUOTA UNLIMITED ON users;

    GRANT CREATE SESSION, CREATE TABLE TO seer_monitor;

    CREATE TABLE seer_monitor.transactions (
        transaction_id   NUMBER PRIMARY KEY,
        account_id       VARCHAR2(20) NOT NULL,
        transaction_type VARCHAR2(20) NOT NULL,
        amount           NUMBER(15,2) NOT NULL,
        recipient_acct   VARCHAR2(20),
        transaction_ts   TIMESTAMP,
        status           VARCHAR2(20)
    );

    -- ============================================
    -- Insert sample transactions
    -- ============================================
    INSERT INTO seer_finance.transactions
        (account_id, transaction_type, amount, recipient_acct, status)
    VALUES ('SEER-FIN-1001', 'TRANSFER', 15000.00, 'SEER-FIN-2045', 'COMPLETED');

    INSERT INTO seer_finance.transactions
        (account_id, transaction_type, amount, recipient_acct, status)
    VALUES ('SEER-FIN-1001', 'WITHDRAWAL', 5000.00, NULL, 'COMPLETED');

    INSERT INTO seer_finance.transactions
        (account_id, transaction_type, amount, recipient_acct, status)
    VALUES ('SEER-FIN-2045', 'DEPOSIT', 25000.00, NULL, 'COMPLETED');

    COMMIT;

    -- ============================================
    -- Verify setup
    -- ============================================
    SELECT 'Source transactions: ' || COUNT(*) AS status FROM seer_finance.transactions;
    SELECT 'Target transactions: ' || COUNT(*) AS status FROM seer_monitor.transactions;
    </copy>
    ```

4. Verify the output shows 3 source transactions and 0 target transactions.

5. Exit SQL*Plus:

    ```sql
    <copy>
    EXIT;
    </copy>
    ```

## Task 2: Get Database Container IP Address

GoldenGate connects to databases using standard Oracle Net connections. When running in containers, each container gets its own IP address on Podman's internal bridge network. You need this internal IP—not the host's public IP—because GoldenGate and the database communicate directly within the container network. This mirrors production deployments where GoldenGate typically connects via private network addresses for security.

Get the Oracle Database container's IP address for the GoldenGate connection.

1. Run the following command to get the database container IP:

    ```bash
    <copy>
    sudo podman inspect oracle-db --format '{{.NetworkSettings.IPAddress}}'
    </copy>
    ```

2. Note this IP address (e.g., `10.88.0.2`) - you'll use it in the next task.

    > Note: This is the internal Podman network IP. Both containers (GoldenGate and Oracle Database) share this internal network, allowing them to communicate directly without using the host's public IP.

## Task 3: Create Source Database Connection

The source connection tells GoldenGate where to capture changes from. GoldenGate reads the database's redo logs—the same logs Oracle uses for recovery—to identify every INSERT, UPDATE, and DELETE as it happens. This "log-based" capture has near-zero impact on the source database because GoldenGate reads committed transactions from disk rather than querying tables directly. The connection also creates a dedicated GoldenGate admin user with the precise privileges needed for change capture.

Create a connection to Oracle AI Database Free as the source in GoldenGate.

1. Open your GoldenGate console at `https://<compute-ip>` and log in as `oggadmin`.

2. On the GoldenGate Free Home page, click **Create connection**.

3. On the **General Information** page:

    | Field | Value |
    |-------|-------|
    | Database name | DB_SOURCE |
    | Description | Seer Group Finance source database |

4. Click **Next**.

5. On the **Connection Details** page:

    | Field | Value |
    |-------|-------|
    | Connection role | Source |
    | Connection type | Basic |
    | Hostname | (container IP from Task 3, e.g., 10.88.0.2) |
    | Port | 1521 |

6. For **Database type**, select **Pluggable database (PDB) in Oracle Database 21c or above**.

7. Enter the **Pluggable database service name (PDB)**: `FREEPDB1`

8. Check **SYSDBA privileges available**.

9. In the Administrator Credentials dialog:

    | Field | Value |
    |-------|-------|
    | User with admin privilege | sys |
    | Password for admin user | Welcome1#GG23 |

10. Click **Next**.

11. On the **GoldenGate Admin User** page:

    - Check **Add GoldenGate admin database user**

    | Field | Value |
    |-------|-------|
    | GoldenGate username | ggadmin |
    | GoldenGate password | Welcome1#GG23 |

12. Click **Next**.

13. On the **Validate Configuration** page, click **Validate** to test the connection.

14. Click **Next**.

15. On the **Configuration** page, click **Run analysis** to review the required database settings.

16. Click **Run SQL** to apply the configuration automatically.

17. Click **Next**, then click **Create** to finish.

## Task 4: Create Target Database Connection

The target connection tells GoldenGate where to apply captured changes. In this scenario, both source and target are in the same database but different schemas—a common pattern for creating monitoring or reporting copies without standing up separate infrastructure. In production, Seer Group Finance might target a dedicated analytics database, a data warehouse, or even a cloud database in another region for disaster recovery.

Create a connection to the same database as the target.

1. On the GoldenGate Free Home page, click **Create connection**.

2. On the **General Information** page:

    | Field | Value |
    |-------|-------|
    | Database name | DB_TARGET |
    | Description | Seer Group monitoring target database |

3. Click **Next**.

4. On the **Connection Details** page:

    | Field | Value |
    |-------|-------|
    | Connection role | Target |
    | Connection type | Basic |
    | Hostname | (same container IP as source) |
    | Port | 1521 |
    | Database type | Pluggable database (PDB) in Oracle Database 21c or above |
    | Pluggable database service name | FREEPDB1 |

5. Check **SYSDBA privileges available** and enter credentials:

    | Field | Value |
    |-------|-------|
    | User with admin privilege | sys |
    | Password for admin user | Welcome1#GG23 |

6. Click **Next**.

7. On the **GoldenGate Admin User** page, the existing `ggadmin` user will be detected. Enter the password:

    | Field | Value |
    |-------|-------|
    | GoldenGate password | Welcome1#GG23 |

8. Click **Next**, then **Validate**, then **Next**.

9. On the **Configuration** page, click **Run analysis**, then **Run SQL**.

10. Click **Next**, then click **Create** to finish.

You should now see both **DB\_SOURCE** and **DB\_TARGET** connections on the GoldenGate Free Home page.

## Task 5: Create a Replication Pipeline

A pipeline ties everything together: which source tables to capture, which target tables to update, and how data flows between them. GoldenGate Free's "One-way Database Replication" recipe is ideal for monitoring scenarios—changes flow from the transactional system to the monitoring system, but never back. The mapping step is critical: you'll explicitly route SEER\_FINANCE.TRANSACTIONS to SEER\_MONITOR.TRANSACTIONS, ensuring operational and analytical data stay cleanly separated.

Create a pipeline to replicate transactions from source to target.

1. On the GoldenGate Free Home page, click **Create pipeline**.

2. On the **Recipe** page, select **One-way Database Replication** (transactions flow from source to target only - appropriate for monitoring scenarios where the target is read-only).

3. Click **Next**.

4. On the **Overview** page:

    | Field | Value |
    |-------|-------|
    | Name | SEER_REPLICATION |
    | Description | Seer Finance transaction monitoring |

5. Click **Next**.

6. On the **Connections** page:

    | Field | Value |
    |-------|-------|
    | Source Database | DB_SOURCE |
    | Target Database | DB_TARGET |

7. Click **Save & Configure**.

8. On the **Mapping** screen, configure the source-to-target mapping:

    > Note: You'll see all schemas (SEER\_FINANCE, SEER\_MONITOR, etc.) on both sides because both connections point to the same database. Select the appropriate schema for each role.

    **Source Schema** (left side):
    - Expand `SEER_FINANCE`
    - Check/select `TRANSACTIONS`

    **Target Schema** (right side):
    - Expand `SEER_MONITOR`
    - Select `TRANSACTIONS` as the target

    > Important: Map SEER\_FINANCE.TRANSACTIONS → SEER\_MONITOR.TRANSACTIONS. Do NOT map to SEER_FINANCE on the target side.

9. Save the mapping configuration.

10. Start the pipeline. It should show a **Running** status.

## Task 6: Test Real-Time Transaction Replication

This is the moment of truth. You'll simulate a high-value transaction in the source system—exactly the kind of activity Seer Group Finance's fraud team needs to catch immediately. Within seconds of committing the transaction, it should appear in the monitoring schema. This sub-second latency is what makes GoldenGate invaluable for fraud detection: suspicious patterns can trigger alerts before funds leave the institution, not hours later when batch reports finally run.

Insert a new transaction and verify it replicates instantly.

1. Connect to the database:

    ```bash
    <copy>
    sudo podman exec -it oracle-db sqlplus sys/Welcome1#GG23@FREEPDB1 as sysdba
    </copy>
    ```

2. Set up SQL*Plus formatting for better output:

    ```sql
    <copy>
    SET LINESIZE 150
    SET PAGESIZE 50
    COLUMN account_id FORMAT A15
    COLUMN transaction_type FORMAT A12
    COLUMN amount FORMAT 999,999,999.99
    COLUMN recipient_acct FORMAT A15
    COLUMN status FORMAT A10
    COLUMN transaction_ts FORMAT A25
    </copy>
    ```

3. Insert a high-value transaction:

    ```sql
    <copy>
    -- Insert a suspicious high-value transaction
    INSERT INTO seer_finance.transactions
        (account_id, transaction_type, amount, recipient_acct, status)
    VALUES ('SEER-FIN-3099', 'TRANSFER', 950000.00, 'EXTERNAL-8877', 'PENDING');

    COMMIT;
    </copy>
    ```

4. Immediately query the monitoring table:

    ```sql
    <copy>
    -- Check if transaction was replicated to monitoring schema
    SELECT transaction_id, account_id, transaction_type,
           amount, recipient_acct, status, transaction_ts
    FROM seer_monitor.transactions
    ORDER BY transaction_ts DESC;
    </copy>
    ```

5. The high-value transfer should appear in SEER_MONITOR within seconds. This real-time capture enables fraud detection systems to flag suspicious transactions instantly.

6. Insert another transaction and observe it replicate:

    ```sql
    <copy>
    -- Another transaction for verification
    INSERT INTO seer_finance.transactions
        (account_id, transaction_type, amount, recipient_acct, status)
    VALUES ('SEER-FIN-1001', 'TRANSFER', 2500.00, 'SEER-FIN-4000', 'COMPLETED');

    COMMIT;

    -- Verify replication counts
    SELECT 'Source: ' || COUNT(*) AS source_count FROM seer_finance.transactions;
    SELECT 'Target: ' || COUNT(*) AS target_count FROM seer_monitor.transactions;
    </copy>
    ```

You've successfully configured real-time transaction monitoring with GoldenGate Free. Every change in SEER\_FINANCE is now instantly captured and replicated to SEER\_MONITOR for compliance and fraud detection.

## Signature Workshop

Ready to dive deeper? This workshop covers advanced GoldenGate scenarios.

👉 [GoldenGate Microservices Workshop](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=585)

## Learn More

* [GoldenGate Free Documentation](https://docs.oracle.com/en/middleware/goldengate/free/)
* [GoldenGate Free - Create Database Connections](https://docs.oracle.com/en/middleware/goldengate/free/23/uggfe/create-database-connections.html)
* [Oracle AI Database Free Documentation](https://docs.oracle.com/en/database/oracle/oracle-database-free/)
* [GoldenGate Product Page](https://www.oracle.com/integration/goldengate/)

## Acknowledgements
* **Author** - Oracle LiveLabs Team
* **Last Updated By/Date** - Oracle LiveLabs, January 2026
