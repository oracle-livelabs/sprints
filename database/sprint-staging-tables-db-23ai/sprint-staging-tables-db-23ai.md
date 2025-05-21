# Explore “Staging Tables” in Oracle Database 23ai

Duration: 10 minute

The “Staging Tables” are used to store data temporarily for transformation purpose in Datawarehouse.  They replicate the structure of source table and serve as starting point for data transformation. The data will be loaded into one or more staging tables, transformed and moved to the destination tables. The data in the staging tables is volatile and it is common to truncate the staging tables before every load.

Oracle 23ai Offers “Staging Tables” feature and you can create using FOR STAGING clause in the CREATE TABLE command, the Staging tables are normal heap-organized tables.  User can create staging tables with compression using FOR STAGING COMPRESS clause, but the compression is disabled for staging tables. User cannot add compression after staging table is created.

## Task 1: Create a normal PRODUCTS table, staging table STG_PRODUCTS and ORDERS table with COMPRESS in Oracle 23ai

```
<copy>

SQL> CREATE TABLE products 
( product_id        number(8),
  product_name varchar2(60), 
  product_desc VARCHAR2(100),
  product_category varchar2(40),
  product_model_year  number(4),
  price_per_unit  number(8,2));
  Table created.

</copy>
```

```
<copy>

SQL> CREATE TABLE stg_products 
( product_id        number(8),
  product_name varchar2(60), 
  product_desc VARCHAR2(100),
  product_category varchar2(40),
  product_model_year  number(4),
  price_per_unit  number(8,2))
  FOR STAGING;
Table created.

</copy>
```
```
<copy>

SQL> CREATE TABLE orders (
  order_id     NUMBER(10) PRIMARY KEY,
  customer_id  NUMBER(10),
  order_date   DATE,
  status       VARCHAR2(20))
COMPRESS;
Table created.

</copy>
```

## Task 2: Query DBA|USER|ALL|CDB_TABLES to identify staging and non-staging tables

```
<copy>

SQL>COLUMN owner FORMAT A10
SQL> COLUMN table_name FORMAT A25
SQL>COLUMN staging FORMAT A10
SQL>COLUMN compress FORMAT A15

</copy>
```
```
<copy>

SQL>SELECT owner, table_name, staging, compression FROM dba_tables
WHERE table_name in (‘STG_PRODUCT’, ‘PRODUCT’,’ORDERS’);

</copy>
```

Results:

```

OWNER		TABLE_NAME     STAGING   	COMPRESSION
------------------------------------------------------
SALES		STG_PRODUCTS    YES		    DISABLED
SALES		PRODUCTS        NO    	    DISABLED
SALES		ORDERS	        NO    	    ENABLED

3 rows selected

```

## Task 3: Convert into staging table using FOR STAGING clause in ALTER TABLE command

```
<copy>

SQL> ALTER TABLE orders FOR STAGING.

</copy>
```
Table altered.

Query DBA_TABLES to identify heap table converted into staging table or not.

```
<copy>

SQL>SELECT owner, table_name, staging, compression FROM dba_tables
WHERE table_name in (’ORDERS’);

</copy>
```
Results:

```

OWNER		TABLE_NAME       STAGING       COMPRESSION
-------------------------------------------------------
SALES		ORDERS	         YES	       DISABLED

```

When you convert a compressed table into stating, the compression is disabled, and any future inserts won’t be compressed.

## Task 4: Convert staging table into normal table using NOT FOR STAGING clause in ALTER TABLE command

```
<copy>

SQL> ALTER TABLE orders NOT FOR STAGING;

</copy>
```
Table altered.

```
<copy>

SQL> SELECT owner, table_name, staging FROM dba_tables
WHERE table_name in (’ORDERS’);

</copy>
```

Results:
```

OWNER		TABLE_NAME     STAGING
-------------------------------------
SALES		ORDERS	       NO

```
Oracle Database 23ai introduces native support for staging tables by simplifying data staging for ETL and transformations. To take the advantage of all new features upgrade grade to Oracle Database 23ai.

## Learn More

* [Oracle Documentation on Oracle Database 23ai New features](https://docs.oracle.com/en/database/oracle/oracle-database/23/nfcoa/index.html)
* [Oracle Database 23ai New Features Guide](https://docs.oracle.com/en/database/oracle/oracle-database/23/nfcoa/oracle-database-23c-new-features-guide.pdf)
* [Oracle Database 23c Security New Features](https://www.oracleracexpert.com/2024/12/webinar-unlocking-oracle-database-23cs.html)

## Acknowledgements

* **Author:**
    * Satishbabu Gunukula

* **Last Updated By/Date:**
    * Satishbabu Gunukula, May 2025