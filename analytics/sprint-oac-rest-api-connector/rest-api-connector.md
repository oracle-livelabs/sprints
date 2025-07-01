# How do I setup the REST API connector in Oracle Analytics Cloud (OAC) and Oracle Analytics Server(OAS)?

Duration: 3 minutes

This sprint teaches you how to use a REST API connector to create an OAC connection.

## Setup the REST API connector

>**Note:** You must have the **BI Service Administrator** role to complete the following steps.

1. In the Oracle Analytics Home page, click **Create** and select **Connections**. Click **REST API**.

  ![Connections](images/create-connections.png)

2. In Create Connection, enter values in these fields:

	 * REST base URL
   * REST endpoints
   * Authentication
   * Authentication Header
   * Security Token

   Click **Save**

  ![Enter REST API connector details](images/connection-details.png)

3. Use the REST API connection to create a dataset. From the Home page, click **Create** and select **Dataset**.

   In Create Dataset, select the **REST API connection** you created.

  ![Create dataset](images/create-dataset.png)

4. In the connection panel, expand the REST API connection to the **AUTOREST** schema to access the result sets of the endpoints. The RESULTS tables contain the data from the endpoints and the others contain metadata of the endpoints.

  ![New dataset](images/new-dataset.png)

Congratulations, you've learned how to setup the REST API connector in Oracle Analytics!

## Learn More

* [Connect to Data from REST Endpoints (Preview)](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acsds/connect-data-rest-endpoints.html)
* [Connect Oracle Analytics to Data Sources with Rest API](https://blogs.oracle.com/analytics/post/connect-oracle-analytics-to-rest-api-data-sources)
* [Create a Dataset from a Data Source with REST Endpoints](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-dataset-rest-connection.html)
* [Oracle Analytics REST API Connector](http://www.elffar.co.uk/blog/oracle-analytics-rest-api-connector)

## Acknowledgements

* **Author** - Joel Acha, Senior Business Solutions Architect, Qubix
* **Last Updated By/Date** - Nagwang Gyamtso, November 2022
