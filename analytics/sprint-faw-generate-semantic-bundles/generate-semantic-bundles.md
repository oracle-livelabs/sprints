# How do I create and deploy semantic model bundles in Fusion Analytics Warehouse (FAW)?
Duration: 4 minutes

There may be scenarios where you want to back up or migrate semantic model extensions between Fusion Analytic Warehouse instances.  A semantic model bundle allows you to bundle extensions where they have been tagged as part of the main branch or are defined in branches that are yet to be merged into the main branch.  These can be exported and then deployed across different FAW instances.

## Backup and restore environment using bundles

>**Note:** You must have the **Service Administrator** role to successfully complete this Sprint.

1. In your Fusion Analytics Warehouse instance, click the **Navigation** menu and select **Console**.

  ![Console](images/console.png)

2. Within the console, click **Bundles** under **Application Administration**.

  ![Bundles](images/bundles.png)

3. Click **Create** to view the different types of bundles available and select **Semantic Bundle**.

  ![Create-bundle](images/semanticbundle.png)

4. Enter a name and a description for the bundle.

  ![Environment bundle](images/enterbundledesc.png)

5. It is possible to include all semantic extensions, or you can select specific tags or branches to include in the bundle. To include ALL semantic extensions in the bundle, select **Include all semantic extensions**. This removes the options to select specific tags or branches as these will all be included automatically in the semantic extension bundle.

  ![Include all semantic extensions](images/includeallsemanticextensions.png)

6. To include all security configurations as part of the semantic extensions bundle, which includes the definitions of any duty or data roles defined in semantic extensions, select **Include security configurations**.

  ![Include all security configurations](images/includeallsecurityconfig.png)

7. To include a specific branch or tag in the semantic model extension bundle, you can select the branch or tag from the drop down list. Once selected, the branch or tag and any dependencies are automatically selected under the Main Branch Tags section or the Customizations Branches section.

  ![Publish branch or tag in the target environment](images/publishbranchortag.png)

8. To include All Tags in the Semantic Extension bundle, enable the **All Tags** option.

  ![Include all tags](images/includealltags.png)

9. To select specific Tags in the semantic extension bundle click **Select Tags**.

  ![Select tags](images/selecttags.png)

10. Select the checkbox next to each of the tags you wish to include in the semantic extension bundle and click **Done**.

  ![Group selection](images/tagselection.png)

11. To include All Branches in the semantic extensions bundle, enable the **All Branches** option.

  ![All branches](images/includeallbranches.png)

12. To select specific Branches in the semantic extensions bundle click **Select Branches**.

  ![Select branches](images/selectbranches.png)

13. Select the checkbox next to each of the Branches you wish to include in the semantic extension bundle and click **Done**.

  ![Branch selection](images/branchselection.png)

14. Save the semantic extension bundle by clicking **Save**.

  ![Save semantic bundle](images/savesemanticbundle.png)

15. From the bundles page, generate the Semantic Extension Bundle by clicking the **Actions** button and selecting **Generate**.

  ![Generate bundle](images/generatebundle.png)

16. Click **Generate** to confirm that you want to generate the bundle.

  ![confirm](images/generatebutton.png)

17. The status for your bundle will be **Scheduled** and after some time, it will update to **Completed**.

  ![Completed status](images/bundlecompleted.png)

18. To migrate the semantic model to another environment, select the **Action** button and choose **Export**.

  ![Export bundle](images/exportbundle.png)

19. Click **import** to import the previously exported semantic extension bundle to the new environment.

  ![import bundle](images/importbundle.png)

20. Drag the semantic extension bundle file from the local directory and click **Import**.

  ![Select the bundle to import](images/selectbundleimport.png)

21. Verify that the imported bundle has been **Completed** successfully.

  ![Verify import completed](images/verifycompletedimport.png)

22. Click on the **Actions** menu and then **Deploy** to deploy the semantic extension bundle.

  ![Deploy bundle](images/deploybundle.png)

23. Confirm deployment of the bundle by clicking **Deploy**.

  ![Confirm deploy](images/confirmdeploybundle.png)

24. The status for your deployment will change to **Scheduled** and then **Completed** after some time. Verify that the deployment has Completed.

  ![Verify deployment completed](images/verifybundlecompleted.png)

## Learn More
* [Bundle Your Application Artifacts](https://docs.oracle.com/en/cloud/saas/analytics/22r3/fawag/bundle-your-application-artifacts.html)

## Acknowledgements
* **Author** - Craig Andrews, CEAL
* **Last Updated By/Date** - Nagwang Gyamtso,  November 2022
