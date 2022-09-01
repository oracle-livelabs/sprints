# How do I schedule application updates in Fusion Analytics Warehouse (FAW)?
Duration: 1 minute

There may be scenarios when you want to schedule an available update earlier than the predefined date. You can change the schedule of any application update from the Release Updates tile in the administration console.

## Schedule application updates
>**Note:** You must have the **Service Administrator** application role to successfully complete this Sprint.

1. In your FAW instance, click the **Navigation** menu and select **Console**.

  ![Console](images/console.png)

2. Under **Service Administration**, click **Release Updates**.

  ![Release updates](images/dataconfig.png)

3. If there are multiple releases listed, select the release you would like to update and choose a date for the update. Then click **Save**.
    >**Note:** Release updates are cumulative, meaning that if you have many releases that you haven't applied, they get rolled into one update.

  ![Schedule update](images/schedule.png)

4. A confirmation message will appear to notify that the update has been scheduled. Your application upgrade will run on the scheduled date.

  ![Confirmation](images/confirmation.png)


## Learn More
* [Manage Application Updates](https://docs.oracle.com/en/cloud/saas/analytics/22r2/fawag/manage-application-updates.html#GUID-091A707A-AB05-4F58-99C2-012BEC241E72)
* [Best Practices for Administering Fusion Analytics Warehouse](https://blogs.oracle.com/analytics/post/fusion-analytics-warehouse-best-practice-series---administering-faw)

## Acknowledgements
* **Author** - Krithika Raghavan, Director, Oracle Analytics
* **Last Updated By/Date** - Krithika Raghavan, September 2022
