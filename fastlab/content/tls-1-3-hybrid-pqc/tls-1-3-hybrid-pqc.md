# How Do You Configure TLS 1.2 and TLS 1.3 with Hybrid Post-Quantum Key Exchange?

## Introduction

Why do this now? An attacker could capture encrypted traffic today and retain it until a sufficiently capable quantum computer can break classical key exchange. Hybrid key exchange helps address this “harvest now, decrypt later” risk while retaining the protection of ECDHE.

In this lab, you first establish working TLS 1.2 and TLS 1.3 connections, then configure a preference for hybrid key exchange in TLS 1.3 and retest connectivity. Use Oracle AI Database 19.32 or Oracle AI Database 26ai with a provider and endpoints that support the selected features.

Estimated Time: 15 minutes

Before running any script, confirm that this is a disposable, non-production system.

The scripts require the exact acknowledgement `NON_PROD_TLS_ACCEPTANCE=YES`. Type the acknowledgement manually; this lab intentionally does not provide a Copy button for it.

```bash
export NON_PROD_TLS_ACCEPTANCE=YES
```

For a persistent setting, type these lines manually to add it to `.bashrc` and reload the shell:

```bash
echo 'export NON_PROD_TLS_ACCEPTANCE=YES' >> ~/.bashrc
source ~/.bashrc
```

For the current shell only, type:

```bash
export NON_PROD_TLS_ACCEPTANCE=YES
```

Before you begin, set `PDB_NAME` in the shell used for this lab. The scripts use it for the database service and generated TNS aliases. If it is not set, the scripts default to `pdb1`.

For a persistent setting, add it to `.bashrc` and reload the shell:

```bash
<copy>
echo 'export PDB_NAME=pdb1' >> ~/.bashrc
source ~/.bashrc
</copy>
```

For the current shell only, run:

```bash
<copy>
export PDB_NAME=pdb1
</copy>
```

### Objectives

In this lab, you will:

- Configure `TLS_VERSION` to permit both TLS 1.2 and TLS 1.3.
- Configure `TLS_KEY_EXCHANGE_GROUPS` with hybrid key exchange preferred.
- Test TLS 1.3 and TLS 1.2 connections through the same TCPS endpoint.
- Verify the network protocol, negotiated TLS version, and cipher suite with `SYS_CONTEXT`.

### Prerequisites

This lab assumes you have:

- An Oracle AI Database 19.32 or Oracle AI Database 26ai server and a matching client with TLS 1.3 support.
- An existing one-way TLS configuration with a server certificate, trusted client certificate chain, and wallets available to the Oracle listener.
- OS access to the database host and client configuration files as the appropriate Oracle software owner.
- A working TCPS alias based on `PDB_NAME`, such as `${PDB_NAME}_tls`, plus database credentials for the lab PDB.

This FastLab changes protocol and key-exchange settings and adds or updates the TCPS listener endpoint. It does not create wallets or certificates.
If the one-way TLS wallets and certificates are not configured, complete the [Oracle one-way TLS workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3631).

## Task 1: Download and prepare the TLS scripts

Download the scripts that configure Oracle Net and prepare the test connections. Using the same scripts throughout the lab keeps the host and client settings consistent and creates backups before configuration changes.

Open a Terminal session on your **DBSec-Lab** VM as OS user `oracle`. The archive contains only the `tls/` directory and its scripts.

1. Create the `livelabs` directory and move into it.

    ```bash
    <copy>
    mkdir -pv livelabs
    cd livelabs
    </copy>
    ```

    If you are using a remote desktop session, double-click the **Terminal** icon on the desktop.

2. Download the bundled TLS scripts.

    ```bash
    <copy>
    wget -v -O tls.zip https://objectstorage.us-ashburn-1.oraclecloud.com/p/BHNwcP7_8g6cj9ap6j8r3rjBky44eNnrTsm8SGQ4jijQWWzjb4pMAnuiXxS1KQ8q/n/oradbclouducm/b/dbsec_public/o/tls.zip
    </copy>
    ```

3. Extract the archive and remove the downloaded ZIP.

    ```bash
    <copy>
    unzip tls.zip
    rm -vf tls.zip
    </copy>
    ```

4. Enter the extracted `tls` directory and prepare the scripts.

    ```bash
    <copy>
    cd tls
    chmod -v +x -- *.sh
    if command -v dos2unix >/dev/null 2>&1; then dos2unix -v -- *; else echo "dos2unix is not installed; the bundled scripts already use Unix line endings."; fi
    </copy>
    ```

## Task 2: Configure TLS 1.2 and TLS 1.3 on the host

First, establish a working TLS configuration with hybrid key exchange disabled. This gives you a baseline: if a later connection fails, you can distinguish a hybrid compatibility issue from an existing certificate, trust, or listener problem. Allowing both TLS 1.2 and TLS 1.3 also lets you test clients with different protocol capabilities against the same endpoint.

Run these scripts from the extracted `livelabs/tls` directory on the database host as the Oracle software owner. Before writing, they back up the existing Oracle Net files and server wallet directory, configure TLS 1.2 and TLS 1.3, create a TCPS alias named `${PDB_NAME}_tls`, and add or update the TCPS listener endpoint. They use Oracle's recommended TCPS port `2484` when adding a new endpoint and reuse an existing TCPS listener port when one is already configured. They do not create or modify the server wallet or certificates.

By default, the host setup restarts the listener so new TCPS endpoints and wallet settings take effect. The listener wallet path is `${WALLET_ROOT}`; set `TLS_LISTENER_WALLET_DIR` when the existing listener wallet is elsewhere.

The database server and listener still require their existing identity wallet. The client in this lab uses the Oracle Linux system trust store, not a client wallet. Oracle Instant Client uses the system's trusted CA roots when `WALLET_LOCATION` is omitted or set to `SYSTEM`.

1. If you use Oracle Database 19.32, switch to the next-generation cryptographic provider before configuring TLS. The legacy provider remains the default on 19.32 and supports TLS only through 1.2, so it cannot use TLS 1.3 settings or `TLS_KEY_EXCHANGE_GROUPS` values that depend on TLS 1.3. See the [Oracle Database 19c documentation on switching cryptographic providers](https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/switching-crypto-providers.html):

    ```bash
    <copy>
    python $ORACLE_HOME/bin/set_crypto_provider.py next-generation
    </copy>
    ```

    Restart the database instance and reload the listener after the switch. Confirm the provider is active before continuing:

    ```bash
    <copy>
    python $ORACLE_HOME/bin/set_crypto_provider.py status
    </copy>
    ```

2. Confirm the variables and Oracle Net locations.

    ```bash
    <copy>
    echo "PDB_NAME=$PDB_NAME"
    echo "ORACLE_HOME=$ORACLE_HOME"
    echo "TNS_ADMIN=${TNS_ADMIN:-$ORACLE_HOME/network/admin}"
    </copy>
    ```

    If `/etc/oratab` contains multiple database entries for the same `ORACLE_HOME`, set both `ORACLE_HOME` and `ORACLE_SID` explicitly. The scripts stop rather than guess which database to change.

3. Configure TLS 1.2 and TLS 1.3. Hybrid key exchange remains disabled until Task 4.

    ```bash
    <copy>
    export TLS_CONFIGURE_TLS13=YES
    export TLS_CONFIGURE_HYBRID=NO
    ./tls_setup_host.sh
    </copy>
    ```

4. If the server uses a private CA not already trusted by Oracle Linux, install only the issuer's public root CA certificate into the OS trust store. Skip this step if the issuer is already trusted.

    The client must trust the certificate authority that issued the server’s certificate. Adding the public root CA certificate to the operating system trust store supplies that trust; hostname matching checks that the certificate identifies the server you intended to reach.

    ```bash
    <copy>
    export TLS_ROOT_CERT=/path/to/server-issuing-root-ca.pem
    ./tls_install_linux_cert.sh
    </copy>
    ```

5. Configure the `oracle` user's client to use the OS trust store and no client wallet.

    ```bash
    <copy>
    export TLS_CLIENT_USE_SYSTEM_TRUST=YES
    ./tls_setup_client.sh
    </copy>
    ```

6. Confirm the host configuration and generated alias.

    ```bash
    <copy>
    ./tls_verify_host.sh
    </copy>
    ```

### Inspect the TLS connection as `oracle`

Connect through the `${PDB_NAME}_tls` alias and record the protocol, negotiated TLS version, and record-layer cipher suite.

1. Connect with the generated TCPS alias as the `system` user and enter its password when prompted.

    ```bash
    <copy>
    sqlplus "system@${PDB_NAME}_tls"
    </copy>
    ```

2. Verify the connection values.

    ```sql
    <copy>
    SELECT SYS_CONTEXT('USERENV', 'NETWORK_PROTOCOL') AS network_protocol,
           SYS_CONTEXT('USERENV', 'TLS_VERSION') AS tls_version,
           SYS_CONTEXT('USERENV', 'TLS_CIPHERSUITE') AS tls_ciphersuite
      FROM dual;
    </copy>
    ```

    `NETWORK_PROTOCOL` should be `tcps`.

3. Exit SQL*Plus to return to the command line before continuing to the next task.

    ```sql
    <copy>
    exit
    </copy>
    ```

## Task 3: Create and test the Lisa client

Use the Lisa wrapper scripts to install Oracle Instant Client 26ai, create or validate the Lisa operating-system account, generate a walletless Oracle Net configuration, and test TLS 1.2 and TLS 1.3. Lisa uses the Oracle Linux system trust store populated in Task 2; no client wallet or private key is copied.

1. From the `oracle` login shell in the extracted `livelabs/tls` directory, run the complete Lisa workflow. Enter the `system` database password when SQL*Plus prompts for each test connection.

    ```bash
    <copy>
    ./tls_run_lisa.sh all "$PDB_NAME"
    </copy>
    ```

    The wrapper runs `tls_setup_lisa.sh`, which validates the host and base TCPS alias, installs the [Oracle-recommended 26ai Instant Client](https://www.oracle.com/database/technologies/instant-client.html), creates or validates the Lisa account, preserves backups, and generates the TLS 1.2 and TLS 1.3 aliases. It then runs `tls_test_lisa.sh` as Lisa and verifies the network protocol and negotiated TLS version with `tls_test_lisa.sql`.

2. Confirm that both tests report `PASS`.

    ```text
    <copy>
    PASS: pdb1_tls12 negotiated tcps / TLS 1.2.
    PASS: pdb1_tls13 negotiated tcps / TLS 1.3.
    </copy>
    ```

    The alias prefix follows `PDB_NAME`, so the displayed alias changes when you configure a different PDB name. The wrapper returns you to the original `oracle` shell after testing.

3. To repeat only the two connection tests without reinstalling or reconfiguring Lisa, run:

    ```bash
    <copy>
    ./tls_run_lisa.sh test "$PDB_NAME"
    </copy>
    ```

Database authentication still uses `system` and its database password. Lisa is the Linux client identity, not a database account. Use a least-privileged database account instead of `system` outside this disposable lab.

## Task 4: Prefer hybrid key exchange

Now configure the server and clients to prefer hybrid key exchange for TLS 1.3. This changes how they establish the session keys; the negotiated record cipher still encrypts the database traffic.

`TLS_KEY_EXCHANGE_GROUPS` controls this preference. Listing `hybrid` first and retaining `ec` allows clients to use hybrid when supported and classical ECDHE otherwise. This supports a gradual migration, but it does not require every connection to use post-quantum protection.

1. Enable hybrid key exchange on the database host. The scripts update the server and listener configuration and retain the backups created in Task 2.

    ```bash
    <copy>
    export TLS_CONFIGURE_HYBRID=YES
    ./tls_setup_host.sh
    </copy>
    ```

2. Configure both Oracle Net clients to prefer hybrid. Lisa's client files remain under `/home/lisa/tns_admin` and continue using the OS trust store.

    ```bash
    <copy>
    TLS_CLIENT_USE_SYSTEM_TRUST=YES ./tls_setup_client.sh
    TLS_CLIENT_USE_SYSTEM_TRUST=YES TLS_CLIENT_USER=lisa TLS_CLIENT_TNS_ADMIN=/home/lisa/tns_admin ./tls_setup_client.sh
    </copy>
    ```

    ML-KEM and hybrid key exchange apply only to TLS 1.3.

3. Confirm the effective configuration entries.

    ```bash
    <copy>
    grep -Ei '^[[:space:]]*(TLS_VERSION|TLS_KEY_EXCHANGE_GROUPS)[[:space:]]*=' \
      "${TNS_ADMIN:-$ORACLE_HOME/network/admin}/sqlnet.ora" \
      "${TNS_ADMIN:-$ORACLE_HOME/network/admin}/listener.ora"
    </copy>
    ```

    The SQL context does not expose the negotiated group; the `TLS_CIPHERSUITE` value is not proof of hybrid key exchange.

## Task 5: Test TLS 1.3 and TLS 1.2

Repeat the connection tests after enabling the hybrid preference to check that TLS 1.3 still works and TLS 1.2 remains available for compatibility. Each alias selects a specific TLS version, so you can test both paths explicitly.

The SQL query confirms the connection’s protocol, TLS version, and cipher suite. It does not report the negotiated key-exchange group: a successful TLS 1.3 connection confirms connectivity, but does not by itself prove that hybrid key exchange was used.

Use the provided script to create connection-specific aliases. Do not copy or edit TNS entries by hand.

1. Create the version-specific aliases.

    ```bash
    <copy>
    ./tls_setup_test_aliases.sh
    </copy>
    ```

    The script reads the TCPS host, port, and service from `${PDB_NAME}_tls`, then creates `${PDB_NAME}_tls13` and `${PDB_NAME}_tls12` with connection-specific TLS versions. It backs up `tnsnames.ora` before editing it. If both version aliases already exist, it leaves them unchanged; if only one exists, review the file before continuing.

2. Connect through the TLS 1.3 alias and verify the session.

    ```bash
    <copy>
    sqlplus "system@${PDB_NAME}_tls13"
    </copy>
    ```

    ```sql
    <copy>
    SELECT SYS_CONTEXT('USERENV', 'NETWORK_PROTOCOL') AS network_protocol,
           SYS_CONTEXT('USERENV', 'TLS_VERSION') AS tls_version,
           SYS_CONTEXT('USERENV', 'TLS_CIPHERSUITE') AS tls_ciphersuite
      FROM dual;
    </copy>
    ```

    The result should show `tcps` and `TLSv1.3`. On 26ai, or on 19.32 after switching to the next-generation provider, Task 4 makes `hybrid` the preferred TLS 1.3 key-exchange group when both endpoints support it.

3. Exit SQL*Plus to return to the command line.

    ```sql
    <copy>
    exit
    </copy>
    ```

4. Connect through the TLS 1.2 alias, and run the same query.

    ```bash
    <copy>
    sqlplus "system@${PDB_NAME}_tls12"
    </copy>
    ```

    The result should show `tcps` and `TLSv1.2`. The TLS 1.2 connection demonstrates backward compatibility; it does not use ML-KEM or hybrid key exchange.

### Interpret the results

1. Compare the `${PDB_NAME}_tls13` and `${PDB_NAME}_tls12` query results.

2. Read the individual values as follows.

    - `NETWORK_PROTOCOL=tcps` confirms that the database session uses Transport Layer Security.
    - `TLS_VERSION` confirms which protocol version the endpoints negotiated.
    - `TLS_CIPHERSUITE` identifies the record-layer authentication, encryption, and integrity algorithms. It does not identify the key-exchange group.

For either supported release, `hybrid` is the configured TLS 1.3 preference when the selected provider and both endpoints support it. On 19.32, this requires the next-generation provider.
The SQL context does not expose the negotiated group; the cipher output is not proof of hybrid key exchange.


If TLS 1.3 fails, confirm the selected release and provider, then confirm hybrid support on both endpoints. On 19.32, confirm that the next-generation provider is active. Reload the listener and check that the client uses the intended `TNS_ADMIN` files. If needed, restore the Task 2 backups and reload the listener.

## Task 6: Basic troubleshooting

1. Confirm which client configuration files are active. Check `TNS_ADMIN`, the `sqlnet.ora` file it selects (or the default Oracle Net directory), and the `tnsnames.ora` entry for the alias you selected. Settings omitted from an alias may still apply through `sqlnet.ora`.

2. Use the following as initial checks, not guaranteed diagnoses:

    | Error | Initial quick troubleshooting check |
    | --- | --- |
    | [ORA-29002: SSL transport detected invalid or obsolete server certificate](https://docs.oracle.com/en/error-help/db/ora-29002/) | Check certificate-name matching, including settings inherited from `sqlnet.ora`. Use a hostname covered by the certificate or configure its exact full DN with `TLS_SERVER_CERT_DN`. |
    | [ORA-29024: Certificate validation failure](https://docs.oracle.com/en/error-help/db/ora-29024/) | Check certificate dates, the client clock, the certificate chain, and whether the client trusts the issuing CA. With `WALLET_LOCATION=SYSTEM`, check the client machine OS trust store. |
    | [ORA-28759: failure to open file](https://docs.oracle.com/en/error-help/db/ora-28759/) | Check the configured wallet path, file existence, and permissions for the account running the client or listener. Use tracing to identify the file that could not be opened. |
    | [ORA-28860: Fatal SSL error](https://docs.oracle.com/en/error-help/db/ora-28860/) | Check that both endpoints support the configured TLS versions, cipher suites, and key-exchange groups. Confirm the required cryptographic provider is active, then inspect client and server traces for the specific handshake failure. |
    | [ORA-28865: SSL connection has closed](https://docs.oracle.com/en/error-help/db/ora-28865/) | Check listener/server logs and network connectivity for a dropped connection or process termination. Enable tracing and retry to locate the failure. |

3. For an ORA-29002 failure, review the name-matching settings. Removing `SSL_SERVER_DN_MATCH` from `tnsnames.ora` does not disable matching if `sqlnet.ora` contains `SSL_SERVER_DN_MATCH=YES`. In the observed lab failure, TLS 1.3 negotiation completed, but the subsequent server DN check failed.

    For a temporary diagnostic in this disposable lab, use the following alias and replace `<database-host-or-IP>` with the database host or IP address:

    ```text
    pdb1_tls =
      (DESCRIPTION =
        (ADDRESS = (PROTOCOL = TCPS)(HOST = <database-host-or-IP>)(PORT = 2484))
        (CONNECT_DATA =
          (SERVER = DEDICATED)
          (SERVICE_NAME = pdb1)
        )
        (SECURITY =
          (WALLET_LOCATION = SYSTEM)
          (SSL_SERVER_DN_MATCH = NO)
        )
      )
    ```

    - The explicit `NO` overrides the inherited matching setting for this connection. Use it only as a temporary diagnostic in this disposable lab. Certificate trust and validity checks still apply, but server identity matching is disabled.
    - The preferred fix is to retain matching and use a certificate-matching hostname or the exact certificate DN.
    - `SSL_SERVER_CERT_DN=YES` is incorrect: that parameter expects a distinguished name, not a Boolean.
    - The example retains the `SSL_` spelling used by the tested client. Elsewhere, this lab uses the corresponding `TLS_SERVER_DN_MATCH` and `TLS_SERVER_CERT_DN` names. Do not mix both spellings for the same setting.
    - `WALLET_LOCATION=SYSTEM` refers to the client machine trust store. Installing a CA on the Linux database host does not install it on a separate Windows client.

4. If the client reports `NL-00427: bad list`, inspect the named file for malformed lists or unbalanced parentheses.

## Task 7: Optional rollback

1. Use `tls_restore.sh` to restore the original Oracle Net files saved before the lab. The script backs up the current files first, requires the non-production acknowledgement and prompts for explicit rollback confirmation, restarts the listener, and re-registers database services. It does not change wallets or certificates; wallet-directory backups are retained.

    ```bash
    <copy>
    ./tls_restore.sh
    </copy>
    ```

    The default `original` selector restores the `.before-tls-fastlab` backups. To restore a timestamped backup instead, set `TLS_RESTORE_BACKUP` to the timestamp suffix.

You may now proceed to the next lab.


## Signature Workshop

Ready to dive deeper? These workshops move from TLS setup to a complete encrypted database connection.

👉 [Successfully protect your database communication using 1-way Transport Layer Security (TLS)](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3631)

## Learn More

- [Oracle AI Database 26ai Security Guide: Transport Layer Security](https://docs.oracle.com/en/database/oracle/oracle-database/26/dbseg/configuring-transport-layer-security-encryption.html)
- [Oracle AI Database 26ai Net Services Reference: `sqlnet.ora` Parameters](https://docs.oracle.com/en/database/oracle/oracle-database/26/netrf/parameters-for-the-sqlnet.ora.html)
- [Oracle Database 19c Security Guide: Transport Layer Security](https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/configuring-transport-layer-security-encryption.html)
- [Oracle Database 19c Net Services Reference: `sqlnet.ora` Parameters](https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/parameters-for-the-sqlnet.ora.html)
- [Oracle Database 19c Now Supports TLS 1.3, Post-Quantum Cryptography, and FIPS 140-3 Mode](https://blogs.oracle.com/database/database-19c-now-supports-tls-1-3-post-quantum-cryptography)
- [Both is better - Oracle AI Database 26ai adds hybrid-mode quantum-resistant support](https://blogs.oracle.com/database/hybrid-pqc)
- [Announcing support for TLS 1.3 in Oracle Database 23ai](https://blogs.oracle.com/database/announcing-tls13)
- [Oracle AI Database walletless TLS](https://www.braddiggs.com/2026/08/oracle-ai-database-walletless-tls.html) (community article)

## Acknowledgements

- **Author** - Richard C. Evans
- **Last Updated By/Date** - Richard C. Evans, September 2026
- **Technical references** - Oracle Database Security documentation and Oracle Database Insider articles listed above
