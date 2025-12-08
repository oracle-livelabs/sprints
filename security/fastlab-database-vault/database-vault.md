# Quickly protect your sensitive data from privileged users

Welcome to this **Oracle Database Vault LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience regarding separating sensitive data from your privileged users, such as database administrators, system administrators, and cloud administrators. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction


### Prerequisites

- <Prerequisites may require addtional FastLab creation>  


### Video Walkthrough

<add a walkthrough. Upload to videohub>

[Database Vault realm creation](videohub:1_rl1otmla)

## Task 1: Login to SQL | Database Actions

1. In the ADB Console, click Database Actions and select SQL

    ![OCI](./images/sql.png " ")

## Task 2: Clone the SH.CUSTOMERS table

1. The first thing you'll do is create a new user and a new table based on the Sales History (SH) that is included in your Oracle Autonomous AI Database. 

      ```
         <copy>
           create user SH1 identified by no authentication;
           grant unlimited tablespace to SH1;
         </copy>
      ```

      ```
         <copy>
           create table sh1.customers as select * From sh.customers;
         </copy>
      ```

2. Verify you can query the new table. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

## Task 3: Create a Database Vault realm to protect the SH1 schema

A realm is a protected zone inside the database where database schemas, objects, and roles can be secured. For example, you can secure a set of schemas, objects, and roles that are related to accounting, sales, or human resources. After you have secured these into a realm, you can use the realm to control the use of system and object privileges by specific accounts or roles. This enables you to enforce context-sensitive access controls for anyone who wants to use these schemas, objects, and roles.

1. First. create a realm to secure all objects in the `SH1` schema. 

      ```
      <copy>
      -- Create the "PROTECT_SH1" DV realm
         BEGIN
            DVSYS.DBMS_MACADM.CREATE_REALM(
                realm_name => 'PROTECT_SH1'
                ,description => 'A mandatory realm to protect SH1 tables'
                ,enabled => DBMS_MACUTL.G_YES
                ,realm_type => 1);
         END;
         /
      </copy>
      ```

2. Add all objects in the `SH1` schema to the realm. The realm protection will include objects that `SH1` might create in the future. 

      ```
      <copy>
      -- Set SH1 objects as protected by the DV realm "PROTECT_SH1"
         BEGIN
             DVSYS.DBMS_MACADM.ADD_OBJECT_TO_REALM(
                 realm_name   => 'PROTECT_SH1',
                 object_owner => 'SH1',
                 object_name  => '%',
                 object_type  => '%');
         END;
         /
      </copy>
      ```


3. Now, **no one can query the data** because there is no authorized user to access the data. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```


4. Add `ADMIN` as an authorized user who could query the data. 

      ```
      <copy>
         BEGIN
             DVSYS.DBMS_MACADM.ADD_AUTH_TO_REALM(
                 realm_name   => 'PROTECT_SH1',
                 grantee      => 'ADMIN');
         END;
         /
      </copy>
      ```


5. Re-execute the SQL query to show that `ADMIN` now can query the data. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```
6. Remove `ADMIN` from the Database Vault realm authorization list. Ideally, you should add only the application user (`SH1`) and named accounts (e.g. `DBA_DEBRA`, `GKRAMER`) to the list and not use shared accounts (e.g. `ADMIN`) to access sensitive data. 

      ```
      <copy>
         BEGIN
             DVSYS.DBMS_MACADM.REMOVE_AUTH_FROM_REALM(
                 realm_name   => 'PROTECT_SH1',
                 grantee      => 'ADMIN');
         END;
         /
      </copy>
      ```
7. Re-execute the SQL query to show that `ADMIN` **cannot** query the data. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

That's it! You've now learned how powerful Oracle Database Vault is and how quickly you could protect your application data from privileged users such as system administrators, cloud administrators, and database administrators. 


## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Oracle Database Vault on Oracle Autonomous AI Database](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3071)

## Learn More

* [Oracle Database Vault on-premises workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=682)

* [Database Vault Hoempage](https://www.oracle.com/security/database-security/database-vault/)



## Acknowledgements
* **Author** -Kevin Lazarz, Database Product Management
* **Last Updated By/Date** - Richard C. Evans, December 2025
