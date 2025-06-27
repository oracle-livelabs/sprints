# How do I enable the cache dashboard listing dropdown menu in Oracle Analytics Cloud and Server (OAC & OAS)?

Duration: 1 minute

The Cache Dashboard Listing Dropdown Menu option is a great way to improve performance of dashboard listing. When enabled, this setting will only populate the dashboard listing dropdown menu one time per user session.

## Enable cache dashboard listing dropdown menu

>**Note:** You must have the **BI Service Administrator** role to complete the following steps. Changing this system setting can result in users experiencing stale dashboard lists. After you change this setting, users should log out and log back into Oracle Analytics.

1. In your Oracle Analytics instance, click the **Navigation menu** and select **Console**.

  ![Console](images/console.png)

2. Under **Configuration and Settings**, select **Advanced System Settings**.

  ![Configuration Admin](images/system-settings.png)

3. Within the System Settings, click the **Performance and Compatibility** and search for **Enable Immediate Dashboard Rendering**. Click the toggle to enable it.

  ![System Settings](images/performance.png)

4. Your dashboard content should now be rendered immediately.

  ![Confirm restart](images/obips.png)


## Acknowledgements
* **Author** - Ahmed Awan, CEAL
* **Last Updated By/Date** - Nagwang Gyamtso, November 2022
