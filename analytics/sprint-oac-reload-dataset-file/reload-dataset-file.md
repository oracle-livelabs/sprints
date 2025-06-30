# How do I reload my dataset's files in Oracle Analytics Cloud and Server (OAC & OAS)?

Duration: 1 minute

### Situation
When your create a dataset from a file such as a spreadsheet, you might need to reload a newer version of the file so that your workbooks contain the most current data. This sprint teaches you two ways of reloading a file to a dataset.

![Situation canvas](images/first-canvas.png)

## Reload dataset files
>**Note:** You must have the **DV Content Author** role to complete the following steps.

### Reload datasets within a workbook

1. Open your workbook for editing, click **Data**, locate the table sourced from the file that you want to update, click **Actions**, and select **Reload Data**.

    ![Reload data](images/data-reload.png)

2. In Reload Data, click **Select a File** and browse for and select the replacement file. Click **Open**. After the file has been uploaded, click **OK**.

    >**Note:** Your reload will fail, if the new data file is missing columns that are in the original dataset.

    ![Select file](images/select-file.png)

3. In the canvas, click **Visualize**. The visualizations update with the updated data.

    ![Updated](images/updated-canvas.png)


### Reload datasets outside of a workbook

1. In the Oracle Analytics Home page, click **Navigator** and select **Data**.

    ![Datasets navigation](images/console-data.png)

2. In the datasets list, hover over the dataset you want to reload, click **Actions**, and select **Reload Data**.

    ![Reload data](images/reload-data.png)

3. In Reload Data, click Select a File and browse for and select the replacement file. Click **Open**. After the file has been uploaded, click **OK**.

    >**Note:** Your reload will fail if the new data file is missing columns that are in the original dataset.

    ![Reloaded](images/reloaded.png)

Congratulations! You have just learned how to reload a dataset file in Oracle Analytics Cloud and Server (OAC & OAS)!

## Learn More

* [Reload a Dataset's Data](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/reload-datasets-data.html#GUID-2D68121F-6A50-4795-A3A9-95EB56141901)

## Acknowledgements
* **Author** - Nagwang Gyamtso, Product Manager, Product Strategy
* **Last Updated By/Date** - Shiva Oleti,  June 2025
