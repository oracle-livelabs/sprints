# How do I Create a Pluggable Database (PDB) in Exadata Database Service?
Duration: 5 minutes

You can create a Pluggable Database (PDB) in Exadata Database Service using the OCI Console
 
## Using the Console to Create a Pluggable Database (PDB)

1. Navigate to the **Exadata VM Cluster** contains the Container Database in which you want to create the PDB.
     
2. On the Exadata VM Cluster details page, In the **Databases** table, under **Resources**. Click the name of the Container Database to display the details page.

3. On the Container Database Details page, click **Pluggable Databases** in the **Resources** section of the page.
     
4. Click **Create Pluggable Database**.
     
5. In the **Create Pluggable Database** dialog, enter the following:

    - **PDB Name:** Enter a name for the PDB.

    - **Unlock my PDB Admin account:** Optional. Select this option to specify a PDB Admin password and configure the PDB to be unlocked at creation.

    - **PDB Admin password:** If you clicked **Unlock my PDB Admin** account, create and enter a PDB admin password.

    - **Confirm PDB Admin password:** Reenter the PDB admin password.

    - **TDE wallet password:** Applicable only to databases using Oracle-managed encryption keys. Enter the TDE wallet password for the parent CDB.

    - **Advanced Options:** Click **Show Advanced options** to apply **tags** to your Pluggable Database.

    ![Create PDB](./images/create-pdb.png" ")


6. Click the **Create Pluggable Database** button.

    - After creating your PDB, state status changes to **Available** State.

    ![PDB Available Status](./images/pdb-available-status.png" ")


       

## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, April 2023
