# How do I explore the project detail page in Query Service?
Duration: 10 minutes

You will get familiar with the components of the project detail page in Query Service.

### Prerequisites
* An Oracle Cloud Account.
* A Query Service project.
* The required policies to allow access to the Data Catalog instance, Oracle Object Storage, and Query Service projects.

## Exploring the Project Detail Page in Query Service

1. Sign in to the Oracle Cloud Infrastructure Console using your tenancy, username, and password. The **Console** Home page is displayed. Open the **Navigation** menu and click **Analytics & AI**. Under **Data Lake**, click **Query Service**.

2. On the **Query Service Projects** page, click the desired project name link to display the project's detail page.

    ![The project name link is highlighted.](./images/project-name-link.png " ")  

3. On the project's detail page, you can click the **Query Editor** buttons either under the project's name or in the **Worksheets** section to access the Query Editor. In addition, in the **Worksheets** section, you can click on a worksheet name link to display the queries in the worksheet in Query Editor.

    ![The worksheet detail page is displayed.](./images/project-detail-page.png " ")  

4. The following worksheet example contains three queries. To run all three queries, click **Run Worksheet**. Three informational messages are displayed briefly about each query about to be executed. When the queries execution is completed successfully, the status of running the worksheet in the **Last Query Result** tab changes from **In Progress** to  **Succeeded**. The **Last Query Result** tab shows the output of the last query executed.

    ![Three queries on the worksheet and run worksheet is highlighted.](./images/run-worksheet.png " ")

5. To view the output of all three queries in the worksheet, click the **Query Executions** tab. Next, click the **View Result** link that is associated with a query to view its output. Click the **View Result** link that is associated with the **query-CUSTSALES** to view its output.

    ![The queries' names and view result links are highlighted.](./images/view-results.png " ")

7. Click the **View Result** link that is associated with the **query-CUSTSALES** to view its output. Click **Close** when you are done.

    ![The query-CUSTSALES and the view result link are highlighted.](./images/query-custsales.png " ")

8. Click **Worksheets** in the breadcrumbs to return to the project's detail page. Click **Edit** to display the **Edit Query Service Project** panel. You can use this panel to edit the project's name, edit or add a description, and edit the project-level settings. When you done with your changes, click **Save Changes**. To exit this panel, click **Cancel**.

    ![The Edit Query Service Project panel is displayed.](./images/edit-project.png " ")

9. In the **Resources** section, click **Tables**. The **Tables** for the selected schema are displayed. This section was covered in detail earlier in this workshop.

    ![The Tables section is displayed.](./images/tables-section.png " ")

10. In the **Resources** section, click **Query Executions**. The **Query Executions** section is displayed. This section was covered in detail earlier in this workshop.

    ![The Tables section is displayed.](./images/filter-query-executions.png " ")

    >**Note:** You can use the **View Query Executions from Worksheet** drop-down list to display all query executions from all of worksheets (default), or choose a specific worksheet.

11. In the **Resources** section, click **Workshop Requests**. The **Workshop Requests** section is displayed. In this example, we clicked on one of the **CREATE\_TABLE** links that failed for us. The **CREATE\_TABLE** page is displayed. By default, the **Log Messages** section is displayed. The messages provides you with important debugging information.

    ![The CREATE_TABLE page is displayed.](./images/create-table-page.png " ")

12. Since this workshop request did fail, we can click the **Error Messages** link in the **Resources** section to find out more details about the failed job. The error message indicates a problem trying to connect to the tables.  

    ![The CREATE_TABLE page is displayed.](./images/error-message.png " ")


## Learn More

* [Signing In to the Console](https://docs.cloud.oracle.com/en-us/iaas/Content/GSG/Tasks/signingin.htm).
* [Oracle Cloud Infrastructure Documentation](https://docs.oracle.com/en-us/iaas/Content/GSG/Concepts/baremetalintro.htm)


## Acknowledgements
* **Author:** Lauran Serhal, Consulting User Assistance Developer
* **Contributors:**
    + Alexey Filanovskiy, Senior Principal Product Manager
    + Ravi Ramkissoon, Software Development Director
* **Last Updated By/Date:** Lauran Serhal, August 2022
