# How do I search for the workbook's description in Oracle Analytics Cloud and Server (OAC & OAS)?

Duration: 1 minute

You can use the Home page to search for  items such as workbooks, saved objects, of dataset columns.

Searching on a workbook's description is an effective way for you to search, but you must use the proper search syntax for Oracle Analytics to return any results.

This sprint teaches you how to use the syntax to search on a workbook's description.

### Scenario
You want to narrow your search using a description of a workbook but you are not seeing any results.

## Search for workbook description
>**Note:** You must have the **BI Content Author** role to complete the following steps.

1. Make sure that the datasets and workbooks have descriptions for easy searching.

    ![Index dataset](images/index-dataset.png)

>**Note:** You can use *description: or desc:*. Both will search for the description of a workbook.

2. In the Oracle Analytics Home page, click the Search bar and type *description:* followed by the term to search for. For example, *desc: Order* returns results containing all the workbooks with "Order" in their descriptions.

    ![Description with one term](images/desc-term.png)

3. If you receive multiple results and you want to narrow your search even further using multiple terms, include *and* between the two terms to search for. For example, if you want to search for 'Order Sales', you would type '*desc: Order and desc: Sales*'. This will result in workbooks containing both the words Order and Sales.

    ![Description with two terms](images/desc-multiple.png)

Congratulations, you've learned how to use the advanced search capabilities to search for a workbook's description in Oracle Analytics!  To learn about other advanced search capabilities, expand the section below.

## Learn More
* [Find Data, Workbooks, and Visualizations](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/find-and-explore-your-content.html#GUID-318C1CCF-5889-4A8B-A8B8-2FF01AC2937F)

## Acknowledgements
* **Author** - Nagwang Gyamtso, Product Manager, Product Strategy
* **Last Updated By/Date** - Nagwang Gyamtso,  June 2022
