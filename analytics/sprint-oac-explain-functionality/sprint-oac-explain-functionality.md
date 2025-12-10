# How do I use the Explain in Oracle Analytics Cloud and Server (OAC & OAS)?
Duration: 2 minutes

Explain uses machine learning to uncover insights about the data elements in a dataset. You can add the insights to the workbook

## Using Explain to find insights on your data.
>**Note:** You must have the **DV Content Author** role to complete the following steps.


1. In the Oracle Analytics Home page, click **Create** and select **Workbook**. You can optionally open it
from the homepage and skip to step 3.

    ![OAC Homepage](images/1-oac-home.png)

2. In Add Dataset, select the dataset that you want to use Oracle Analytics Explain on and click **Add to Workbook**.

    ![OAC choose dataset](images/2-choose-dataset.png)

3. To use Oracle Analytics Explain, right click a Column and select **Explain**.

    ![OAC workbook choose variable](images/3-select-variable.png)

4. Inspect the results.


    >**Note:** Explain provided **Basic Facts**, **Key Drivers**, **Segments**, and **Anomalies**. Click on each section to view its insights. These four sections of the explain feature are dependent on the data type you choose to Explain. The **Key Drivers** and **Segments** section only appears for variables that are attributes, and the **Basic Facts** and **Anomalies** section only appears for variables that are measures or attributes and use the **sum** or **count** aggregation methods. There are also some variables that will show no results for Explain, such as attributes that have 100 or more unique values.

  ![OAC explain](images/4-explain-variable.png)

5. To add a visualization to the workbook, hover over the visualization and click Select for Canvas. And then click **Add Selected**.

    ![OAC explain choose visuals](images/5-add-explain-visuals.png)

6. You can interact with and update the  visualizations that you added.

    ![OAC explain visuals](images/6-view-explain-visuals.png)

Congratulations, you've learned how to use Explain to find insights and add them to the workbook in Oracle Analytics!

## Learn More

* [A detailed explanation of the Basic Facts, Key Drivers, Segments, and Anomalies sections](https://docs.oracle.com/en/middleware/bi/analytics-desktop/bidvd/analyze-data-explain.html#GUID-1AE7FFB7-9DA5-40EF-A30A-5DC9DEED3D2D)

## Acknowledgements
* **Author** - Miles Novotny, Solution Engineer, North America Specialist Hub
* **Last Updated By/Date** - Shiva Oleti, June 2025
