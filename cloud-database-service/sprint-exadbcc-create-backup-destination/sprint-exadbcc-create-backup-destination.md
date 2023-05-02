# How do I create a backup destination for Exadata Database Service on Cloud@Customer?
Duration: 5 minute

You can create a backup destination for Exadata Database Service on Cloud@Customer using the OCI console.
 
## Create a backup destination

1. Open the navigation menu. Under **Oracle Database**, click **Exadata Database Service on Cloud@Customer**.

2. Select the **Region** that contains your Exadata infrastructure.

3. Click **Backup Destinations**.

4. Click **Create Backup Destination**.

5. Provide the requested information in the **Create Backup Destination** page:

    - Choose a compartment

    - Name your backup Destination

    - Choose the backup destination type.

        * Select **Recovery Appliance** or **Network Storage (NFS)**.

        ![Choose Backup destination type](./images/create-bkup-destination.png" ")

          If you select **Recovery Appliance**, then you must also specify the following for Zero Data Loss Recovery Appliance:

          * **Provide the Recovery Appliance connection string**: Specify the Oracle Net Services connection string that connects to the appliance. This information is typically provided by the Zero Data Loss Recovery Appliance administrator.

          * **Provide the Virtual Private Catalog (VPC) Users**: Provide a VPC user name for connecting to the Zero Data Loss Recovery Appliance. You can specify multiple VPC user names in case you want to use the appliance as a backup destination for multiple databases. This information is typically provided by the Zero Data Loss Recovery Appliance administrator.

        If you select **Network Storage (NFS)**, then you must also specify the following:

          * **Self-mount for non-autonomous databases:**

            **Provide the local NFS mount point path:** Specify the local directory path on each VM cluster node where the NFS server location is mounted. The local directory path and the NFS server location must each be the same across all of the VM cluster nodes.

          * **Auto-mount for Autonomous Databases:**

            **Use this destination for Autonomous Databases:**

            **NFS server:** Specify the IP address of the NFS server. Optionally, you can specify up to four IP addresses.

            **NFS export share:** Specify the directory path where the exported file system is mounted.

      - Configure Advanced Options. You can choose to apply tags.

6. Click **Create Backup Destination.**


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
