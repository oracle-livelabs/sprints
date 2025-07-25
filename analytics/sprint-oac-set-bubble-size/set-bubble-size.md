# How do I set min and max bubble size in a map visualization in Oracle Analytics Cloud and Server (OAC and OAS)?

Duration: 3 minutes

A map layer's geometries and properties determine how the layer is rendered on a map. When you choose the point layer type geometry, you can specify the minimum and maximum size bubbles that are displayed on the map

## Set the Min and Max Bubble Size

>**Note:** You must have the **DV Content Author** role to complete the following steps.

1. In the Oracle Analytics Home page, click **Create** and select **Workbook**.

  ![Workbook](images/workbook.png)

2. In Add Data, click the **Sample Order Lines** dataset and click Add to Workbook.

    >**Note**: This is a sample dataset created for testing, you can create this dataset Sample Order Lines from the excel file [here](https://objectstorage.us-phoenix-1.oraclecloud.com/p/bKMx1O9ys8Q7DZOYwVZ71rFprosfFi68lZzLGPtqe0YB5Z9jMeMthPEbcU7cF2G_/n/idbwmyplhk4t/b/LiveLabsFiles/o/Sample%20Order%20Lines%20(Sprint)Sample%20Order%20Lines.xlsx)


  ![Add data](images/add-data.png)

3. In the Data panel, click to select the **City** column, right-click, and select **Pick Visualization**.

  ![Pick visualization](images/pick-visualization.png)

4. Select **Map**.

  ![Select map](images/map.png)

5. The **City Layer** has been added to the workbook.

  ![City layer](images/city-layer.png)

6. Select Properties section and then select Data Layers tab to change any of the City layer properties.

  ![properties](images/properties.png)

7. To add a size metric to the workbook, click **Grammar**, go to the Data panel, and drag **#Sales** to Size.

  ![Size metric](images/size-metric.png)

8. Click **Properties**, click **Data Layers**. Confirm that the Layer Type field is set to Auto (Point). And in the **Min Size** and **Max Size** fields set the bubble size.

  ![Bubble size](images/bubble-size.png)

## Acknowledgements
* **Author** - Ravi Bhuma, CEAL
* **Last Updated By/Date** - Nagwang Gyamtso,  April 2023
