# How do I create a current year vs previous year analysis with the same dataset in Oracle Analytics Cloud and Server (OAC & OAS)?

Duration: 4 minutes

Suppose you uploaded the "SampleOrders-DS" file to a dataset and then try to create a visualization analyzing current year sales versus previous year sales. The table contains one column representing Sales and one column representing Years. In this scenario, you're missing a column for last year's sales.

This sprint shows you how to work around this issue by uploading the table twice to the dataset, creating a column called Previous Year Sales, and joining it to the Sales column.

   ![No Last Year Sales](images/no-last-year-sales.png)

## Prepare the dataset and create a current year vs previous year analysis

>**Note:** You must have the **DV Content Author** role to complete the following steps.

1. From the Home page, click Create and select Dataset to create the dataset.

2. Add the file again to the dataset. In Dataset editor, go to the Connection panel, click Add, Add File, and then select the same data file.

In the Create Dataset dialog, go to the Name field, add "Last Year" to the end of the file name. Click OK.

   ![Ok](images/dataset-same-file-ok.png)  

3. Create a **YEAR** column in the first dataset table.

Click to open the first table . Click **Add Preparation Step**. In the **Name** field, enter YEAR, and in the function field, enter **YEAR(Order Date)**.

Click Validate, and then click Add Step.
      >**Note:** In your own example, replace 'Order Date' in the function with the date you want to compare.

      ![YEAR](images/column-year.png)

4. Create a **Previous YEAR** column in the second dataset table.

Click to open the second table. Click **Add Preparation Step**. In the **Name** field, enter 'Previous YEAR', and in the function field, enter **YEAR(Order Date)+1**.

Click Validate, and then click Add Step.

   ![Last YEAR](images/column-last-year.png)

5. In the second table, locate and double-click the **Sales** column and rename it to '**Sales Previous YEAR**'.

   ![Sales Previous YEAR](images/column-sales-previous-year.png)  

6. Click to open the **Join Diagram**, click the table join. From the join type drop-down, choose Left, and select the YEAR and Previous YEAR columns to join them.

Note: We chose the left outer join to access all of the YEAR column's data.
Go to the **Join Diagram** and click the join in the middle. Choose Left Join for the join type and select the two columns you created to join on. For example, join 'YEAR' with 'Previous Year'.

    > **Note:** You choose left outer join to access all of the YEAR column's data.

   ![Left Join](images/left-join.png)  


7. Right-click on the first table and select **Preserve Grain**.

      ![Preserve Grain](images/preserve-grain.png)

8. Click **Save** to save and name the dataset. Click**OK**.

    ![Save Dataset](images/dataset-save.png)  

9.  Click **Create Workbook**.

    ![Create Workbook](images/create-workbook.png)  

10. Select **Sales**, **YEAR** and **Sales Previous YEAR**. Right click Choose **Pick Visualization** and clickt **Table**.

    ![Pick Visualization](images/pick-visualization.png)  

11. Now you have Sales and Previous Year Sales in one table.

    ![Sales](images/last-year-sales.png)  

Congratulations! You have just learned how to analyze current year vs previous year data using the same dataset.


## Learn More
* [Add Multiple Files to a Dataset](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-dataset-files.html#GUID-3314A9C3-9780-40C6-A71E-AA0B29689165)
* [Joining Multiple Files In a Single Oracle Analytics Dataset](https://www.youtube.com/watch?v=mJmuDIdqCqU)
>**Note:** Click [here](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/what-is-preserve-grain.html) to learn more about how preserve grain works.

## Acknowledgements
* **Author** - Lucian Dinescu, Product Strategy, Analytics
* **Last Updated By/Date** - Lucian Dinescu,  June 2022
