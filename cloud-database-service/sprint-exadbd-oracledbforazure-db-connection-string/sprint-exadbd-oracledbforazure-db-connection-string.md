# How do I discover the database connection sting of a database in Oracle Exadata Database Service on Oracle Database Service for Azure.
Duration: 1 minute

* Each database resource created in OracleDB for Azure obtains an Azure Connection String that you can use to connect to the database from any Azure application.

* You can find the DB Connection String in Oracle Exadata Database Service on Oracle Database Service for Azure using the Console

 
## Discover Database Connection String of a PDB

1. On your OracleDB for Azure portal, navigate to the **Exadata Database Dedicated** home page. Click **Databases**, then click the name of your **Database (CDB)**.

  ![Exadata Database Service Home Page](./images/exadbhome.png" ")

    * This will display the details page of your Container Database.


2. On the Container Database page, on the left rail, under **Resources**, click on **Pluggable Databases**. then click on the name of your **Pluggable Database**.

  ![Click Pluggable Database](./images/viewpdb.png" ")


     * This will render the Pluggable Database details page

3. In the **Pluggable Database** overview page, you can find the database connection string under the **Connection strings** section.


4. You can copy the Database Connection string by clicking on the **Action Icon** at the right and click on **Copy connection string** button.

  ![Click Copy connection string](./images/conn.png" ")

## Learn more

* Getting Started on Oracle Database Service for Microsoft Azure with Exadata Database Service  [Read blog here](https://blogs.oracle.com/database/post/getting-started-on-odsa-with-exadata-database-service)


## Acknowledgements
* **Author** - Leo Alvarado, Suzanne Holliday, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
