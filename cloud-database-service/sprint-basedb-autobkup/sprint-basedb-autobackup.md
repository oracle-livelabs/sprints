# How do I Enable Automatic Backups for Oracle Base Database Service DB System.
Duration: 5 minutes

When specifying the settings for backing up the database, You can enable Automatic Backups for a database on an existing Base Database Service VM DB System using the OCI Console
 
* When you launch an Oracle Base DB system, you can optionally enable automatic backups for the initial database.
* Use this procedure to configure automatic backups after the database is created.

Watch the How-to video below for a quick walk-through of the sprint.
[Enable Automatic Backups](youtube:A258cuNZHfw)


## Configure Automatic Backups for a database on an existing Oracle Base Database Service VM DB System

1. In the list of **DB systems**, click the name of the **DB system** that contains the database for which you want to configure automatic backups.

      The details of the DB system, followed by a list of databases, are displayed.

      In the list of **Databases**, click the name of the database for which you want to configure automatic backups.

      The details of the database are displayed.

2. On the **Database Details** page, in the **Database information** tab, under the **Backup** details, indicate whether automatic backups are enabled. When backups are enabled, the details also indicate the chosen backup retention period.


3. To Configure automatic backups, on the **Database Details** page, click **Configure automatic backups**.

  ![Enable Automatic Backup](./images/enable.auto.bkup.png" ")

    In the **Configure automatic backups** dialog, check **Enable automatic backup**.

    When enabling automatic backups, you can choose to configure the following:

  ![Enable Automatic Backup](./images/retention.period.png" ")

      * **Backup retention period**: If you enable automatic backups, you can choose one of the following preset retention  
        periods: 7 days, 15 days, 30 days, 45 days, or 60 days. The default selection is 30 days.

      * **Backup scheduling (UTC)**: If you enable automatic backups, you can choose a two-hour scheduling window to control
        when backup operations begin. If you do not specify a window, the six-hour default window of 00:00 to 06:00 (in the time zone of the DB system's region) is used for your database.

    Click on **Save changes** Button.

## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
