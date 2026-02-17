# Create a Snapshot and Thin Clone of an Oracle Pluggable Database (PDB) leveraging Exadata Exascale Technology

**Estimated Time:** ***10 minutes***

## FastLab Introduction

Users can create pluggable database (PDB) snapshots for Exadata Database Service on Exascale Infrastructure. When using Oracle AI Database 26ai on Exadata Database Service on Exascale Infrastructure, you can now create point-in-time snapshots at the PDB level for future use. The snapshots can later be used to efficiently facilitate dev and test environments or to efficiently provide a point-in-time view of PDB data. These PDB snapshots leverage Exascale redirect-on-write technology so that they are created quickly, consume little storage space upon initial creation, and can be created in practically unlimited numbers. This exciting feature is an important enhancement for dev and test environments and enhances operational agility and developer productivity.
   

Watch the video below for a quick walk-through of the lab.
  [Create a Thin Clone PDB on ExaDB-XS](youtube:"Place Holder")

### **Objectives**

- Create a pluggable database (PDB) snapshot in Oracle Exadata Database Service on Exascale Infrastructure.
- Thin clone a PDB snapshot.


### **Prerequisites**

This lab requires the completion of the following:

* Successful creation of a VM Cluster on Exadata Database Service on Exascale Infrastructure.
* Successful creation of Container Database on the VM Cluster, which will also includes the initial Pluggable Database.

## Task 1: Create a Pluggable Database (PDB) Snapshot


1. Open the navigation menu. Under **Oracle Database**, click **Exadata Database Service on Exascale Infrastructure**.

   ![Navigate to Exascale page using the console](./images/navigate-oci-console.png "Navigate to Exascale page using the console")

2. Select your **Region** and your **compartment** from the applied filter to navigate to your **Exascale VM Cluster**. Click the name of your  VM Cluster to open the **VM Cluster** page.
   
   ![Navigate to the VM Cluster page](./images/select-vm-cluster.png "Navigate to the VM Cluster page")

3. On the **VM Clusters** page, select the **Container Databases** tab, then click the Container Database (CDB) that contains the Pluggable Database (PDB) for which you want to create the snapshot. 

   ![Image showing create CDB](./images/select-cdb.png "Image showing create CDB")

   In the Database page, Navigate to the **Pluggable Databases** tab and select the Pluggable Database you want to create a snapshot of.

   ![Image showing PDB](./images/navigate-pdb.png "Image showing PDB")


4. From the PDB main page, under the **Exascale PDB snapshot** tab, click **Create Exascale PDB Snapshot**.

   ![Image showing to create Exascale PDB snapshot](./images/select-create-snapshot.png "Image showing to create Exascale PDB snapshot")
   

5. Enter a name for the snapshot and click **Create**.
   
   ![Image showing to enter Exascale PDB snapshot name](./images/enter-snapshot-name.png "Image showing to enter Exascale PDB snapshot name")


6. As the snapshot is being created, it will appear itemized under the **Exascale PDB snapshot** tab on the parent PDB page.

   ![Image showing to navigate to created exascale pdb snapshot](./images/navigate-snapshot-menu.png "Image showing to navigate to created exascale pdb snapshot")

   > **Note**: Once the snapshot has been created, it serves as a point-in-time view of the data state that can be cloned in the future. Snapshots leverage Exascale redirect-on-write technology and consume very little storage upon initial creation. As data in the parent PDB continue to change, the snapshot will grow in size in order to keep track of the data changes so that the snapshot can maintain the former point in time accurately. Note that the snapshot itself cannot be directly used, instead, it simply maintains the state of the data from the point of time when it was created. To use the snapshot, you must clone it.
   

## Task 2: Thin Clone a PDB Snapshot

Now that you have created a snapshot, you can use it to provision thin clones. Thin clones are space efficient because unchanged blocks are shared between the snapshot and the thin clone without being duplicated. Aside from the starting point, the user experience for creating a clone from a snapshot parallels the familiar user experience of directly cloning a PDB. PDB clones that originate from a snapshot behave the same as any other PDB and can be used normally.

 

1. From the snapshot you created previously, click the three-dot icon **actions** menu and Select **Clone from snapshot**. 
   
   ![Image showing to clone from snapshot](./images/clone-from-snapshot.png "Image showing to clone from snapshot")
   
2. Configure clone PDB options and complete all the required fields for creating a new PDB in the **Clone from snapshot** page.
   
   In the **Clone Pluggable Database** configuration page, select ***Local Clone*** as PDB clone type.

   ![Image showing to clone from snapshot](./images/clone-from-snapshot-option.png "Image showing to clone from snapshot")

   Enter the information to configure the new PDB.

      * Enter the **PDB Name**
      * Enter the password for **Database TDE Wallet password**
   
   Select ***Enable Thin Clone***. Enable Thin Clone checkbox will be checked by default. Unchecking this box will create a thick clone instead of a thin clone of a pluggable database.

   ![Image showing to clone from snapshot](./images/clone-from-snapshot-required-fields.png "Image showing to clone from snapshot")

   
3. Click **Clone** to start the clone provisioning process. Once provisioned, the new clone appears along with all other PDBs associated with the corresponding Container Database (CDB).
   
   ![Image showing list of PDB with the new clone](./images/thin-clone-itemized.png "Image showing list of PDB with the new clone")

   The clone can then be given to a developer or a test team to use. The snapshot can be cloned multiple times in order to give the same data state to multiple individuals or teams to be used independently.    
    
***Congratulations!!!*** You may now **proceed to the next lab**. 

## Signature Workshop

👉 Click here to [Start the Advanced Exascale Workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=4132)

This workshop contains labs that dive deeper into working with Oracle Exadata Database Service on Exascale Infrastructure.


## Learn More

* Click [here](https://docs.oracle.com/en/engineered-systems/exadata-database-machine/exscl/using-oracle-database-exascale-snapshots-and-clones.html) to learn more about using Oracle Database with Exascale Snaphsots and Clones.
* Click [here](https://docs.oracle.com/en-us/iaas/exadb-xs/doc/overview-exadb-xs-service.html) for access to the docuementation and Exadata Database Service on Exascale Infrastructure Overview.
* Click [here](https://blogs.oracle.com/exadata/advantages-of-exadata-exascale) to learn more about the advatages of Exadata Exascale.
* Click [here](https://docs.public.oneportal.content.oci.oraclecloud.com/en-us/iaas/exadata/doc/ecc-create-first-db.html) to learn more about Creating an Oracle Pluggable Database on Exadata Database Service on Exascale Infrastructure.
* Click [here](https://docs.oracle.com/en-us/iaas/exadb-xs/doc/creating-exadb-xs-vault.html) to learn moreon how to Manage the Exascale Database Vaults.
* Click [here](https://blogs.oracle.com/exadata/exascale-storage-fundamentals) to learn more about Exascale Storage Fundementals.

## Acknowledgements

* **Author** - Leo Alvarado, Tammy Bednar Product Management

* **Last Updated By** - Leo Alvarado, Product Management, Feb 2026.
