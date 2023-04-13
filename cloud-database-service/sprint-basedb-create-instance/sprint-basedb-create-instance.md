# How do I Create an Oracle Base Database Service VM DB System Instance.
Duration: 10 minutes (BaseDB VM DB System Instance provisioning might take approximately 20 minutes)

You can create an Oracle Base Database Service DB System Instance using the OCI Console

Watch the How-to video below for a quick walk-through of the sprint.
[Create DB System](youtube:_GwZYPRwLV8)
 
## Create Oracle Base Database Service VM DB System Instance.

1. Open Your **OCI navigation menu** Click on **Oracle Database**, then click on **Oracle Base Database**.

2.	Click the **“Create DB System”** button to proceed.

    ![Create DB System](./images/create.db.png" ")

    * This will bring up the Create DB System Dialog screen.

**Follow the steps to fill in the information for the DB System.**

3.	Enter a **display name** for your DB system.

4.	Select the **Availability Domain (AD)** in which the DB system will reside, ensuring to select a region that best meets your business needs and satisfies any data location restrictions.

5.	Select **Virtual Machine** for the **Shape Type** option to be used for launching the DB system.

      * The shape type selected determines the list of available shapes to select from in the next step.

6.	Click on **Change Shapes**, For the Shapes, you can choose between **AMD or Intel** Processors.

    ![Change Shape](./images/change.shape.png" ")

7.	Click on the **Select Shape button** to complete the shape selection process.


**Now let’s Choose the type of storage management software that we will use with our database VM.**

8.	Choose between **Oracle Grid Infrastructure** or **Logical Volume Manager** for the Storage Management Software

**Next, we will configure the storage performance.**

9.	Choose between **Balanced & Higher Performance** Storage Volumes

    * For the **Available Data Storage**, Select the amount of Block storage that you want to be allocated to the VM DB System.
    * The **Recovery Area Storage** field displays the amount of storage that will be available for recovery log data (RECO data) based on the amount of storage selected for the DATA space.
    * You can change the amount of Recovery area storage independently after provisioning.

    ![Select Storage performance](./images/select.storage.perf.png" ")

10.	Click on the **Save changes** button to continue configuring the DB system.

11.	Next, Select the **Total number of VM Nodes** and the **Oracle Database Software Edition** for the DB System.

    ![Configure Node](./images/configure.node.png" ")

    ![Select Database Edition](./images/db.edition.png" ")

12.	In the **Add SSH Keys section** of the page, we will add our SSH public key to enable access to the VM DB System via SSH. choose from one of the provided three options.

13.	Select the **License Type** that we want to use for the Virtual Machine DB system.

      * The options are **License included** or **Bring Your Own License (BYOL).**


14.	**In the Network Information section**:

    a)	For the **VCN**, use the pull-down menu to **select the VCN** in which you want to launch the VM DB system.

    b)	For the **CLIENT SUBNET**

    ![Select VCN](./images/select.vcn.png" ")

    c)	The **Use Network Security groups box** is optional and unchecked by default

    d)	For the HOSTNAME PREFIX, enter the desired value.

      * The Hostname Prefix forms the first portion of the DB systems Host Name and will be used as part of the Fully Qualified Domain Name.
      * For RAC systems, the Database service automatically appends a node number after the hostname prefix.

    e)	The **HOST Domain Name**, note how the Subnet DNS and VCN labels are used to auto-generate the **HOST DOMAIN NAME**.

    f)	The **Host and domain URL** is auto-generated and combines the hostname prefix and host domain name to display the fully qualified domain name (FQDN) for the database.

    * If you click on the **Advanced Option Link**, you will see the ability to optionally select a **Fault Domain**, **Time Zone**, or **set Tags** for the DB System.

15.	Click on **Next** to proceed with entering the **details for the initial database.**

    a)	For the **Database Name** field, enter the **desired database name**  

    b)	For the **Database Unique Name Suffix,** enter **the desired value**

      * Note that the Database Unique Name is the combination of the DB Name and the DB Unique Name Suffix.

    c)  Click **Change Database Image Button** to list available database images

      * You are able to choose between **Oracle Database Software Images** and **Custom Database Software Images**.

    ![Choose Database Software Image](./images/db.sw.image.png" ")

      * Click on the **Select** Button to proceed with configuring the database details.


    d)  For the **Pluggable Database Name**, enter **the desired value**

    e)  Enter the **Administrator Credentials**

    ![PDB Name](./images/pdb.name.png" ")

      * Ensure that the **Use Administrator password for the TDE wallet** box is checked if you want to **Use of Oracle Managed Keys**

    f)  For the **Database Workload Type**, you can choose between **Transaction Processing** and **Data Warehouse**

    g)  **Enable Automatic  Backups** is selected by default

    ![Enable Automatic Backups](./images/enable.automatic.bkup.png" ")

      *	You can select the **backup retention period**.

    ![Backup retention period](./images/retention.period.png" ")

      *	Specify the **Backup Scheduling window**

      *	Uncheck the **Enable Automatic Backups** box if you want to configure it after the database is provisioned

    h) If you click on the **Advanced Options** link, you will find three tabs with options to fine-tune the planned database configuration.

      *	The **Management Tab** allows you to change the **Database Character Set** and the **National Character Set**

      *	The **Encryption Tab** allows you to choose between **using Oracle Managed Keys** and **Customer Managed Keys**

      *	The **Tags Tab** allows you **to set tags** that allow you to organize and track resources within your tenancy.

16.	Click on the **Create DB System button** to launch the Create DB System workflow.

      ![Create Database System](./images/create.db.system.png" ")

## Learn more

* Oracle Base Database Service Adds AMD Standard E4 Flex Shapes and Higher Performance Storage  [Read blog here](https://blogs.oracle.com/database/post/oracle-base-database-service-adds-amd-standard-e4-flex-shapes-and-higher-performance-storage)

* Which Cloud Database Service is Right for You? [Read blog here](https://blogs.oracle.com/database/post/cloud-database-services-for-every-workload)

## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
