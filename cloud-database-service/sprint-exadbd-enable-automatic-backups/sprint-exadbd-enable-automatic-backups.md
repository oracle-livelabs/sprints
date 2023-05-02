# How do I Enable Automatic Backups for a database in Exadata Database Service on Dedicated Infrastructure?
Duration: 5 minutes

When you create an Exadata Database Service instance, you can optionally enable automatic backups for the initial database. Use this procedure to enable or disable automatic backups after the database is created.


## Configure Automatic Backups for a database

1. Open the navigation menu. Click **Oracle Database**, then click **Exadata on Oracle Public Cloud**.

2. Choose your **Compartment**.

3. Navigate to the Exadata VM Cluster containing the database you want to configure automatic backups

4. In the list of databases, find the database for which you want to enable or disable automatic backups, and click its name to display database details. The details indicate whether automatic backups are enabled.

5. Click **Configure Automatic Backups**.

6. In the Configure Automatic Backups dialog, enter the following details:

  ![Enable Automatic Backup](./images/enable-automatic-backups.png" ")

    - **Backup Scheduling:** If you enable automatic backups, you can choose a two-hour scheduling window to control when backup operations begin. If you do not specify a window, then a six-hour default window of 00:00 to 06:00 (in the time zone of the DB system's region) is used for your database.

    - **Backup Destination:** Your choices are Autonomous Recovery Service or Object Storage.

    - **Backup Retention Changes:** If you choose to enable automatic backups, you can control the retention period. The system automatically deletes backups at the end of your chosen retention period.

        - Object Storage Backup retention period: 7, 15, 30, 45, 60. Default: 30 days

        - Autonomous Recovery Service protection policy:

            * Bronze: 14 days
            * Silver: 35 days
            * Gold: 65 days
            * Platinum: 95 days
            * Custom defined by you
            * Default: Silver - 35 days

7. Click **Save Changes**


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
