# <title>

Welcome to this **Oracle Database Vault LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience regarding separating sensitive data from your privileged users, such as database administrators, system administrators, and cloud administrators. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction


### Prerequisites

- <Prerequisites may require addtional FastLab creation>  


### Video Walkthrough

<add a walkthrough. Upload to videohub>

[ONNX Model](videohub:1_rl1otmla)

## Task 1: Login to SQL | Database Actions

1. In the ADB Console, click Database Actions and select SQL

    ![OCI](./images/sql.png " ")

## Task 2: Create a Database Vault Realm to protect the schema

The first thing you'll do is create a realm to secure the `SH1.CUSTOMERS` table from access by `DBA_DEBRA` and `SH1` (table owner) and grant access to `APPUSER` only.

A realm is a protected zone inside the database where database schemas, objects, and roles can be secured. For example, you can secure a set of schemas, objects, and roles that are related to accounting, sales, or human resources. After you have secured these into a realm, you can use the realm to control the use of system and object privileges by specific accounts or roles. This enables you to enforce context-sensitive access controls for anyone who wants to use these schemas, objects, and roles.

1. To demonstrate the effects of this realm, it's important to execute the same SQL query from these 3 users before and after creating the realm:

   - To proceed, **open SQL Worksheet in 3 web-browser pages** connected with a different user (*`DBA_DEBRA`*, *`SH1`* and *`APPUSER`*). Open an **incognito** browser window to connect as **`DBA_DEBRA`**. Copy the main portion of the URL (before the `/ords`) and paste it into the incognito browser window.

       ![](./images/adb-dr_009a.png "Copy the URL and open an incogito browser window to login as SH1_READER.")

   - You will see an incognito window. Paste your URL into the browser window.

       ![](./images/adb-dr_010a.png "Paste the URL into your incognito browser window.")

   - Click **`Go`** for **SQL Developer Web**

       ![](./images/adb-dr_011a.png "Click Go on SQL Developer Web")

   - Expand the **Advanced** setting and enter the following information for **Path**, **Username** and **Password** and click **Sign in**.

      - Path (lowercase)

         ```
         <copy>dba_debra</copy>
         ```

      - Username (case insensitive)

         ```
         <copy>DBA_DEBRA</copy>
         ```

      - Password (case sensitive)

         ```
         <copy>WElcome_123#</copy>
         ```

      - The output should look similar to this screenshot.

         ![](./images/adb-dr_012a.png "Authentication as dba_debra for the path and username.")

2. Once you have authenticated as **`DBA_DEBRA`**, you will choose `SQL` and click **Open**

       ![](./images/adb-dr_014a.png "In SQL, click Go to launch the SQL application")

3. As all three users, run the following command to view the CUSTOMER data.

    - Copy/Paste and execute the following query

         ```
         <copy>
            SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
            FROM sh1.customers
            WHERE rownum < 10;
         </copy>
         ```

       - as user "**`DBA_DEBRA`**"

          ![](./images/adb-dbv_012c.png "Query as DBA_DEBRA ")

       - as user "**`SH1`**"

          ![](./images/adb-dbv_013.png "Query as SH1 ")

       - as user "**`APPUSER`**"

          ![](./images/adb-dbv_014.png "Query as APPUSER ")

       **Note:**
          - **These 3 users can see the `SH1.CUSTOMERS` table!**
          - `SH1` because `SH1` owns it
          -	`DBA_DEBRA` because it has the DBA role
          - `APPUSER` because it have the "`READ ANY TABLE`" system privilege

4. Now, let's create a realm to secure `SH1` tables by executing this query below as the *`SEC_ADMIN_OWEN`* user. So, please **open a 4th web-browser window**

      ```
      <copy>
      -- Create the "PROTECT_SH1" DV realm
         BEGIN
            DVSYS.DBMS_MACADM.CREATE_REALM(
                realm_name => 'PROTECT_SH1'
                ,description => 'A mandatory realm to protect SH1 tables'
                ,enabled => DBMS_MACUTL.G_YES
                ,audit_options => DBMS_MACUTL.G_REALM_AUDIT_FAIL
                ,realm_type => 1);
         END;
         /

      -- Show the current DV realm
      SELECT name, description, enabled FROM dba_dv_realm WHERE id# >= 5000 ORDER BY 1;
      </copy>
      ```

       ![](./images/adb-dbv_015.png "View the realm status ")

    **Note:**
       - Now the Realm `PROTECT_SH1` is **created as mandatory and enabled**!
       - The difference between a **mandatory vs regular realm** is regular realms block system privileges (and allows direct object grants) while mandatory realms block direct object grants (even by the object owner) in addition to system privileges

5. Add objects to the realm to protect (here, the `CUSTOMERS` table)

      ```
      <copy>
      -- Set SH1 objects as protected by the DV realm "PROTECT_SH1"
         BEGIN
             DVSYS.DBMS_MACADM.ADD_OBJECT_TO_REALM(
                 realm_name   => 'PROTECT_SH1',
                 object_owner => 'SH1',
                 object_name  => 'CUSTOMERS',
                 object_type  => 'TABLE');
         END;
         /

      -- Show the objects protected by the DV realm PROTECT_SH1
      SELECT realm_name, owner, object_name, object_type
        FROM dvsys.dba_dv_realm_object
       WHERE realm_name IN (SELECT name FROM dvsys.dv$realm WHERE id# >= 5000);
      </copy>
      ```

   ![](./images/adb-dbv_016.png "Add objects to the realm and view the status. ")

       **Note:** Now the table `CUSTOMERS` is protected and no one can access on it!

6. Check the effect of this realm

      - Execute again the following query in SQL Worsheet of each the 3 users (*`DBA_DEBRA`*, *`SH1`* and *`APPUSER`*)

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

       - as user "**`DBA_DEBRA`**"

          ![](./images/adb-dbv_017.png "Run the query as DBA_DEBRA ")

       - as user "**`SH1`**"

          ![](./images/adb-dbv_018.png "Run the query as SH1 ")

       - as user "**`APPUSER`**"

          ![](./images/adb-dbv_019.png "Run the query as APPUSER ")

       - **Objects in the realm cannot be accessed by any database users**, including the DBA (`DBA_DEBRA`) and the schema owner (`SH1`)!

7. Now, go back to SQL Worksheet as the *`SEC_ADMIN_OWEN`* user and make sure you have an authorized application user (`APPUSER`) in the realm by executing this query

      ```
      <copy>
      -- Grant access to APPUSER only for the DV realm "PROTECT_SH1"
         BEGIN
             DVSYS.DBMS_MACADM.ADD_AUTH_TO_REALM(
                 realm_name   => 'PROTECT_SH1',
                 grantee      => 'APPUSER');
         END;
         /
      </copy>
      ```

   ![](./images/adb-dbv_020.png "Add authorization to the realm ")

8. Re-execute the SQL query to show that only `APPUSER` now can read the data

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

       - as user "**`DBA_DEBRA`**"

          ![](./images/adb-dbv_017.png "Run the query  ")

       - as user "**`SH1`**"

          ![](./images/adb-dbv_018.png "Run the query  ")

       - as user "**`APPUSER`**"

          ![](./images/adb-dbv_014.png "Run the query  ")

       - **`APPUSER` must be the only user who has access to the table from now!**

## Task 3: Validate the imported model

1. Execute the following query in the SQL worksheet:

    ```sql
    <copy>
    select model_name, algorithm, mining_function from user_mining_models where  model_name='ALL_MINILM_L12_V2';
    </copy>
    ```

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Use Autonomous Database 15 Minute Quick Start](https://livelabs.oracle.com/pls/apex/f?p=133:180:4579534958655::::wid:928)

## Learn More

* [Now Available! Pre-built Embedding Generation model for Oracle AI Database](https://blogs.oracle.com/machinelearning/use-our-prebuilt-onnx-model-now-available-for-embedding-generation-in-oracle-database-23ai)

* [OML4Py: Leveraging ONNX and Hugging Face for AI Vector Search](https://blogs.oracle.com/machinelearning/oml4py-leveraging-onnx-and-hugging-face-for-advanced-ai-vector-search)


## Acknowledgements
* **Author** -Kevin Lazarz, Database Product Management
* **Last Updated By/Date** - Kevin Lazarz, November 2025
