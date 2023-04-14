# How do I Clone a Pluggable Database (PDB) in an Oracle Base Database Service DB System.
Duration: 5 minutes

You can clone a PDB in an Oracle Base Database Service DB System using the OCI Console
 
## Create a Pluggable Database (PDB) Clone.

1. Open Your **OCI navigation menu** Click on **Oracle Database**, then click on **Oracle Base Database**.

2. On the left rail, ensure that the **Compartment** chosen contains the **DB system** where you want to create your PDB Clone.

3. In the list of DB systems, click on the name of the **DB System** in which you want to create the PDB clone.

    * *This will bring up the DB Systems details page*

4. In the list of **Databases**, find the database containing the PDB you want to clone. click on the database name to display the details about it.

5. On the left rail under **Resources**, Click **Pluggable databases**

6. In the **Pluggable Databases** section, find the PDB you want to clone, and then click the **PDB name** to display details about it.

7. Near the top of the page, Click on the **Clone** button.

    ![Create PDB CLONE](./images/create-pdb-clone.png" ")

    * *This will render the Clone PDB dialog box*

8. In the **Clone PDB** dialog box, validate pre-populated fields and enter the following:

    * **DB System**: is a pre-populated read-only field.
    * **Destination Database**: This is a pre-populated read-only field.
    * For the **PDB Name**: Provide a name for the new cloned PDB. The name must begin with an alphabetic character and can contain up to 30 characters.
    * For the **Database TDE wallet password**: Enter the TDE wallet password for the parent CDB of the source PDB.
    * For the **Unlock my PDB admin account**: This is Optional. Select this option to specify a PDB admin password and configure the PDB to be unlocked at creation.
    * For the **PDB admin password**: If you click Unlock my PDB admin account, create and enter a new PDB admin password.     
        * The password must contain:
        * 9–30 characters
        * At least two uppercase characters
        * At least two lowercase characters
        * At least two special characters. The valid special characters are underscore ( _ ), a hash sign (#), and a dash (-). You can use two of the same characters or any combination of two of these characters.
        * At least two numeric characters (0-9)
    * **Confirm the PDB admin password**: Enter the PDB admin password again to confirm.

9. Click on the **Clone PDB** button to complete the request.

## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
