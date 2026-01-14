# 🔍 Discover and View your Database and Data Lake Assets from your Data Catalog

## Introduction

To build better loan products, SeersEquities’ data team must pull insights from everywhere—internal systems and external sources alike. But before they can transform that data, they need to find it. In this lab, you’ll step into that role. 

You’ll use Oracle Autonomous Database's Catalog Tool to **discover, connect to, and query data** stored in cloud object storage and databases. By the end, you’ll have a single view across your data landscape—so you can spend less time hunting for data and more time using it to power smarter decisions.

Estimated Time: 15 minutes

[Walkthrough video](videohub:1_vl8obrud:medium)

### Objectives

* **Discover and browse data assets** across Autonomous Database and cloud object storage using the Catalog Tool

* Set up **secure connections** to access and unify data from multiple sources

* Query and explore data from a unified catalog to support faster, insight-driven decisions

## Task 1: Access Local Data Catalog | Database Actions

1. Open the **Navigation Menu** by clicking the hamburger icon in the top-left corner.
    ![OCI Console – Open Navigation Menu](./images/select-adb-open-navigation-menu.png "=50%x*")

2. Navigate to Autonomous AI Database Landing Page. Click on **Oracle AI Database**, then select **Autonomous AI Database**.
    ![OCI Console - Navigate to ADB](./images/select-adb-navigate-console-to-adb.png "=50%x*")

3. **Choose Compartment** where your database resides and **select your database from list** of Autonomous AI Databases displayed
    ![OCI Console – Select Compartment and your ADB](./images/select-adb-select-compartment-and-adb.png "=50%x*")

4. On database details page select **Database Actions** button and click on **View all database actions**
    ![OCI Console – Select Database Actions](./images/select-adb-select-database-actions.png "=50%x*")

    **This opens the Database Actions Launchpad**, ***where you can access the built-in web-based tools, including Data Studio.***
    ![OCI Console – Database Actions Launchpad](./images/select-adb-database-actions-launchpad.png "=50%x*")

5. Click on **Data Studio**.  

    ![Access Local Data Catalog](./images/access-local-data-catalog-3.png "Access Local Data Catalog")  

6. Click on **Catalog** on left rail for the **ADB Catalog** to be displayed. You should now see a list of objects contained in your local database.  

    ![Access Local Data Catalog](./images/access-local-data-catalog-4.png "Access Local Data Catalog")  

>You’ve now unlocked a unified view of your data—no matter where it lives. With this foundation in place, you’re ready to explore, connect, and start building data products that drive real insights.

## Task 2: Add Connections to Catalog for Object Storage Buckets & Data Shares  

🚀 Next, you’ll connect your catalog to a specific object storage bucket, so you can start exploring what’s inside.

1. On the left rail of the Database Actions page, select **Data Load**.  

    ![Add Connections to Catalog](./images/select-data-load.png "Add Connections to Catalog")  

2. Then select the **Connections** tile.  

    ![Add Connections to Catalog](./images/add-connections-to-catalog-1.png "Add Connections to Catalog")  

3. On the connections page, create a connection to the **Object Storage** bucket called **LOANAPP\_LAB\_FILES**. On the Connections page, click **Create**, then choose **New Cloud Store Location**.

    ![Add Connections to Catalog](./images/add-connections-to-catalog-3.png "Add Connections to Catalog")  

4. On the **Add Cloud Store Location** page displayed:

    - For Name, enter: **LOANAPP\_LAB\_FILES**
    - For Description, enter: **My Demo Object Storage Bucket**
    - For Credential, select **Public Bucket** radio button
    - Choose the **Select Bucket** radio button
    - From the dropdown list choose the Bucket Named: **LOANAPP\_LAB\_FILES**

    ![Add Connections to Catalog](./images/add-connections-to-catalog-5.png "Add Connections to Catalog")  

  Click the **Create** button to proceed.

5. You’ve just added your own object storage connection to the Catalog, now you can easily discover, track, and query external data alongside your database assets. This step lays the foundation for building richer data products and speeding up access to the insights that matter.

    ![Add Connections to Catalog](./images/add-connections-to-catalog-6.png "Add Connections to Catalog")  

## Task 3: Search for items discovered by your Catalog  

With your connections in place, it’s time to search the catalog. You’ll choose which schemas and entity types to display—so you can quickly find the data that matters.

1. On the left rail, select **Catalog**.  

    ![Search Items in Catalog](./images/search-items-in-catalog-1.png "Search Items in Catalog")  

2. Select the **Connections** quick filter. This shows available connections in the catalog accessible to the connected schema. Confirm that **LOANAPP\_LAB\_FILES** appears in the list.

    >**Note**: On the landing page, the catalog offers quick filters to narrow your search results. If you don’t choose one, it defaults to **Tables and Views**. You can also limit results to all schemas or just a selected one.

    ![Search Items in Catalog](./images/search-items-in-catalog-2.png "Search Items in Catalog")  

3. Select the **Data Objects** quick filter to view items in the catalog visible to the connected schema, then, select **Cloud Objects** in the filter section to see a list of objects in our bucket.

    >**Note**: This view shows the database objects and object storage files available to you.

    ![Data Catalog Data Objects](./images/data-catalog-data-objects.png "Data Catalog Data Objects")

By searching the Catalog with filters and schema selections, you’ve learned how to quickly surface the data that matters. This step helps you cut through clutter and find the right assets faster—so you can spend less time searching and more time building with data.

## Task 4: Preview Data in Catalog  

Preview the data discovered in the catalog. From this view, you’ll see the files available in your object storage buckets.

1. Click the preview icon for the file named **LoanAppCustomer_segment.csv**.  

    ![Data Catalog Data Objects](./images/preview-icon.png "Data Catalog Data Objects")  

2. This displays the contents of the file being previewed without needing to first load it into the database.  

    ![Data Catalog CSV preview](./images/data-catalog-csv-preview.png "Data Catalog CSV Preview")  

   Click **Close** to return to Data Catalog listings  


## Conclusion

***Congratulations***, you have successfully completed the FastLab on working with Autonomous AI Lakehouse! In this lab, you discovered how to connect, browse, and preview data across your database and object storage—all from a single, unified catalog. You’ve built the foundation SeersEquities needs to turn scattered data into data products.

With these skills, you can now help the team evaluate new data faster, integrate it seamlessly, and drive smarter, real-time decisions that power better loan products and risk strategies.

## Signature Workshop

👉 Click here to [Start the Advanced AI Lakehouse Workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3689)

This workshop contains labs that dive deeper into working with Oracle Autonomous AI Lakehouse.

## Learn more
* [Oracle Autonomous AI Lakehouse](https://www.oracle.com/autonomous-database/autonomous-ai-lakehouse/)
* [Use Lakehouse with Autonomous AI Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-lakehouse.html)
* [Lakehouse Workload with Autonomous AI Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/appendix-autonomous-database-data-warehouse-workload.html#GUID-604A08F8-8021-43CE-AA95-823045E14BD8)
* [Oracle Autonomous AI Lakehouse - Data Lake Accelerator](https://blogs.oracle.com/datawarehousing/introducing-data-lake-accelerator)
## Acknowledgements

* **Authors** - Eddie Ambler, Linda Foinding, Database Product Management
* **Last Updated By/Date** - Linda Foinding, Database Product Management, December 2025
# 🔍 Discover and View your Database and Data Lake Assets from your Data Catalog

## Introduction

To build better loan products, SeersEquities’ data team must pull insights from everywhere—internal systems and external sources alike. But before they can transform that data, they need to find it. In this lab, you’ll step into that role. 

You’ll use Oracle Autonomous Database's Catalog Tool to **discover, connect to, and query data** stored in cloud object storage and databases. By the end, you’ll have a single view across your data landscape—so you can spend less time hunting for data and more time using it to power smarter decisions.

Estimated Time: 15 minutes

[Walkthrough video](videohub:1_vl8obrud:medium)

### Objectives

* **Discover and browse data assets** across Autonomous Database and cloud object storage using the Catalog Tool

* Set up **secure connections** to access and unify data from multiple sources

* Query and explore data from a unified catalog to support faster, insight-driven decisions

## Task 1: Access Local Data Catalog | Database Actions

1. Open the **Navigation Menu** by clicking the hamburger icon in the top-left corner.
    ![OCI Console – Open Navigation Menu](./images/select-adb-open-navigation-menu.png "=50%x*")

2. Navigate to Autonomous AI Database Landing Page. Click on **Oracle AI Database**, then select **Autonomous AI Database**.
    ![OCI Console - Navigate to ADB](./images/select-adb-navigate-console-to-adb.png "=50%x*")

3. **Choose Compartment** where your database resides and **select your database from list** of Autonomous AI Databases displayed
    ![OCI Console – Select Compartment and your ADB](./images/select-adb-select-compartment-and-adb.png "=50%x*")

4. On database details page select **Database Actions** button and click on **View all database actions**
    ![OCI Console – Select Database Actions](./images/select-adb-select-database-actions.png "=50%x*")

    **This opens the Database Actions Launchpad**, ***where you can access the built-in web-based tools, including Data Studio.***
    ![OCI Console – Database Actions Launchpad](./images/select-adb-database-actions-launchpad.png "=50%x*")

5. Click on **Data Studio**.  

    ![Access Local Data Catalog](./images/access-local-data-catalog-3.png "Access Local Data Catalog")  

6. Click on **Catalog** on left rail for the **ADB Catalog** to be displayed. You should now see a list of objects contained in your local database.  

    ![Access Local Data Catalog](./images/access-local-data-catalog-4.png "Access Local Data Catalog")  

>You’ve now unlocked a unified view of your data—no matter where it lives. With this foundation in place, you’re ready to explore, connect, and start building data products that drive real insights.

## Task 2: Add Connections to Catalog for Object Storage Buckets & Data Shares  

🚀 Next, you’ll connect your catalog to a specific object storage bucket, so you can start exploring what’s inside.

1. On the left rail of the Database Actions page, select **Data Load**.  

    ![Add Connections to Catalog](./images/select-data-load.png "Add Connections to Catalog")  

2. Then select the **Connections** tile.  

    ![Add Connections to Catalog](./images/add-connections-to-catalog-1.png "Add Connections to Catalog")  

3. On the connections page, create a connection to the **Object Storage** bucket called **LOANAPP\_LAB\_FILES**. On the Connections page, click **Create**, then choose **New Cloud Store Location**.

    ![Add Connections to Catalog](./images/add-connections-to-catalog-3.png "Add Connections to Catalog")  

4. On the **Add Cloud Store Location** page displayed:

    - For Name, enter: **LOANAPP\_LAB\_FILES**
    - For Description, enter: **My Demo Object Storage Bucket**
    - For Credential, select **Public Bucket** radio button
    - Choose the **Select Bucket** radio button
    - From the dropdown list choose the Bucket Named: **LOANAPP\_LAB\_FILES**

    ![Add Connections to Catalog](./images/add-connections-to-catalog-5.png "Add Connections to Catalog")  

  Click the **Create** button to proceed.

5. You’ve just added your own object storage connection to the Catalog, now you can easily discover, track, and query external data alongside your database assets. This step lays the foundation for building richer data products and speeding up access to the insights that matter.

    ![Add Connections to Catalog](./images/add-connections-to-catalog-6.png "Add Connections to Catalog")  

## Task 3: Search for items discovered by your Catalog  

With your connections in place, it’s time to search the catalog. You’ll choose which schemas and entity types to display—so you can quickly find the data that matters.

1. On the left rail, select **Catalog**.  

    ![Search Items in Catalog](./images/search-items-in-catalog-1.png "Search Items in Catalog")  

2. Select the **Connections** quick filter. This shows available connections in the catalog accessible to the connected schema. Confirm that **LOANAPP\_LAB\_FILES** appears in the list.

    >**Note**: On the landing page, the catalog offers quick filters to narrow your search results. If you don’t choose one, it defaults to **Tables and Views**. You can also limit results to all schemas or just a selected one.

    ![Search Items in Catalog](./images/search-items-in-catalog-2.png "Search Items in Catalog")  

3. Select the **Data Objects** quick filter to view items in the catalog visible to the connected schema, then, select **Cloud Objects** in the filter section to see a list of objects in our bucket.

    >**Note**: This view shows the database objects and object storage files available to you.

    ![Data Catalog Data Objects](./images/data-catalog-data-objects.png "Data Catalog Data Objects")

By searching the Catalog with filters and schema selections, you’ve learned how to quickly surface the data that matters. This step helps you cut through clutter and find the right assets faster—so you can spend less time searching and more time building with data.

## Task 4: Preview Data in Catalog  

Preview the data discovered in the catalog. From this view, you’ll see the files available in your object storage buckets.

1. Click the preview icon for the file named **LoanAppCustomer_segment.csv**.  

    ![Data Catalog Data Objects](./images/preview-icon.png "Data Catalog Data Objects")  

2. This displays the contents of the file being previewed without needing to first load it into the database.  

    ![Data Catalog CSV preview](./images/data-catalog-csv-preview.png "Data Catalog CSV Preview")  

   Click **Close** to return to Data Catalog listings  


## Conclusion

***Congratulations***, you have successfully completed the FastLab on working with Autonomous AI Lakehouse! In this lab, you discovered how to connect, browse, and preview data across your database and object storage—all from a single, unified catalog. You’ve built the foundation SeersEquities needs to turn scattered data into data products.

With these skills, you can now help the team evaluate new data faster, integrate it seamlessly, and drive smarter, real-time decisions that power better loan products and risk strategies.

## Signature Workshop

👉 Click here to [Start the Advanced AI Lakehouse Workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3689)

This workshop contains labs that dive deeper into working with Oracle Autonomous AI Lakehouse.

## Learn more
* [Oracle Autonomous AI Lakehouse](https://www.oracle.com/autonomous-database/autonomous-ai-lakehouse/)
* [Use Lakehouse with Autonomous AI Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-lakehouse.html)
* [Lakehouse Workload with Autonomous AI Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/appendix-autonomous-database-data-warehouse-workload.html#GUID-604A08F8-8021-43CE-AA95-823045E14BD8)
* [Oracle Autonomous AI Lakehouse - Data Lake Accelerator](https://blogs.oracle.com/datawarehousing/introducing-data-lake-accelerator)
## Acknowledgements

* **Authors** - Eddie Ambler, Linda Foinding, Database Product Management
* **Last Updated By/Date** - Linda Foinding, January 2026