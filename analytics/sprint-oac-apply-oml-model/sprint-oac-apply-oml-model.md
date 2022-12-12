# How do I apply a ML model from OML to OAC/OAS?
Duration: 2 minutes

From Oracle Machine Learning, a user can seamlessly apply models that they have built and use them in Oracle's analytics software, specifically Oracle Analytics Cloud and Oracle Analytics Server. Once the connection has been made from OML and OAC/OAS, users can integrate these models into visualizations, data flows, and multitude of other features.

## Create data flow and apply Oracle machine learning model

**Note:** You must have the **DV Content Author** role in order to complete the following steps.

1. First, login to your OAS or OAC instance. In the homepage, click the **Create** button in the top right corner and select **Data Flow**.

    ![Click the Data Flow Button](images/pick-dataflow.png)

2. Select a dataset and click **Add***.

    ![Add Dataset](images/add-dataset.png)

3.  Once the dataset has been uploaded, click the **+** icon right next to your dataset and choose the **Apply Model** button.

    ![Apply Model](images/apply-model.png)

4. Upon selection, you will be prompted to pick the model from OML that you would like to work with. Select the **model** and click **OK**.

    ![Pick the Model](images/select-model.png)

5. Once you have selected your model, it is required to select a target column. Click on **Select a column** and choose the target column from the dropdown menu.

    ![Pick Target Column](images/target-column.png)

6. Now, it is time to save our data. Click on the **+** icon next to the **Apply Model** segment of the data flow and click on **Save Data** from the menu.

    ![Save Data](images/save-data.png)

7. Before we can save the data flow, we have to change the table name that has been provided. Fill in the box with a name of your choice that satisifies the name requirements.

    ![Save Dataset](images/save-dataset.png)

8. After the table name has been changed, we can save the data flow. Select the save button in the top right corner of the screen and click **Save As**.

    ![Save Data Flow](images/save-as-dataflow.png)

9.  Here, select a name for the data flow and click the **OK** button.

    ![Save Data Flow](images/save-dataflow.png)


Congratulations! You have applied a ML model from OML to OAC/OAS through a data flow!

## Learn More

* [Oracle Learning](https://www.youtube.com/watch?v=quIUPzcCaOw)

## Acknowledgements
* **Author** - Bronze Martin, Solution Engineer, North America Specialist Hub
* **Last Updated By/Date** - Bronze Martin, September 2022
