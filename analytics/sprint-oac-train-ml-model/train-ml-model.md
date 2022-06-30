# How do I train a machine learning model in Oracle Analytics Cloud (OAC)?

Duration: 3 minutes

Machine learning is a powerful tool that helps us make data-driven decisions with many use cases. For example, retailers use machine learning to predict when an item will go out of stock so that they can restock that item in a timely manner. In the financial sector, machine learning is used heavily for fraud detection using pattern recognition and anomoly detection. These are just a few use cases out of many and Oracle Analytics provides you with the tools to achieve this. 

In this Sprint, we will use Oracle's embedded machine learning algorithms in Oracle Analytics Cloud to train our HR dataset to predict attrition within a company.

## Train a machine learning model using Data Flow

1. On the homepage of your OAC instance, click **Create** and select **Data Flow**.

    ![Create Data Flow](images/create-df.png)

2. Select the dataset that you want to train the machine learning model with and click **Add**.

    ![Select dataset](images/select-data.png)

3. Click the **Add a step (+)** icon and click **Select Columns**. If you know exactly which columns affect the value you are predicting for, select the columns that have no effect and select **Remove selected**. If you are not sure, then you can use all the columns.

    ![Select columns](images/select-columns.png)

4. Now, let's select the model that we want to predict by clicking the **Add a step (+)** icon and choosing the model appropriate for your case. In this example, since our target is Attrition, which is a binary classifier, we select the **Train Binary Classifier** option.

    >**Note:** To learn more about the machine learning models pre-built into OAC, click [here.](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-and-use-oracle-analytics-predictive-models.html#GUID-97826D44-5785-48F2-BB1E-4709327ADB8B)

    ![Choose training model](images/choose-model.png)

 5. Choose the algorithm you want to train and select **OK**.

     ![Slect algorithm](images/select-algorithm.png)

6. For a supervised model like prediction or classification, click **Target** and select the column you are trying to predict. In this example, since we are predicting attrition, we select the **Attrition** column. If you are working with an unsupervised model like clustering, then a target column is not required.

    >**Note:** To learn more about machine learning and the types of machine learning, click [here.](https://www.oracle.com/data-science/machine-learning/what-is-machine-learning/)

    The **Train Partition Percent** will be set to 80% by default. As a general rule, 80% of your data should be used for training while the 20% should be used for validating your training model. This ratio may change based on the size of your data.

     ![Target](images/target.png)

7. Click **Save Model** and give the model a name in **Model name**. Then click the **Save** icon. 

     ![Save modek](images/save-model.png)


8. Enter a name for the Data Flow and click **OK**.

     ![Save DF](images/save-df.png)

9. Click **Run Data Flow**. Once your Data Flow runs successfully, navigate back to your OAC homepage.

     ![Run df](images/run-df.png)

10. Let's verify that your machine learning model has successfully trained. Click the **Navigation menu** and select **Machine Learning**. The model we just trained will be displayed here with the Type and the Name of the model.

     ![Machine learning](images/machine-learning.png)

11. To view the quality of your machine learning model, right-click the model and select **Inspect**. Then click **Quality** and the model performance metrics will be displayed.

     ![Model quality](images/model-quality.png)

Congratulations, you have just learned how to train a machine learning model in Oracle Analytics Cloud using the Data Flow!

## Learn More
* [Create and Train a Predictive Model](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-and-use-oracle-analytics-predictive-models.html#GUID-533DCE34-CBFC-490F-BCAA-A0F99BAB6B10)
* [Supervised vs. Unsupervised Machine Learning](https://blogs.oracle.com/ai-and-datascience/post/supervised-vs-unsupervised-machine-learning)
