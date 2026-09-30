# Go Beyond the Data Grant with Deep Data Security Filters

## Introduction

Welcome to this **Oracle Deep Data Security LiveLabs FastLab** workshop.

> Use Deep Data Security filters to further narrow access already established by data grants, without changing the application query.

You will use the same end users, data roles, tables, and seven employee records as the Getting Started with Oracle Deep Data Security lab: Emma is an employee, and Marvin is her manager.

Estimated Time: 20 minutes

### Objectives

In this lab, you will:

- Establish Emma's access to her own record and Marvin's access to his own record and direct reports.
- Use table aliases in data grants and data grant filters.
- Apply salary filters to narrow Marvin's existing access.
- Observe the default AND behavior when multiple filters apply.
- Remove the filters and verify that the original access returns.

## The Authorization Scenario

In this authorization scenario, an HR compensation review needs to focus on employees in selected salary bands. Marvin already has access to his own record and his direct reports. You want the database to restrict his view to the selected bands, even when his query contains no WHERE clause.

The salary bands in this lab are illustrative authorization rules. They make the effect of each filter easy to see using the existing sample data. This lab uses direct SQL connections; it does not create an AI agent or chat application.

## How Filters Restrict Existing Access

A **data grant** establishes access. A **data grant filter** restricts that existing access. A filter does not grant access by itself and cannot make an otherwise unauthorized employee record visible.

| Component | Purpose in this lab |
|---|---|
| End users | Emma and Marvin authenticate with their own identities. |
| Data roles | `HRAPP_EMPLOYEES` carries employee access; `HRAPP_MANAGERS` carries manager access and the new filters. |
| Data grants | Allow access to the user's own record and, for Marvin, his direct reports. |
| Data grant filters | Narrow Marvin's authorized records by salary. |

Ordinary data grants are additive by default: their allowed data is combined with OR. Applicable data grant filters are restrictive and combine with AND by default. A filter narrows the underlying access; it does not grant additional rows.

**Aliases:** In `ON hr.employees e`, `e` is a temporary name for the table within that policy definition. `e.salary` refers to the table's salary column. An alias creates no new object and changes no permissions. Each SQL statement or policy has its own alias scope.

### Prerequisites

- **Oracle AI Database 26ai with the October Release Update**.
- A lab DBA account with the privileges required to create schemas, tables, end users, data roles, data grants, and filters.
- SQL*Plus or SQLcl and a working database connection alias. Replace `hrdb` in the examples with your connection alias.
- A disposable lab environment. The standalone setup creates an HR schema and uses sample passwords and fictitious employee data.

Keep an administrator session open for policy changes. Use separate Emma and Marvin sessions for queries, and reconnect those end-user sessions after each policy change before checking results.

## Task 1: Set Up the HR Sample Data

**The Scenario:** You have an AI tool that will query an HR employees table containing sensitive data — Social Security Numbers, salaries, and employee contact information. You want any user to be able to issue a query, a question, and receive only the data they are supposed to see.

> **Connection:** Run as your lab DBA account.

1. Create a schema-only account for the HR data and grant it tablespace quota.

    `CREATE USER hr NO AUTHENTICATION` creates a schema that owns tables and objects but cannot be used to connect to the database directly. This is the recommended pattern for application schemas — the schema holds data, but nobody logs in as `hr`.

      ```sql
      <copy>
      CREATE USER hr NO AUTHENTICATION default tablespace users;
      ALTER USER hr QUOTA UNLIMITED ON users;
      </copy>
      ```

2. Create the `EMPLOYEES` table and insert sample data. A `MANAGERS` lookup table is also created — it maps each employee to their manager's username, which the manager data grant uses to identify direct reports.

      ```sql
      <copy>
      CREATE TABLE hr.employees (
        employee_id   NUMBER PRIMARY KEY,
        first_name    VARCHAR2(50),
        last_name     VARCHAR2(50),
        job_code      VARCHAR2(10),
        department_id NUMBER,
        ssn           VARCHAR2(20),
        photo         BLOB,
        phone_number  VARCHAR2(30),
        salary        NUMBER(10,2),
        user_name     VARCHAR2(128),
        manager_id    NUMBER);

      -- CEO
      INSERT INTO hr.employees VALUES (1, 'Grace', 'Young', 'CEO', NULL, '111-11-1111', NULL, '555-100-0001', 235000, 'grace', NULL);

      -- Manager
      INSERT INTO hr.employees VALUES (2, 'Marvin', 'Morgan', 'SWE_MGR', 1, '222-22-2222', NULL, '555-100-0002', 175000, 'marvin', 1);

      -- Software engineering team
      INSERT INTO hr.employees VALUES (3, 'Emma', 'Baker', 'SWE2', 1, '333-33-3333', NULL, '555-100-0003', 120000, 'emma', 2);
      INSERT INTO hr.employees VALUES (4, 'Charlie', 'Davis', 'SWE1', 1, '444-44-4444', NULL, '555-100-0004', 95000, 'charlie', 2);
      INSERT INTO hr.employees VALUES (5, 'Dana', 'Lee', 'SWE3', 1, '555-55-5555', NULL, '555-100-0005', 130000, 'dana', 2);

      -- Other departments
      INSERT INTO hr.employees VALUES (6, 'Bob', 'Smith', 'SALES_REP', 2, '666-66-6666', NULL, '555-100-0006', 145000, 'bob', 1);
      INSERT INTO hr.employees VALUES (7, 'Fiona', 'Chen', 'HR_REP', 3, '777-77-7777', NULL, '555-100-0007', 92000, 'fiona', 1);

      -- Build a Manager lookup table

      CREATE TABLE hr.managers (
            manager_id      NUMBER,
            employee_id     NUMBER,
            mgr_user_name   VARCHAR2(128),
            mgr_first_name  VARCHAR2(50),
            mgr_last_name   VARCHAR2(50));

      -- Add the managers
      INSERT INTO hr.managers (manager_id, employee_id, mgr_user_name, mgr_first_name, mgr_last_name)
      SELECT
      e.manager_id,
      e.employee_id,
      m.user_name AS mgr_user_name,
      m.first_name AS mgr_first_name,
      m.last_name AS mgr_last_name
      FROM hr.employees e
      JOIN hr.employees m
      ON e.manager_id = m.employee_id
      WHERE e.manager_id IS NOT NULL;

      COMMIT;
      </copy>
      ```

3. Verify you can see all the data, including SSNs and the `user_name` column that data grants will use to identify each employee.

      ```sql
      <copy>
      SELECT employee_id, first_name, last_name, user_name, ssn, salary
        FROM hr.employees
       ORDER BY employee_id;
      </copy>
      ```

      | `EMPLOYEE_ID` | `FIRST_NAME` | `LAST_NAME` | `USER_NAME` | SSN | SALARY |
      |---|---|---|---|---|---|
      | 1 | Grace | Young | grace | 111-11-1111 | 235000 |
      | 2 | Marvin | Morgan | marvin | 222-22-2222 | 175000 |
      | 3 | Emma | Baker | emma | 333-33-3333 | 120000 |
      | 4 | Charlie | Davis | charlie | 444-44-4444 | 95000 |
      | 5 | Dana | Lee | dana | 555-55-5555 | 130000 |
      | 6 | Bob | Smith | bob | 666-66-6666 | 145000 |
      | 7 | Fiona | Chen | fiona | 777-77-7777 | 92000 |
      {: title="All employees"}

      Your setup account can see all seven rows. Next, you will establish separate access for Emma and Marvin, then restrict that access with data grant filters.

## Task 2: Create the End Users

**The Simplest Case:** Before introducing data roles, you will create Emma and Marvin as end users — the new Oracle Database identity type that data grants are built around. This is the foundation of how Deep Data Security works: identity-first access, with no schema ownership required.

> **Connection:** Run as your lab DBA account.

1. Create Emma as the new type of database user, an end user. Emma is an employee.

      ```sql
      <copy>
      CREATE END USER emma IDENTIFIED BY Oracle123;
      </copy>
      ```

2. Create Marvin as the new type of database user, an end user. Marvin is an employee and a manager.

      ```sql
      <copy>
      CREATE END USER marvin IDENTIFIED BY Oracle123;
      </copy>
      ```

## Task 3: Configure Roles and User Access

> **Connection:** Run as your lab DBA account.

1. Create a database role that grants `CREATE SESSION`. This role allows your end users (Emma and Marvin) to open a direct connection to the database through utilities like SQL*Plus and SQLcl.

      ```sql
      <copy>
      CREATE ROLE direct_logon_role;
      GRANT CREATE SESSION TO direct_logon_role;
      </copy>
      ```

2. Next, create the data roles. The data grants will be granted to these data roles.

      ```sql
      <copy>
      CREATE DATA ROLE HRAPP_EMPLOYEES;
      CREATE DATA ROLE HRAPP_MANAGERS;
      </copy>
      ```

3. Now, Emma and Marvin need to have their appropriate data roles. Emma is an employee and Marvin is a manager.

      ```sql
      <copy>
      GRANT DATA ROLE HRAPP_EMPLOYEES to emma;
      GRANT DATA ROLE HRAPP_EMPLOYEES to marvin;
      GRANT DATA ROLE HRAPP_MANAGERS to marvin;
      </copy>
      ```

4. Finally, grant the `DIRECT_LOGON_ROLE` database role to the `HRAPP_EMPLOYEES` data role. You do not need to grant it to the `HRAPP_MANAGERS` data role because all managers are employees.

      ```sql
      <copy>
      GRANT direct_logon_role TO hrapp_employees;
      </copy>
      ```

5. Verify the data role grants are in place.

      ```sql
      <copy>
      SELECT data_role, role_type, grantee, grantee_type
        FROM dba_data_role_grants;
      </copy>
      ```

      | `DATA_ROLE` | `ROLE_TYPE` | GRANTEE | `GRANTEE_TYPE` |
      |---|---|---|---|
      | `HRAPP_EMPLOYEES` | DATA ROLE | MARVIN | END USER |
      | `HRAPP_EMPLOYEES` | DATA ROLE | EMMA | END USER |
      | `HRAPP_MANAGERS` | DATA ROLE | MARVIN | END USER |
      | `DIRECT_LOGON_ROLE` | DATABASE ROLE | `HRAPP_EMPLOYEES` | DATA ROLE |
      {: title="Data role grants"}

      Emma and Marvin both have `HRAPP_EMPLOYEES`. Only Marvin has `HRAPP_MANAGERS`. The last row shows `DIRECT_LOGON_ROLE` — a standard database role — granted to the `HRAPP_EMPLOYEES` data role, which is what allows direct SQL*Plus connections for both users.

## Task 4: Establish Baseline Employee and Manager Access

> **Connection:** Run as your lab DBA account.

1. Allow employees to read their own record. This lab focuses on SELECT; these grants replace the original lab's SELECT and UPDATE grants if they already exist.

    ```sql
    <copy>
    CREATE OR REPLACE DATA GRANT hr.HRAPP_EMPLOYEE_ACCESS
      AS SELECT
      ON hr.employees e
      WHERE UPPER(e.user_name) = UPPER(ORA_END_USER_CONTEXT.username)
      TO HRAPP_EMPLOYEES;
    </copy>
    ```

    `e` is the alias for `hr.employees`. The identity comparison works for both Emma and Marvin.

2. Allow managers to read their direct reports, excluding SSNs.

    ```sql
    <copy>
    CREATE OR REPLACE DATA GRANT hr.HRAPP_MANAGER_ACCESS
      AS SELECT (ALL COLUMNS EXCEPT ssn)
      ON hr.employees e
      WHERE e.manager_id IN (
        SELECT m.manager_id
        FROM hr.managers m
        WHERE UPPER(m.mgr_user_name) = UPPER(ORA_END_USER_CONTEXT.username)
      )
      TO HRAPP_MANAGERS;
    </copy>
    ```

    `e.manager_id` belongs to the protected employee table; `m.manager_id` belongs to the manager lookup table. This is a grant with a lookup subquery, not a `WHEN SELECT GRANTED ON` cross-table grant. No additional table or sample data is needed.

3. Open a terminal and connect as Emma. Enter `Oracle123` when prompted.

    ```text
    <copy>
    sqlplus emma@hrdb
    </copy>
    ```

    Run this query:

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    | `EMPLOYEE_ID` | `FIRST_NAME` | `DEPARTMENT_ID` | SALARY | SSN |
    |---|---|---|---|---|
    | 3 | Emma | 1 | 120000 | 333-33-3333 |

4. In another terminal, connect as Marvin. Enter `Oracle123` when prompted.

    ```text
    <copy>
    sqlplus marvin@hrdb
    </copy>
    ```

    Run the same query:

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    | `EMPLOYEE_ID` | `FIRST_NAME` | `DEPARTMENT_ID` | SALARY | SSN |
    |---|---|---|---|---|
    | 2 | Marvin | 1 | 175000 | 222-22-2222 |
    | 3 | Emma | 1 | 120000 | NULL |
    | 4 | Charlie | 1 | 95000 | NULL |
    | 5 | Dana | 1 | 130000 | NULL |

    Marvin's own record comes from the employee grant. His direct reports come from the manager grant. Unauthorized SSN values appear as NULL (normally blank in SQL*Plus). Grace, Bob, and Fiona are outside his granted access.

## Task 5: Restrict Marvin's Access by Salary

> **Connection:** Create the filter as your lab DBA account.

1. Restrict users with `HRAPP_MANAGERS` to authorized employee records with salaries of at least 125000.

    ```sql
    <copy>
    CREATE OR REPLACE DATA GRANT FILTER hr.HRAPP_HIGH_SALARY_FILTER
      AS SELECT
      ON hr.employees e
      WHERE e.salary >= 125000
      TO HRAPP_MANAGERS;
    </copy>
    ```

    The alias `e` names the table inside this filter. The alias does not grant access or change the default filter behavior.

    This filter restricts Marvin's applicable SELECT access on the table, including access from his employee grant. It is not limited to rows supplied by the manager grant merely because the filter is assigned to `HRAPP_MANAGERS`.

2. Reconnect as Marvin and run the same query without a WHERE clause.

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    | `EMPLOYEE_ID` | `FIRST_NAME` | `DEPARTMENT_ID` | SALARY | SSN |
    |---|---|---|---|---|
    | 2 | Marvin | 1 | 175000 | 222-22-2222 |
    | 5 | Dana | 1 | 130000 | NULL |

    Emma and Charlie no longer meet the salary filter. Grace and Bob also earn at least 125000, but remain invisible because the original grants do not authorize Marvin to read them. The filter narrows access; it does not add access.

3. Reconnect as Emma and run the same query.

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    Emma still sees her own record and salary of 120000. She does not have `HRAPP_MANAGERS`, so this filter does not apply to her.

## Task 6: See How Multiple Filters Combine

> **Connection:** Make policy changes as your lab DBA account; query as Marvin.

1. Add a second filter for salaries of at most 100000.

    ```sql
    <copy>
    CREATE OR REPLACE DATA GRANT FILTER hr.HRAPP_LOW_SALARY_FILTER
      AS SELECT
      ON hr.employees e
      WHERE e.salary <= 100000
      TO HRAPP_MANAGERS;
    </copy>
    ```

2. Reconnect as Marvin and query the table.

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    **Expected result: no rows selected.** By default, both applicable filters must be true:

    ```sql
    salary >= 125000 AND salary <= 100000
    ```

    No salary can satisfy both conditions.

3. Try a query that explicitly requests an unauthorized employee or a record excluded by the filters.

    ```sql
    <copy>
    SELECT employee_id, first_name, salary
    FROM hr.employees
    WHERE employee_id IN (1, 3);
    </copy>
    ```

    **Expected result: no rows selected.** Grace (1) is outside Marvin's original grants; Emma (3) is excluded by the salary filters. An application-supplied WHERE clause does not replace the database authorization conditions.

## Task 7: Remove the Filters and Restore Baseline Access

> **Connection:** Run the DROP statements as your lab DBA account.

1. Remove both filters. Keep the ordinary grants.

    ```sql
    <copy>
    DROP DATA GRANT FILTER hr.HRAPP_HIGH_SALARY_FILTER;
    DROP DATA GRANT FILTER hr.HRAPP_LOW_SALARY_FILTER;
    </copy>
    ```

    Complete both statements before querying again.

2. Reconnect as Marvin and repeat the query.

    ```sql
    <copy>
    SELECT employee_id, first_name, department_id, salary, ssn
    FROM hr.employees
    ORDER BY employee_id;
    </copy>
    ```

    **Expected result:** the four rows from Task 4—Marvin, Emma, Charlie, and Dana. Only Marvin's SSN is visible. Removing restrictions restores his underlying granted access; it does not grant access to all seven employees.

## Task 8: Clean Up the Lab (Optional)

Skip this task if you want to keep the users, tables, and SELECT grants for another exercise. If you continued from the original lab, its UPDATE privileges have been replaced; rerun that lab's grant definitions if you need to restore its update exercises.

> **Connection:** Disconnect Emma and Marvin. Run cleanup as your lab DBA account. Full cleanup deletes the shared lab HR schema and its data, including objects reused from the original lab. Run it only for the disposable schema created for these labs.

1. Remove any remaining filters, including when you stopped before Task 7.

    ```sql
    <copy>
    DROP DATA GRANT FILTER IF EXISTS hr.HRAPP_HIGH_SALARY_FILTER;
    DROP DATA GRANT FILTER IF EXISTS hr.HRAPP_LOW_SALARY_FILTER;
    </copy>
    ```

2. Remove the grants, end users, roles, and lab schema.

    ```sql
    <copy>
    DROP DATA GRANT hr.HRAPP_EMPLOYEE_ACCESS;
    DROP DATA GRANT hr.HRAPP_MANAGER_ACCESS;
    DROP END USER emma;
    DROP END USER marvin;
    DROP DATA ROLE HRAPP_MANAGERS;
    DROP DATA ROLE HRAPP_EMPLOYEES;
    DROP ROLE direct_logon_role;
    DROP USER hr CASCADE;
    </copy>
    ```

## What You Learned

You used the same seven employee records, two tables, and two end users throughout the lab. Only the authorization policies changed.

| Policy stage | Marvin sees | Emma sees |
|---|---|---|
| Original SELECT grants | Marvin, Emma, Charlie, Dana | Emma |
| Salary >= 125000 filter | Marvin, Dana | Emma |
| Both salary filters with default AND | No rows | Emma |
| Both filters removed | Marvin, Emma, Charlie, Dana | Emma |

Data grants establish access. Data grant filters narrow that access, and multiple applicable filters combine with AND by default. Aliases make the policy SQL easier to read. Oracle Database enforces the resulting access when Emma or Marvin queries the table.

## Next Steps

You may now proceed to the next lab. To explore related Deep Data Security patterns, continue with:

- [How Can Cross Table Data Grants Protect Related Records?](../cross-table-data-grants/index.html)
- [Getting Started with Oracle Deep Data Security](../end-user-data-grants/index.html)
- [Oracle Deep Data Security and Microsoft Entra ID](../data-grants/index.html)

## Learn More

- [About Data Grants](https://docs.oracle.com/en/database/oracle/oracle-database/26/ddscg/data-grants.html)
- [Create Data Grants](https://docs.oracle.com/en/database/oracle/oracle-database/26/ddscg/create-data-grants.html)
- [Oracle Deep Data Security](https://www.oracle.com/security/database-security/features/deep-data-security/)
- [Building Trusted Generative AI Experiences with Oracle Deep Data Security](https://blogs.oracle.com/database/building-trusted-genai-experiences-with-oracle-deep-data-security)

## Acknowledgements

- **Based on** — Getting Started with Oracle Deep Data Security, by Roger Wigenstam, Oracle Database Security Product Management.
- **Last Updated** — September 2026.
