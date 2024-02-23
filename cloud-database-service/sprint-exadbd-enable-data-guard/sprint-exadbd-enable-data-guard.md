# How do I Enable Oracle Data Guard on Exadata Database Service on Dedicated Infrastructure?
Duration: 10 minutes

You can enable Data Guard association between databases using the OCI Console on Exadata Database Service on Dedicated Infrastructure.

* Data Guard associations across Availability Domains or across Regions is supported


## Enable Data Guard on Exadata Database Service on Dedicated Infrastructure using the OCI Console

1. Open the navigation menu. Click **Oracle Database**, then click **Exadata on Oracle Public Cloud**.

2. Choose your **Compartment** that contains the Exadata Database Service instance with the database for which you want to enable Oracle Data Guard.

3. Navigate to the **Exadata VM Cluster** that contains a database you want to assume the primary role.

4. On the Exadata VM Cluster details page, in the **Databases** section, click the name of the database you want to make primary.

  ![Navigate to primary database](./images/navigate-primary-database.png" ")

5. On the Database Details page, under **Resources**, click **Data Guard Associations**.

6. In the **Data Guard Associations** section, click **Enable Data Guard**.

  ![Enable Data Guard Association](./images/enable-dg-association.png" ")

7. On the Enable Data Guard page, configure your Data Guard association.

    - In the **Select peer VM Cluster** section, provide the following information for the standby database.

    ![Select Peer VM](./images/select-peer-vm-cluster.png" ")

      - **Region**: Select a region where you want to locate the standby database. The region where the primary database is located is selected, by default. You can choose to locate the standby database in a different region. The hint text associated with this field tells you in which region the primary database is located.

      - **Availability domain**: Select an availability domain for the standby database. The hint text associated with this field tells you in which availability domain the primary database is located.

      - **Shape**: Select the shape of the standby Exadata system.

      - **Select VM Cluster**: Select the VM Cluster for the standby database. Select a VM cluster from the drop-down list.

      - Data Guard association details:

        * **Data Guard Type**: Select **Active Data Guard** or **Data Guard**. Active Data Guard provides additional features including: Real-Time Query and DML Offload, Automatic Block Repair, Standby Block Change Tracking, Far Sync, Global Data Services, and Application Continuity.

        * **Protection mode**: The protection mode can be Maximum Performance or Maximum Availability.

        * **Transport type**: The redo transport type used for this Data Guard association.

    ![Choose Data Guard Type](./images/choose-data-guard-type.png" ")


      - In the **Choose Database Home** section, choose one of the following:

        * **Select an existing Database Home**: If you use this option, select a home from the Database Home display name drop-down list.

        * **Create a new Database Home**: If you choose this option, enter a name for the new Database Home in the Database Home display name field.

      - In the **Configure standby database**: section, provide standby database details.

        * **Database unique name**: Optionally, specify a value for the **DB\_UNIQUE\_NAME** database parameter.

        * **Database password**: Enter the database administrator password of the primary database. Use this same database administrator password for the standby database.

      - Click **Show Advanced Options** to specify advanced options for the standby database

        * **Management**: Provide the **Oracle SID prefix** for the standby database. The Oracle Database instance number is automatically added to the SID prefix to create the INSTANCE\_NAME database parameter.

8. Click the **Enable Data Guard** button.

    - When you create the association, the details for a database and its peer display their respective roles as **Primary** or **Standby**.

    ![View Data Guard Association State](./images/dg-association-enabled-state.png" ")


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
