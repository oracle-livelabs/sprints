# How to upload Files into a Source from the OCI console?

Duration: 5 minutes

This lab will walk you through the steps to **"Upload a file into a Source"** from the OCI console interface.

1. Navigate to the Sources page > Select the Source you want to upload the logs for (We will use "Database Alert Logs" during this Live Lab):
![Figure 1: Source Page](images/source-page.png)

2. Click on Upload Files:
![Figure 2: Source Page - Click on Upload Files](images/source-page-click-on-upload-file.png)

3. Fill the name and the Log Group Compartment:
![Figure 3: File Upload Tab - Fill the name & the Log Group Compartment](images/file-upload-fill-meta-fields.png)

4. Fill the required Log Group (Create a new one if needed):
![Figure 4: File Upload Tab - Fill the required Log Group ](images/file-upload-fill-log-group.png)

5. Select the files to upload from your computer:
![Figure 5: File Upload Tab - Select the files to upload from Users computer](images/file-upload-select-files.png)

6. Click on "Next":
![Figure 6: File Upload Tab - Move to the Upload Source Selection view](images/file-upload-properties.png)

7. Click on "Next":
![Figure 7: File Upload Tab - Move to the final check-up before uploading](images/file-upload-check-and-validate-submission.png)

8. Check the information on your screen & click "Upload" then click on "Close":
![Figure 8: File Upload Tab - Upload File and close](images/file-upload-submission-successful-tab.png)

You should see a screen with the status of your uploaded files. Refresh the page to check when the file was successfully processed.
![Figure 9: File Upload Tab - Files Upload Status "In Progress"](images/check-files-upload-status-in-progress.png)
![Figure 10: File Upload Tab - Files Upload Status "Completed"](images/check-files-upload-status-completed.png)

You can verify your uploads in the Log Explorer by clicking on "View in Log Explorer".
![Figure 11: File Upload Page - Move to see the logs in the "Log Explorer"](images/file-upload-see-in-log-explorer.png)

You should see a result similar to this if your log file is valid and contains logs:
![Figure 12: Show uploaded logs in the log explorer](images/log-explorer-show-uploaded-logs.png)

## Learn More

* [Upload file(s) into OCI Logging Analytics](https://docs.oracle.com/en-us/iaas/logging-analytics/doc/upload-logs-demand.html)

## Acknowledgements

* **Author:** Ayoub BELMEHDI, OCI Logging Analytics

* **Contributors:** Ashish GOR, Kiran PALUKURI, Vikram REDDY, Kumar VARUN, Jolly KUNDU, OCI Logging Analytics

* **Last Updated By/Date:** Ayoub BELMEHDI, October 2023
