# How do I check a machine learning model's accuracy in Oracle Analytics Cloud and Server (OAC & OAS)?
Duration: 2 minutes

You can easily create machine learning models and assess their accuracy in Oracle Analytics. You can view a display of accuracy metrics, or access datasets and create visualizations to determine the model's quality.

It's critical to ensure a machine learning model's quality before you use it. Follow this sprint's steps to learn how to quicky and effectively assess a model's accuracy.

## Check a machine learning model's accuracy
o complete these steps, you must have trained a machine learning model. You'll use the trained model to complete these steps. If you don't have a trained model, refer to [here.](https://livelabs.oracle.com/pls/apex/r/dbpm/livelabs/run-workshop?p210_wid=3281&session=107730485068362)
>**Note:** You must have the **DV Content Author** role to complete the following steps.

1. On the Home page, click **Machine Learning**.

    ![OAC homepage](images/oac-homepage.png)

2. Locate and hover over the model that you want to check accuracy for. Click Actions.

    ![OAC machine learning tab](images/oac-machinelearning.png)

3. Click the **Inspect** option.

    ![OAC machine learning tab - inspect](images/oac-machinelearning-inspect.png)

4. Click the **quality** tab and view the model's basic accuracy metrics.The metrics that appear depend on the type of model. For Binary and Multi Classification models a confusion matrix and a number of accuracy metrics are shown. For Numeric Prediction models a graph of residual values and a number of accuracy metrics are displayed.

      >**Note:** For clustering models NO information appears on this screen. Continue to the next step to learn how to access accuracy data for clustering models.

      ![Inspect tab quality page](images/oac-inspect-quality.png)

5. Click the **Related** tab to gain further insights. The Related tab provides objects relating to the model, such as training data and scripts for model training and scoring. The Related tab also lists that datasets generated when the model is trained. These help to assess the model's accuracy. Note that the **Quality** tab may also display some of this data, and some data may remain unused.

    ![Inspect tab related page](images/oac-inspect-related.png)

6. Click the dataset you want to use to assess model quality. When you click a dataset, the Workbook editor opens.

      >**Note:** The only way to assess a cluster model's accuracy is to create a workbook that uses the dataset generated from the cluster model.

      ![Inspect tab related page with model highlight](images/oac-inspect-related-dataset.png)

7. We can now visualize the data in any way we choose to assess model accuracy. For example, we display a bar graph comparing the precision, recall, and F1 score for the different possible classification outputs.

    ![Canvas with confusion matrix dataset](images/oac-accuracy-workbook.png)

Congratulations! You have just learned how to check the accuracy of a machine learning model in Oracle Analytics Cloud and Server (OAC & OAS)!

## Learn More

* [Inspect and modify a prediction model](https://docs.oracle.com/en/cloud/paas/analytics-cloud/tutorial-inspect-modify-prediction-model/index.html)
* [What are a predictive model's related datasets?](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-and-use-oracle-analytics-predictive-models.html#GUID-4C55DF0E-7FBB-40B7-8650-71CCCA574F57)

## Acknowledgements
* **Author** - Miles Novotny, Solution Engineer, North America Specialist Hub
* **Last Updated By/Date** - Miles Novotny, July 2022
