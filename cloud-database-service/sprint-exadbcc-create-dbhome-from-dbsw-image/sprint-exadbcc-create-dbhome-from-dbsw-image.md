# How do I Create a new Oracle Database Home from a Custom Database Software Image in Exadata Database Service on Cloud@Customer?
Duration: 10 minutes

After you create a database software image, you can use it to create an Oracle Database Home in an Exadata Database Service on Cloud@Customer.
 
  * **Database software images** are resources containing Oracle Database software used to provision and patch Oracle Databases and Oracle Database Homes.
  * **Database software images** are either **Oracle-published software releases** or **custom software images that you create**.
  * **Custom Database Software Images** are images that include specified patches and updates that meet your organization's standards.
 
## Using the console to create a Database Home from a Custom Database Software Image

1. Open the navigation menu. Under **Oracle Database**, click **Exadata Cloud@Customer**.

2. Navigate to the Exadata VM Cluster Resource you want to create the new Database Home on.

3. Under **Resources**, click **Database Homes**.

4. Click **Create Database Home**.

5. In the **Create Database Home** dialog, enter the following:

    - Database Home display name: The display name for the Database Home.
    - Database Image: Determines what Oracle Database version is used for the database.

6. Click **Change Database Image** to use a custom database software image.

7. Select **Custom Database Software Images**

    ![Select Custom Database Software Image](./images/select-custom-dbsw-image.png" ")

    - Use the **Choose a compartment** and **Select a database version** selectors to limit the list of custom database software images to a specific compartment or Oracle Database software major release version.

    - After choosing a software image, click **Select** to return to the Create Database dialog.


8. Click **Show Advanced Options** to specify advanced options and to add **tags** to your Database Home.

9. Click **Create Database Home**.


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, April 2023
