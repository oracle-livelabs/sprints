# How do I enable the cache dashboard listing dropdown menu in Oracle Analytics Cloud and Server (OAC & OAS)?

Duration: 1 minute

The Cache Dashboard Listing Dropdown Menu option is a great way to improve performance of dashboard listing. When enabled, this setting will only populate the dashboard listing dropdown menu one time per user session.

## Enable cache dashboard listing dropdown menu

>**Note:** You must have the **BI Service Administrator** application role to complete this Sprint. This setting can result in a stale list and is refreshed when your user logs out and logs back in.

1. In your Oracle Analytics instance, click the **Navigation menu** and select **Console**.

  ![Console](images/console.png)

2. Under **Configuration and Settings**, select **Advanced System Settings**.

  ![System Settings](images/system-settings.png)

3. Within the Advanced System Settings, click on **Performance and Compatibility** and search for **Cache Dashboard Listing Dropdown Menu**. Toggle the button to enable this option.

  ![Performance](images/performance.png)

4. Once you enable this option, scroll to the top and click **Apply** to apply this change.

  ![Restart](images/restart.png)

5. The Cache Dashboard Listing Dropdown Menu should now be enabled.

  ![Confirm restart](images/obips.png)


## Acknowledgements
* **Author** - Ahmed Awan, CEAL
* **Last Updated By/Date** - Nagwang Gyamtso, November 2022
