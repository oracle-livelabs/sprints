# How do I create OGG admministrator User In OEM Console To Manage OGG Specific Targets?
Duration: 5 minutes

## Create Oracle GoldenGate Administrator User (ogg 'admin' user)

1. Ensure that you have discovered Oracle GoldenGate targets in the Oracle GoldenGate Enterprise Manager Plug-in.

2. Click **Setup**, select **Security**, and then click **Administrators**.

    ![Go to the Administrators page.](./images/setup-security-administrators.png " ")

3. In the **Administrators** page, click **Create** to add a new Administrator user.

    ![Click the Create button.](./images/administrators-create.png " ")

4. In the **Create Administrators: Properties** page, enter the Administrator login Name, for example *oggadmin* and Password, and then click **Next** to display the **Create Administrator: Roles** page.

  ![Add Administrator credentials.](./images/enter-admin-name-next.png " ")

5. Select **EM_USER** and **PUBLIC** under **Selected Roles** and click **Next**.

    ![Select EM_USER and PUBLIC.](./images/em-user-public.png " ")


6. Select the following credentials that apply to all targets.  These Privileges give the administrator the right to perform particular management actions on a class of targets:

    * Edit any OGG parameter file.
    * Run any OGG command.  
    * View contents of any OGG discard file.
    * View contents of any OGG report file.

    ![Select the Privileges that you want to grant to this Enterprise Manager Administrator.](./images/select-privileges-applicable-to-all-targets.png " ")

7.  Under **Target Privileges**, click **Add** to display the **Search and Add: Targets** page.

    ![Click Add under Target Privileges.](./images/target-privileges-click-add.png " ")

8. In the **Search and Add: Targets** page, select the targets options and click **Select**. Here, a deployment, administrative service, service manager, receiver service, distribution service, performance service, and extract targets are selected:

    ![Select targets.](./images/search-select-targets.png " ")

9. Again, under **Target Privileges**, click **Add** to add a Host in the **Search and Add Targets** dialog box. 

10. From the **Target Type** drop-down list, select **Host**, click check box to select the Host, and then click **Select**.

    ![Select Host target type, select the target name and click Select.](./images/select-host-target-type-target.png " ")

11. Select all the targets (except the Host) and click **Grant to Selected**, and then click **Next**.

    ![Click Grant to Selected.](./images/select-target-types-grant-to-selected.png " ")

12. Similarly, select the Host and click **Grant to Selected**, select **Operator** privilege as well in addition to the 4 privileges that you selected for the rest of the target types, and click **Continue**.

    ![Select Operator for Host.](./images/host-grant-select-operator-privilege.png " ")

   The selected privileges have been granted:

    ![Selected privileges have been granted](./images/privileges-granted-review.png " ")
   

12. Click **Review** to view the privileges granted, and then click **Finish**. The Administrator user has been successfully created:

    ![Administrator user has been created.](./images/admin-user-successfully-created.png " ")

13. Click **Setup**, select **Security**, and then click **Named Credentials** to create Named credentials and associate it with the Administrator user.

14. In the **Named Credentials** page, click **Create**.

    ![Named credentials](./images/named-credential-create.png " ")

15. In the **Create Credential** page, enter the following details:

        * Credential name: **admincredential**
        * Authentication Target Type: Host
        * Credential type: Host Credentials
        * Target type: Host
        * Target Name: Click **Search** and select the target.

        ![Named credentials details](./images/named-credentials-details.png " ")

16. Specify the Host credentials:

    ![Specify the Host credentials.](./images/specify-host-credentials.png " ")

17. Under **Access control**, click **Add Grant** and in the **Search** dialog box, select the Administrator user and click **Select** you just created to add grants to the Administrator user:

    ![Select administrator user to add grants.](./images/access-control-add-grant-admin-user-select.png " ")

18. Under **Access Control**, select **Grantee** and click **Change Privileges** to add privliges to the selected Administrator user.

    ![Select administrator user and click Change Privileges.](./images/select-grantee-change-privileges.png " ")

19. In the **Choose privileges for OGGADMIN** page, select **Edit Credential**, **Full Credential**, and **View Credential**, and click **Select**.

    
    ![Choose privileges for the Admin user.](./images/choose-privileges-admin-user.png " ")

    Credentials have been added to the selected Administrator user:

    ![Credentials have been added to the selected Administrator user.](./images/adding-full-credential-grantee.png " ")
        
20. Click **Test and Save**.

    ![Click **Test and Save**.](./images/granted-credentials-test-save.png " ")

    Credentials have been successfully created and the Administrator user can now monitor the targets.  A **Credential Operation Successful** message is displayed.

    ![Named credentials created.](./images/named-credentials-created.png " ")

21. Logout from the current session.

22. Login to the Enterprise Manager Cloud Control, using the new **oggadmin** administrator user credentials.

    ![Login using oggadmin user credentials.](./images/login-page-admin-user.png " ")
    

23. Click **Targets**, select **GoldenGate** to display the **OGG Home** page, and ensure that all the targets are listed.

24. Click **Setup**, select **Security**, and then click **Preferred Credentials** to display the **Preferred Credentials** page to set the Host Credentials.

25. Select **Oracle GoldenGate Service Manager** and click **Manage Preferred Credentials**.

    ![Select Oracle GoldenGate Service Manager and click Manage Preferred Credentials.](./images/service-manager-managed-preferred-credentials.png " ")


26.	In the **Oracle GoldenGate Service Manager Preferred Credentials** page, under **Target Preferred Credentials**, select **Target Name**, click **Set** to display the **Select Named Credentials** dialog box.

   ![Click Set.](./images/target-preferred-credentials-set.png " ")
    
27. In the **Select Named Credential** dialog box, ensure that the credential name that you created earlier has been populated, verify the UserName and Password, click **Test and Save**.

    ![Verify the credential name.](./images/verify-credential-name-test-save.png " ")
    
    The Named credential association is completed:

    ![Named credential association is complete.](./images/named-credential-association-completed.png " ")

28. Go to **OGG Home** page and select the target, for example **EXTMA** and check whether the you can restart the process from Administrator user.

   
   ![Start and stop buttons are enabled for the Extract.](./images/service-manager-extract-start-stop-enabled.png " ")
    

## Learn More

* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.2/empug/discovering-oracle-goldengate-targets-ma-instance.html#GUID-A52B6240-189C-4DAB-A017-6358BBB9813B)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Classic Instance](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.2/empug/discovering-oracle-goldengate-targets-classic-instance.html#GUID-DD1E8937-3ADE-40FA-9DE2-B01E5CC20D31)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
