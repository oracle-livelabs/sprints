# How do I create a dataset using Dropbox in Oracle Analytics Cloud (OAC)?
Duration: 5 minutes

You can create a dataset from Dropbox by adding a connection in OAC.

## Add files to datasets with multiple tables
Before you create the dataset, confirm that the connection you need exists. Confirm that the file that you want to upload meets these requirements:
    - The file is either an Excel spreadsheet in .XLSX or .XLS format, a CSV file, or a TXT file.
    - The spreadsheet contains no pivoted data.
    - The spreadsheet is structured properly for import and use as a dataset. 

>**Note:** You must have the **DV Content Author** application role to execute the following steps.

### Create a Dataset from a File Uploaded from Dropbox

Another way to populate the calculation page is by predefining clusters or outliers in your data and right-click-save in **My Calculations** folder. 

1. On the Home page, click **Create** and then click **Dataset.**

    ![Create Best Visualization to populate image](images/create-dataset.png)

2. In the Create Dataset dialog, select a connection

    ![Select statistics for clusters or outliers](images/create-connection.png)

3. After you provide connection information, browse for and select the file that you want to upload.

    ![Select statistics for clusters or outliers](images/dropbox-connection.png)

    The Client ID and Key will be found after creating an app for dropbox. You access the app console by clicking this link: 
    - [Dropbox apps](https://www.dropbox.com/developers/apps)

    For Dropbox you will need to create an app to access credentials.

    ![Dropbox App](images/dropbox-oauth.png)

    The result will populate the API credentials. You will also need to paste the **Redirect URL** from OAC's create connection window.

    ![Dropbox app creation](images/dropbox-direct-url.png)

    Lastly, navigate to the **Permissions** tab to **enable all** permissions for read/write privileges of files.

    ![Dropbox Permissions](images/permissions.png)
  
4. Select **Authorize** and then **OK.** The menu will then populate with your storage data. You can select the dataset from the menu options.
    
    ![OAC datasets from drive](images/dropbox-key.png)
    
    ![OAC datasets from drive](images/drive-updated.png)

5. You can now select files from the menu to create a dataset.

Congratulations! You have successfully learned how to create a dataset using Dropbox in Oracle Analytics Cloud and some best practices around it.

## Learn More

* [What's new in the Oracle Analytics Cloud May 2022 update (Video)](https://www.youtube.com/watch?v=K3YaJlmfSpM)
* [OAC - Create Datasets from Files](https://docs.oracle.com/en/cloud/paas/analytics-cloud/acubi/create-dataset-files.html#GUID-04CF3C71-DE49-4D6C-971E-6EAFDBB92D82)
* [Dropbox API permissions](https://developers.dropbox.com/oauth-guide)

## Acknowledgements

* **Author** - Nicholas Cusato, Solution Engineer, Santa Monica Specialists Hub

* **Last Updated By/Date** - Nicholas Cusato, August 2022