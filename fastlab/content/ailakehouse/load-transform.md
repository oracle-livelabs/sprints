# 🏗️ Build a Live Feed Data Pipeline: Load and Transform Data

## Introduction

In this lab, you’ll practice setting up the live feed capabilities, that can be used to load data that is continuously collected into cloud object storage. <br>
When a load job is enabled for live feed, it can be a scheduled job or connected to the OCI event notification and subscription mechanism, so that every time a new object is created in the object store bucket, it triggers the live feed, that then loads the contents to the database.

Estimated Lab Time: 15 minutes

[Walkthrough video](videohub:1_ijcbblxm:medium)

### Objectives

Leverage Data Studio Tools to Build a Live Feed Data Pipeline
 * Explore using PL/SQL to interact with data in object storage
 * Create a Live Feed table in Autonomous Database
 * Simulate how new data loaded into object storage triggers Live Feed automation

### Prerequisites

  This lab assumes you have:
  * Completed Lab 1 --> Task 1 and 2 which creates the **Cloud Store Location named LOANAPP\_LAB\_FILES**

## Task 1: Prepare to Build a Live Feed Data Pipeline: 

  1. Create a Private Oracle Object Storage Bucket called **MY\_DEMO\_BUCKET** with a directory called **FUNDING** to store your data.
  
  2. Navigate back to the Oracle Cloud Console. 

  3. Open the **Navigation** menu in the Oracle Cloud console and click **Storage**. Under **Object Storage & Archive Storage**, click **Buckets**.
  
  4. On the **Buckets** page, select the compartment where you want to create the bucket from the **Compartment** drop-down list in the **List Scope** section. Make sure you are in the region where you want to create your bucket.
  
  5. Click **Create Bucket**.
  
  6. In the **Create Bucket** panel, specify the following:
      - **Bucket Name:** Enter **MY\_DEMO\_BUCKET**.
      - **Default Storage Tier:** Accept the default **Standard** storage tier. Use this tier for storing frequently accessed data that requires fast and immediate access. For infrequent access, choose the **Archive** storage tier.
      - **Encryption:** Accept the default **Encrypt using Oracle managed keys**.
  
      >**Note:** Bucket names must be unique per tenancy and region.
  
  7. Click **Create** to create the bucket.
  
    ![The completed Create Bucket panel is displayed.](./images/create-bucket-panel.png " ")
  
  8. The new bucket is displayed on the **Buckets** page. The default bucket type (visibility) is **Private**.
  
    ![The new bucket is displayed on the Buckets page.](./images/ll-bucket-created.png " ")

  
## Task 2: Move data from staged lab files bucket to Live Feed folder

  1. Download the **funding_commitments1.json** file from LOANAPP\_LAB\_FILES

  2. Upload the **funding_commitments1.json** file to the FUNDING folder under MY\_DEMO\_BUCKET

  3.	Validate files are visible in MY\_DEMO\_BUCKET.

    * Click the **Actions** icon in the **LOANAPP\_LAB\_FILES** panel, then select **Objects** from the context menu.

    ![Switch Tab & Select LOANAPP_FUNDING Connection](./images/move-data-file1.png "")

  4.	Expand the **FUNDING** folder icon to confirm that the **funding\_commitments1.json** file from the **LOANAPP\_FUNDING** bucket has been successfully copied here.

    ![Confirm File 1 Copy](./images/confirm-move-data-file1.png "")

    * Click **Close** to exit.

  ***Congratulations!*** You have now successfully interacted with data in object storage using PL/SQL from the Data Studio tools and your Autonomous Database.

## Task 3: Build Initial Live Feed Table

1. From the **Data Load | Oracle Database** tab - Navigate to Live Feed.

    * On Left rail expand **Data Load**, then click on **Live Feed**.

    ![Navigate from Data Load Connections to Live Feed](./images/navigate-connections-to-live-feed.png "")

      >You should now see the Live Feed Page

2.  Click the **Create Live Table Feed** button to enter the Create Live Feed wizard

    ![Create Live Feed Wizard](./images/live-feed-wizard-step1.png "")

3. Enter details for the Live Table Feed Preview.

     * Select Cloud Store Location: **My\_Demo\_Bucket**
     * Select Radial Box: **Basic**
     * For Folders Select: **FUNDING**
     * For Extensions Select: json

      ![Create Live Feed Wizard - step 1 - Data Source](./images/live-feed-wizard-step1-data-source.png "")

     >Note: that you should now see the funding commitments file matching the object filter and a preview of its content.

     * Click the **Next** button to proceed.

4. Configure Live Feed Table Settings as follows:

     * **For Option**: Choose **Merge Into Table** from drop-down list

     * **For target Table Name**: Enter the name of the target table of the Live Feed -- **FUNDING\_PROVIDER\_OFFER\_STG**. ***In ALL CAPS*** <br>

     * <u>Then modify **Mapping** details exactly as shown below:</u>
        * **Update Data Type** to NUMBER for: FUNDING\_PROVIDER\_ID and FUNDING\_OFFER\_REFERENCE\_ID <br>
        * **For Merge Key**: Select FUNDING\_PROVIDER\_ID and FUNDING\_OFFER\_REFERENCE\_ID<br>
        * **Unselect last row:** Inclusion of SYSTIMESTAMP Source

      ![Create Live Feed Wizard - step 2](./images/live-feed-wizard-step2-table-settings.png "")

     * Click the **Next** button to proceed.

5. Review the information shown on the Preview page.

      ![Create Live Feed Wizard - step 3](./images/live-feed-preview.png "")

      * Click **Next** to proceed.

6. Enter remaining details for the **Live Table Feed**

      a. Enter live feed name **LOANAPP\_FUNDING\_FEED** <br>
      b. Check box to **Enable for Scheduling**. <br>
      c. Select every **2 minutes** for the polling time interval

      ![Create Live Feed Wizard - step 4](./images/live-feed-wizard-step4.png "")

      * Click **Create**

7. When the popup box appears, select **Yes** to run the Live Feed.

      ![Run Initial Live Table Feed](./images/do-run-live-feed.png)

8. Review Live Feed Table and set page Refresh Interval

      * **You should see 3 rows loaded**
      * **Set page refresh interval to 10 seconds** to see when new data is loaded

      ![Active Live Table Feed](./images/active-live-feed.png)

***Congratulations!*** You have successfully created your Live Feed table.


## Task 4: Test Live Feed Table Data Population

1. Download the **funding_commitments1.json** file from LOANAPP\_LAB\_FILES

2. Upload the **funding_commitments1.json** file to the FUNDING folder under MY\_DEMO\_BUCKET

3. Navigate to the **Data Load | Oracle Database** tab.

     * Review the details for the Live Table Feed.  **Here we see that 4 new rows were loaded.**
     >Remember that it may take up to 2 minutes to display the new data, as we have configured a 2 minute polling schedule for our Live Feed process.

     ![Review Live Feed Execution](./images/verify-live-feed-load-file2.png)

4. Open SQL worksheet and query the staging table called **FUNDING\_PROVIDER\_OFFER\_STG**.

***Congratulations!*** On creating a Live Feed that can automatically load data from object storage into your database and be integrated into an automated business process.

## Conclusion
***Congratulations***, you have successfully completed the FastLab on working with Autonomous AI Lakehouse! You built a data pipeline using the Oracle Live Table Feed tool and successfully used the data from the pipeline in a PL/SQL block that was run from Oracle Autonomous Database to automate business processes.

In this workshop, you’ve also seen how Oracle’s Data Share tool helps teams like SeersEquities’ Risk Department securely access loan data without needing to duplicate the data, or incur delays in data access due to manual handoffs between the teams.
Having dependable access to data ensures faster risk analysis, smarter decisions, and tighter collaboration across the business.
Oracle makes it easy to use and share data on it's data platform powered by Oracle Autonomous Database, that unlocks the value of governed, AI-ready data.


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
# 🏗️ Build a Live Feed Data Pipeline: Load and Transform Data

## Introduction

In this lab, you’ll practice setting up the live feed capabilities, that can be used to load data that is continuously collected into cloud object storage. <br>
When a load job is enabled for live feed, it can be a scheduled job or connected to the OCI event notification and subscription mechanism, so that every time a new object is created in the object store bucket, it triggers the live feed, that then loads the contents to the database.

Estimated Lab Time: 15 minutes

[Walkthrough video](videohub:1_ijcbblxm:medium)

### Objectives

Leverage Data Studio Tools to Build a Live Feed Data Pipeline
 * Explore using PL/SQL to interact with data in object storage
 * Create a Live Feed table in Autonomous Database
 * Simulate how new data loaded into object storage triggers Live Feed automation

### Prerequisites

  This lab assumes you have:
  * Completed Lab 1 --> Task 1 and 2 which creates the **Cloud Store Location named LOANAPP\_LAB\_FILES**

## Task 1: Prepare to Build a Live Feed Data Pipeline: 

  1. Create a Private Oracle Object Storage Bucket called **MY\_DEMO\_BUCKET** with a directory called **FUNDING** to store your data.
  
  2. Navigate back to the Oracle Cloud Console. 

  3. Open the **Navigation** menu in the Oracle Cloud console and click **Storage**. Under **Object Storage & Archive Storage**, click **Buckets**.
  
  4. On the **Buckets** page, select the compartment where you want to create the bucket from the **Compartment** drop-down list in the **List Scope** section. Make sure you are in the region where you want to create your bucket.
  
  5. Click **Create Bucket**.
  
  6. In the **Create Bucket** panel, specify the following:
      - **Bucket Name:** Enter **MY\_DEMO\_BUCKET**.
      - **Default Storage Tier:** Accept the default **Standard** storage tier. Use this tier for storing frequently accessed data that requires fast and immediate access. For infrequent access, choose the **Archive** storage tier.
      - **Encryption:** Accept the default **Encrypt using Oracle managed keys**.
  
      >**Note:** Bucket names must be unique per tenancy and region.
  
  7. Click **Create** to create the bucket.
  
    ![The completed Create Bucket panel is displayed.](./images/create-bucket-panel.png " ")
  
  8. The new bucket is displayed on the **Buckets** page. The default bucket type (visibility) is **Private**.
  
    ![The new bucket is displayed on the Buckets page.](./images/ll-bucket-created.png " ")

  
## Task 2: Move data from staged lab files bucket to Live Feed folder

  1. Download the **funding_commitments1.json** file from LOANAPP\_LAB\_FILES

  2. Upload the **funding_commitments1.json** file to the FUNDING folder under MY\_DEMO\_BUCKET

  3.	Validate files are visible in MY\_DEMO\_BUCKET.

    * Click the **Actions** icon in the **LOANAPP\_LAB\_FILES** panel, then select **Objects** from the context menu.

    ![Switch Tab & Select LOANAPP_FUNDING Connection](./images/move-data-file1.png "")

  4.	Expand the **FUNDING** folder icon to confirm that the **funding\_commitments1.json** file from the **LOANAPP\_FUNDING** bucket has been successfully copied here.

    ![Confirm File 1 Copy](./images/confirm-move-data-file1.png "")

    * Click **Close** to exit.

  ***Congratulations!*** You have now successfully interacted with data in object storage using PL/SQL from the Data Studio tools and your Autonomous Database.

## Task 3: Build Initial Live Feed Table

1. From the **Data Load | Oracle Database** tab - Navigate to Live Feed.

    * On Left rail expand **Data Load**, then click on **Live Feed**.

    ![Navigate from Data Load Connections to Live Feed](./images/navigate-connections-to-live-feed.png "")

      >You should now see the Live Feed Page

2.  Click the **Create Live Table Feed** button to enter the Create Live Feed wizard

    ![Create Live Feed Wizard](./images/live-feed-wizard-step1.png "")

3. Enter details for the Live Table Feed Preview.

     * Select Cloud Store Location: **My\_Demo\_Bucket**
     * Select Radial Box: **Basic**
     * For Folders Select: **FUNDING**
     * For Extensions Select: json

      ![Create Live Feed Wizard - step 1 - Data Source](./images/live-feed-wizard-step1-data-source.png "")

     >Note: that you should now see the funding commitments file matching the object filter and a preview of its content.

     * Click the **Next** button to proceed.

4. Configure Live Feed Table Settings as follows:

     * **For Option**: Choose **Merge Into Table** from drop-down list

     * **For target Table Name**: Enter the name of the target table of the Live Feed -- **FUNDING\_PROVIDER\_OFFER\_STG**. ***In ALL CAPS*** <br>

     * <u>Then modify **Mapping** details exactly as shown below:</u>
        * **Update Data Type** to NUMBER for: FUNDING\_PROVIDER\_ID and FUNDING\_OFFER\_REFERENCE\_ID <br>
        * **For Merge Key**: Select FUNDING\_PROVIDER\_ID and FUNDING\_OFFER\_REFERENCE\_ID<br>
        * **Unselect last row:** Inclusion of SYSTIMESTAMP Source

      ![Create Live Feed Wizard - step 2](./images/live-feed-wizard-step2-table-settings.png "")

     * Click the **Next** button to proceed.

5. Review the information shown on the Preview page.

      ![Create Live Feed Wizard - step 3](./images/live-feed-preview.png "")

      * Click **Next** to proceed.

6. Enter remaining details for the **Live Table Feed**

      a. Enter live feed name **LOANAPP\_FUNDING\_FEED** <br>
      b. Check box to **Enable for Scheduling**. <br>
      c. Select every **2 minutes** for the polling time interval

      ![Create Live Feed Wizard - step 4](./images/live-feed-wizard-step4.png "")

      * Click **Create**

7. When the popup box appears, select **Yes** to run the Live Feed.

      ![Run Initial Live Table Feed](./images/do-run-live-feed.png)

8. Review Live Feed Table and set page Refresh Interval

      * **You should see 3 rows loaded**
      * **Set page refresh interval to 10 seconds** to see when new data is loaded

      ![Active Live Table Feed](./images/active-live-feed.png)

***Congratulations!*** You have successfully created your Live Feed table.


## Task 4: Test Live Feed Table Data Population

1. Download the **funding_commitments1.json** file from LOANAPP\_LAB\_FILES

2. Upload the **funding_commitments1.json** file to the FUNDING folder under MY\_DEMO\_BUCKET

3. Navigate to the **Data Load | Oracle Database** tab.

     * Review the details for the Live Table Feed.  **Here we see that 4 new rows were loaded.**
     >Remember that it may take up to 2 minutes to display the new data, as we have configured a 2 minute polling schedule for our Live Feed process.

     ![Review Live Feed Execution](./images/verify-live-feed-load-file2.png)

4. Open SQL worksheet and query the staging table called **FUNDING\_PROVIDER\_OFFER\_STG**.

***Congratulations!*** On creating a Live Feed that can automatically load data from object storage into your database and be integrated into an automated business process.

## Conclusion
***Congratulations***, you have successfully completed the FastLab on working with Autonomous AI Lakehouse! You built a data pipeline using the Oracle Live Table Feed tool and successfully used the data from the pipeline in a PL/SQL block that was run from Oracle Autonomous Database to automate business processes.

In this workshop, you’ve also seen how Oracle’s Data Share tool helps teams like SeersEquities’ Risk Department securely access loan data without needing to duplicate the data, or incur delays in data access due to manual handoffs between the teams.
Having dependable access to data ensures faster risk analysis, smarter decisions, and tighter collaboration across the business.
Oracle makes it easy to use and share data on it's data platform powered by Oracle Autonomous Database, that unlocks the value of governed, AI-ready data.


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