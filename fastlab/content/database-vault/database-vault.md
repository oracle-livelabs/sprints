# Quickly protect your sensitive data from privileged users

Welcome to this **Oracle Database Vault LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience protecting sensitive data from privileged users, such as database administrators, system administrators, and cloud administrators. You will go from beginner to confident user in a short time.

## The Wake-Up Call

Your Chief Compliance Officer (CCO) walks into your office with troubling news: "We have a problem. If someone steals our database administrator (DBA) credentials, they'll have unrestricted access to all customer data. Even with trusted DBAs, regulators require technical controls, not just trust. We need separation of duties, and we need it fast."

The reality hits hard: as an administrative user, you can see everything in the database. While you're trustworthy, regulations don't operate on trust—they require technical controls that prevent even privileged users from accessing sensitive data unless there's a legitimate business need.


Estimated Time: 15 minutes

## FastLab Introduction

### Prerequisites

This lab assumes Database Vault is already configured and enabled on your Oracle Autonomous AI Database. For detailed setup instructions and a comprehensive Database Vault workshop, check out our [signature workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3071).

### Video Walkthrough

<add a walkthrough. Upload to videohub>

[Database Vault realm creation](videohub:1_rl1otmla)

## Task 1: Login to SQL | Database Actions

**The Situation:** Your CCO is waiting for results. You need to quickly demonstrate how Database Vault can enforce separation of duties. The clock is ticking, and you're about to show how to protect sensitive data in under 15 minutes.

1. In the ADB Console, click Database Actions and select SQL.

    ![OCI](./images/sql.png "Image demonstrating how to open the SQL page in Database Actions on OCI for an ADB instance.")

## Task 2: Create the `SH1` schema and clone the SH.CUSTOMERS table

**The Challenge:** You need to demonstrate the problem first. Right now, as a privileged user, you can see all customer data—names, emails, phone numbers. The regulators won't accept this. Let's set up a test environment that mirrors your production customer data so you can show exactly what needs to be protected.

1. In this scenario, the first thing you'll do is create a schema-only database account and a new table based on the Sales History (SH), which is included in your Oracle Autonomous AI Database. A schema-only account is useful for storing objects without the security risk of authentication. 

      ```
         <copy>
           CREATE USER sh1 NO AUTHENTICATION;
           GRANT UNLIMITED TABLESPACE TO sh1;
         </copy>
      ```

      ```
         <copy>
           CREATE TABLE sh1.customers AS SELECT * FROM sh.customers;
         </copy>
      ```

      **Note**: You are creating this schema and table for testing purposes. In an actual deployment, you would apply the policy to your schemas or schema objects.


2. Verify you can query the new table. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

**The CCO was right!** You can query and see all of the data. Next, you'll mitigate this issue. 

## Task 3: Create a Database Vault realm to protect the SH1 schema

**The Solution:** Now comes the game-changer. You're about to implement the technical control your CCO needs—a Database Vault realm that will block even your administrator credentials from accessing customer data. This is how you prove to regulators that trust isn't your security model; technical enforcement is.

A realm is a protected zone that secures database schemas, database objects, and/or database roles. Use realms to control access to sensitive data by restricting system and object privileges to specific database accounts or database roles.

1. First, ensure Database Vault is enabled by querying the view.

      ```
      <copy>
         SELECT * FROM dba_dv_status WHERE name = 'DV_ENABLE_STATUS';
      </copy>
      ```

2. Next, create a Database Vault realm to secure all objects in the `SH1` schema. A mandatory realm blocks all access attempts, including by the schema owner and DBAs, and only allows explicitly authorized users to access protected objects. 

      ```
      <copy>
      -- Create the "PROTECT_SH1" DV realm
         BEGIN
            DBMS_MACADM.CREATE_REALM(
                realm_name => 'PROTECT_SH1',
                description => 'A mandatory realm to protect SH1 tables',
                enabled => DBMS_MACUTL.G_YES,
                realm_type => DBMS_MACADM.MANDATORY_REALM);
         END;
         /
      </copy>
      ```

      **Note:** This is an example lab. In a production environment, you would not want `ADMIN` or other highly privileged users to have access to sensitive data. You should use named database accounts (e.g., GKRAMER, CMACK, JSMITH) instead of shared accounts (e.g., SYS, SYSTEM, ADMIN).


3. Next, add all objects in the `SH1` schema to the realm. The realm protection will include objects that `SH1` might create in the future. 

      ```
      <copy>
      -- Set SH1 objects as protected by the DV realm "PROTECT_SH1"
         BEGIN
             DBMS_MACADM.ADD_OBJECT_TO_REALM(
                 realm_name   => 'PROTECT_SH1',
                 object_owner => 'SH1',
                 object_name  => '%',
                 object_type  => '%');
         END;
         /
      </copy>
      ```

4. Now, **no one can query the data** because no user is authorized to access the data. Use the SQL below to attempt to query the data. You should receive an "insufficient privileges" error.

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

      **Note:** In production, ensure application users are authorized **before** enabling a realm to avoid service disruption. Always test realm configurations in non-production environments first. Database Vault offers a simulation mode for realms to help you identify users or roles that would have been blocked had the realm been enabled. 


5. Add `ADMIN` as an authorized user who can query the data.

      ```
         <copy>
            BEGIN
               DBMS_MACADM.ADD_AUTH_TO_REALM(
                  realm_name   => 'PROTECT_SH1',
                  grantee      => 'ADMIN');
            END;
            /
         </copy>
      ```

      **Note:** Realm authorization works alongside standard database privileges. Users must first have object privileges (e.g., SELECT, INSERT) and then must be explicitly authorized into the realm to access protected objects.

6. Re-execute the SQL query to show that `ADMIN` can now query the data. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```

7. Remove `ADMIN` from the Database Vault realm authorization list. 

      ```
      <copy>
         BEGIN
             DBMS_MACADM.DELETE_AUTH_FROM_REALM(
                 realm_name   => 'PROTECT_SH1',
                 grantee      => 'ADMIN');
         END;
         /
      </copy>
      ```
      
      **Note:** Ideally, you should add only the application user (`SH1`) and named accounts (e.g., GKRAMER, CMACK, JSMITH) to the list and not use shared accounts (e.g., SYS, SYSTEM, ADMIN) to access sensitive data. 


8. Re-execute the SQL query to show that `ADMIN` **cannot** query the data. 

      ```
      <copy>
         SELECT cust_id, cust_first_name, cust_last_name, cust_email, cust_main_phone_number
           FROM sh1.customers
          WHERE rownum < 10;
      </copy>
      ```
   
**Mission Accomplished:** You walk back into your CCO's office with confidence. In just 15 minutes, you've demonstrated a technical control that blocks privileged users—including yourself—from accessing sensitive customer data unless explicitly authorized. No more relying on trust alone. You've implemented separation of duties with Database Vault realms, giving your organization the regulatory compliance it needs while your DBAs maintain their administrative capabilities.

That's it! You've now learned how powerful Oracle Database Vault is and how quickly you can implement separation of duties to meet compliance requirements. Realms allow you to protect sensitive application data while DBAs maintain their administrative capabilities. For a more robust strategy, you can combine realms, Database Vault command rules, and secure application roles to create a comprehensive security policy.


## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Oracle Database Vault on Oracle Autonomous AI Database](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3071)

## Learn More

* [Oracle Database Vault on-premises workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=682)

* [Database Vault Homepage](https://www.oracle.com/security/database-security/database-vault/)



## Acknowledgements
* **Author** - Richard C. Evans, Database Product Management
* **Last Updated By/Date** - Richard C. Evans, December 2025
