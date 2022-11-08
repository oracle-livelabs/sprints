# How do I create data actions to connect to external URLs from Visualization Canvases?

Duration: 3 minutes

When you click on a specific data column, you have the option to direct the user to an external website to provide more information about that specific column. For example, you can link a vendor's website when you click on a column such as 'vendor'. This Sprint will guide you on how to create data actions to connect to external URLs from within your DV canvas.

## Creating the data action
>**Note:** You must have the **DV Content Author** application role to successfully complete this action.

1. In your OAC homepage, select the workbook you want to create a data action for and click the **Actions menu** when hovering your mouse over the workbook. Click **Open**.

    ![workbook](images/workbook-home-page.png)

2. Click the **edit** icon, then click on the **Actions menu** and select **Data Actions**

    ![after edit](images/after-edit.png)

3. Click the **+** symbol to add a Data Action

    ![Add data actions](images/data-actions-add.png)

4. Enter a name for the new navigation link in the **Name** field. The default **Type** is set to **URL Navigation**.

    ![Type](images/type.png)

5. Click the **Anchor To** field and select the columns that you want the URL to apply to from the options.

    ![Anchor to](images/anchor-to.png)

6. Enter a URL address and optionally include notation and parameters.

   For example, where <em>http://www.example.com?q=${keyValuesForColumn:"COLUMN"}</em> is displayed like <em>www.oracle.com?q=${keyValuesForColumn:"Sales"."Products"."Brand"}</em> The column names that you select here are replaced with values when you invoke the data action.

    ![url](images/url.png)

7. Click **Support Multiple Selection** to set the value. The options are **On** or **Off**

8. Click **OK** to save

    ![ok save](images/ok-save.png)

Congratulations, you have successfully learned how to create Data Actions to connect to external URLs from Visualization Canvases


## Learn More
[Create Data Actions to Connect to External URLs from Visualization Canvases](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-data-actions-connect-external-urls-visualization-canvases.html)

[Work with Multiple Visualizations on a Canvas](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/work-multiple-visualizations-canvas.html)

## Acknowledgements
* **Author** - Thea Lazarova, Solution Engineer, North America Specialist Hub
* **Last Updated By/Date** - Thea Lazarova,  August 2022
