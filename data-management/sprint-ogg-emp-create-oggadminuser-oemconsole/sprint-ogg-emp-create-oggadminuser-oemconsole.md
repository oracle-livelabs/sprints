# How do I create OGG "admin" User In OEM Console To Manage OGG Specific Targets?
Duration: 3 minutes

## Create OGG admin User

1. Ensure that you have discovered Oracle GoldenGate targets in the Oracle GoldenGate Enterprise Manager Plug-in.

2. Click **Setup**, select **Security**, and then click **Administrator**.

3. In the **Administrators** page, click **Create** to add a new instance level user.

4. In the **Create Administrators: Properties** page, enter the Instance-level login Name, for example *oggadmin* and Password, and then click **Next** to display the **Create Administrator: Roles** page

5.Select **EM_USER** and **PUBLIC** under **Selected Roles** and click **Next**.

6. Select the following credentials that apply to all targets:

    * Edit any OGG parameter file.
    * Run any OGG command.  
    * View contents of any OGG discard file.
    * View contents of any OGG report file.

7. In the **Target Privileges** page, select the following options and click **Finish**:

8. Click **Setup**, select **Security**, and then click **Named Credentials** to create Named credentials and associate it with the Instance level user.

9. Click **Create** and provide the following credentials for Host configuration:

10. Under **Access control**, click **Add Grant** to add grants to the instance level user. Execute Test and save Named credentials. After a successful test connection, a **Credential Operation Successful** message is displayed.

11. Login to the Enterprise Manager Cloud Control, using the new **oggAdmin** instance user credentials.

12. Click **Targets**, select **GoldenGate** to display the **OGG Home** page, and ensure that all the targets are listed.

13. Click **Setup**, select **Security**, and then click **Preferred Credentials** to display the **Preferred Credentials** page to set the Host Credentials.

14. Select **Oracle GoldenGate Service Manager** and click **Manage Preferred Credentials**.

15.	In the **Oracle GoldenGate Service Manager Preferred Credentials** page, under **Target Preferred Credentials**, select **Target Name**, click **Set** to display the **Select Named Credentials** dialog box.

16. Enter UserName and Password, click **Test and Save**.

17. Go to **OGG Home** page and select the target, for example **EXTMA** and check whether the you can restart the process from Instance level user.




## Learn More

* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.2/empug/discovering-oracle-goldengate-targets-ma-instance.html#GUID-A52B6240-189C-4DAB-A017-6358BBB9813B)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Classic Instance](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.2/empug/discovering-oracle-goldengate-targets-classic-instance.html#GUID-DD1E8937-3ADE-40FA-9DE2-B01E5CC20D31)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
