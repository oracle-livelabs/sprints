# Understanding Schemas, Relationships, and Constraints in Oracle Database

Duration: 5 minutes

## Introduction

Schemas, relationships, and constraints are the foundation of every Oracle Database application.  
This short LiveLabs Sprint will help you understand how to organize data into schemas, connect tables with relationships, and enforce data integrity with constraints.

You’ll create two related tables (`DEPARTMENTS` and `EMPLOYEES`), define primary and foreign keys, and see constraints in action.

---

## Step 1: Create a Schema (User)

A schema is a logical collection of database objects owned by a user. For this sprint, let’s create a user (schema) called `HR_SPRINT`.

```
<copy>
CREATE USER hr_sprint IDENTIFIED BY hr_sprint
    DEFAULT TABLESPACE users
    TEMPORARY TABLESPACE temp
    QUOTA UNLIMITED ON users;

GRANT connect, resource TO hr_sprint;
</copy>
```

Switch into this schema:

```
<copy>
ALTER SESSION SET CURRENT_SCHEMA = hr_sprint;
</copy>
```

---

## Step 2: Create the Parent Table

Let’s start with the `DEPARTMENTS` table. It will store department information and use a **primary key** constraint to uniquely identify each row.

```
<copy>
CREATE TABLE departments (  
    dept_id     NUMBER,  
    name        VARCHAR2(50) NOT NULL,  
    location    VARCHAR2(50),  
    CONSTRAINT pk_departments PRIMARY KEY (dept_id)  
);
</copy>
```

---

## Step 3: Create the Child Table with a Relationship

Now let’s create the `EMPLOYEES` table. Notice how it references the parent table through a **foreign key** relationship.

```
<copy>
CREATE TABLE employees (  
    emp_id      NUMBER,  
    name        VARCHAR2(50) NOT NULL,  
    job_title   VARCHAR2(50),  
    hire_date   DATE,  
    salary      NUMBER(8,2),  
    dept_id     NUMBER,  
    CONSTRAINT pk_employees PRIMARY KEY (emp_id),  
    CONSTRAINT fk_employees_dept FOREIGN KEY (dept_id) 
        REFERENCES departments (dept_id)  
);
</copy>
```

This establishes a **One-to-Many (1:N)** relationship:  
One department can have many employees.

---

## Step 4: Insert Data and See Constraints in Action

First insert some valid rows:

```
<copy>
INSERT INTO departments VALUES (10, 'Finance', 'New York');
INSERT INTO departments VALUES (20, 'IT', 'San Francisco');

INSERT INTO employees VALUES (101, 'Alice', 'Analyst', DATE '2022-01-15', 75000, 10);
INSERT INTO employees VALUES (102, 'Bob', 'Developer', DATE '2023-06-01', 90000, 20);
</copy>
```

Now try inserting an invalid row — an employee with a `dept_id` that doesn’t exist:

```
<copy>
INSERT INTO employees VALUES (103, 'Charlie', 'Manager', DATE '2023-07-01', 120000, 30);
</copy>
```

This fails with an error because of the **foreign key constraint**.  
Constraints prevent inconsistent data from entering your schema.

---

## Learn More

👉 Click here to [Start the Oracle Database New Features LiveLabs Signature Workshop](https://livelabs.oracle.com/pls/apex/f?p=133:180:115199363143474::::wid:3950)

### Additional Resources

* [Oracle Databasics Video: Schemas, Relationships, and Constraints](https://livelabs.oracle.com)  
* [Introduction to Oracle Database Concepts - Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/cncpt/introduction-to-oracle-database.html)
* [Introduction to Oracle SQL](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/Introduction-to-Oracle-SQL.html)  



