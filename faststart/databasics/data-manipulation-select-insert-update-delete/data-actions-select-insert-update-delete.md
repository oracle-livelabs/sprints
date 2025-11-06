# How to use DML (Data Manipulation Language) to manipulate data in Oracle AI Database

Duration: 15 minutes

## Introduction

Every application relies on four essential data actions: **SELECT, INSERT, UPDATE, and DELETE.**  
These commands, known as Data Manipulation Language (DML), form the foundation of how you interact with data in Oracle Database. They work for both structured relational data and modern JSON.

In this short sprint, you will try each of these commands directly.

---

## Task 1: Launch SQL Worksheet

![OCI Console – Open SQL Worksheet from Database Actions Launchpad](./images/open-sql-worksheet-from-database-actions-launchpad.png "=50%x*")

---

## Task 2: SELECT - Retrieve Data
The `SELECT` statement is used to retrieves rows from a table or view.

```sql
<copy>
SELECT * FROM customers;
</copy>
```

This returns all rows and columns from the `customers` table. Add a `WHERE` clause to filter results:

```sql
<copy>
SELECT name, email
FROM customers
WHERE id = 101;
</copy>
```

---

## Task 3: INSERT - Add New Data
The `INSERT` statement is used to add new rows into a table.

```sql
<copy>
INSERT INTO customers (id, name, email)
VALUES (101, 'Jane Doe', 'jane.doe@example.com');
</copy>
```

---

## Task 4: UPDATE - Modify Existing Data
The `UPDATE` statement is used to make changes to existing column values in a table.

```sql
<copy>
UPDATE customers
SET email = 'new.email@example.com'
WHERE id = 101;
</copy>
```

---

## Task 5: DELETE - Remove Data
The `DELETE` statement is used to remove rows from a table.

```sql
<copy>
DELETE FROM customers
WHERE id = 101;
</copy>
```

---


## Signature Workshop

👉 Click here to [Start the Oracle Database New Features LiveLabs Signature Workshop](https://livelabs.oracle.com/pls/apex/f?p=133:180:115199363143474::::wid:3950)


## Learn More

* Explore more about [SQL Data Manipulation Language](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/SQL-Statements.html#GUID-8E42DBB3-BCA3-4E14-9B36-469CF6F4639F)  
* Try a guided lab in [Oracle LiveLabs](https://livelabs.oracle.com/)  
* Watch the [Oracle Databasics Video](#) to see these commands in action  

---

## Acknowledgements
* **Author** - LiveLabs Team, Eddie Ambler
* **Contributors** - LiveLabs Team, Eddie Ambler
* **Last Updated By/Date** - Eddie Ambler - October 2025
