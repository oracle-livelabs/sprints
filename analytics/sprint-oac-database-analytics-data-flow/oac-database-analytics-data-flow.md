# Como ativar a opção Análise de Banco de Dados dentro do fluxo de dados na Oracle Analytics Cloud (OAC)?

Duração: 2 minutos

Ao trabalhar com o fluxo de dados no Oracle Analytics Cloud, você tem a opção de aproveitar o poder das funções do Oracle Database Analytics. As duas funções de banco de dados a que você tem acesso são Análise de Banco de Dados e Análise Gráfica.

* **Database Analytics**: enable you to perform advanced analysis and data mining analysis  
* **Graph Analytics**: enable you to perform geo-spatial analysis

Data Flow is a lightweight, simple and easy to use tool for business users to combine, organize, integrate and produce a curated dataset. Data Flow is an important enabler of a self-service analytics environment.

If you are working with a dataset in Data Flow and you are not seeing the Database Analytics and Graph Analytics options, the following steps will show you how to troubleshoot this.

  ![No Database Analytics Step](images/new-data-flow-no-analytics-step.png)


## Enable Database Analytics in Data Flow
  >**Note:** The Database Analytics option is only available in Data Flow if your data source is an Oracle Autonomous Database or an Oracle Database.
  You must have the **DV Content Author** application role to execute the following steps.

1. On you OAC homepage, click **Create** and select **Data Flow**.

   ![Create Data Flow](images/create-data-flow.png)

2. In the **Add Dataset** dialog, select your dataset from your Database source, then click **Add**.
    > **Note:** notice that the icon is specific to a database dataset

    ![Add Dataset](images/add-dataset.png)  


3. You can see the **Data Flow Editor** with the Data Flow steps.

   ![Data Flow Editor](images/dataflow-editor.png)

4. For each function that you want to perform, click **Add a Step,** represented by the + icon. Here, you will see that you now have the Graph Analytics and the Database Analytics functions available to you.
    >**Tip**: Hover over the last step to display the **Add a Step** option.  

  ![Create Data Flow Step](images/dataflow-steps.png)  

Congratulations! You have just learned how to enable **Database Analytics** functions and **Graph Analytics** with your **OAC Data Flow**.


## Learn More
* [Database Analytics Functions](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/database-analytics-functions.html)
* [Graph Analytics Functions](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/graph-analytics-functions.html)

## Acknowledgements
* **Author** - Lucian Dinescu, Product Strategy, Analytics
* **Last Updated By/Date** - Lucian Dinescu,  June 2022
