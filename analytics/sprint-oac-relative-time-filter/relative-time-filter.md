# How do I create a relative time filter in Oracle Analytics?

Duration: 1 minute

When working with date columns in your dataset within Oracle Analytics Cloud, you have the ability to create a relative time filter for your visualizations. The relative time filter allows you to create a date filter relative to today's date whether that's looking at data from the past or looking at a projection into the future. The three settings you can modify are the Type, Increment, and Time Level.

## Create a relative time filter
>**Note:** You must have the **DV Content Author** role to complete the following steps.

1. Open a workbook that includes a date column type. Go to the **Data Panel**, locate the **Date** column, and drag  and drop it on the filter bar.

    ![Drop date](images/drop-date.png)

2. Select the **Menu** option on the **Date** filter by clicking on the three dots.

    ![Menu option](images/date-menu.png)

3. Select **Relative Time**. This will display the settings for your relative time filter.

   You can specify the relative filter's type, increment, and time level. This example filters for the last three months.

    ![Reltaive time](images/relative-time.png)

    **Type** allows you to choose from three options which are:
    * Last: This includes data for the last N number of time increments relative to today
    * Next: This includes data for the next N number of time increments relative to today (This only works if you have projected data for the future)
    * To Date: This includes data from the beginning of the indicated incremental time to today

    **Increment** allows you to select the number of increments you want to view your filter type for.

    **Time Level** lets you choose the granularity of the time from years up to seconds.

Congratulations, you have learned how to create a relative time filter in Oracle Analytics!

## Learn more

* [Relative Time Filters](https://www.wegobeyond.co.uk/oracle-analytics-cloud-105-2-new-feature-focus-relative-time-filters/)

## Acknowledgements
* **Author** - Nagwang Gyamtso, Product Manager, Product Strategy
* **Last Updated By/Date** - Nagwang Gyamtso,  June 2022
