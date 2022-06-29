# How do I run CRUD operations in SQL?

Duration: 15 minutes
 
## Create sample table 

A CREATE TABLE statement creates a table. Tables contain columns and constraints, rules to which data must conform. Table-level constraints specify a column or columns. Columns have a data type and can specify column constraints (column-level constraints).

The table owner and the database owner automatically gain the following privileges on the table and are able to grant these privileges to other users

* INSERT
* SELECT
* REFERENCES
* TRIGGER
* UPDATE

      let us create a sample table emp
 
      ```
      <copy>   
      CREATE TABLE emp  ( emp_id NUMBER , first_name VARCHAR2(128) , last_name VARCHAR2(128)  ); 
      </copy>
      ``` 

## Insert records

1. Insert few records 
   
      ```
      <copy>   
      insert into emp  ( emp_id, first_name, last_name) values (1, 'James','Smith'); 
      insert into emp  ( emp_id, first_name, last_name) values (2, 'Jon','Doe'); 
      </copy>
      ``` 
       
## Update record 

2. Update record based on emp id
   
      ```
      <copy>   
      update emp set first_name='Jane' where emp_id=2; 
      </copy>
      ``` 

      Verify table for updated record

      ```
      <copy>   
      select * from emp; 
      </copy>
      ``` 

## Delete record 

3. Delete record based on emp id
   
      ```
      <copy>   
      delete from emp where emp_id=2  ; 
      </copy>
      ``` 

4. Verify table for deleted record. 

      ```
      <copy>   
      select * from emp; 
      </copy>
      ```  

## Learn More

* [Create Table](https://docs.oracle.com/cd/B28359_01/server.111/b28310/tables003.htm) 