# How do I start and stop processes using the EM CLI verb in Oracle GoldenGate Enterprise Manager Plug-in?
Duration: 1 minute

## Start an instance
1. Login to the EM CLI client.
2. Discover an Oracle GoldenGate instance.
3. Set the Preferred credentials for the target.
4. In the EM CLI client, run the `gg_execute`command as shown in the following example:

    ```
    <copy>
    ./emcli gg_execute -command="start" -target_type="oracle_goldengate_extract"-target_name="extract:hostname:9001:EXTMA"
    </copy>
    ```   
  In this example, hostname is the Service Manager host name and 9001 is the port.
## Stop an instance

In the EM CLI client, run the `gg_execute`command as shown in the following example:

```
<copy>
./emcli gg_execute -command="stop" -target_type="oracle_goldengate_extract"-target_name="extract:hostname:9001:EXTMA"
</copy>
```   


## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Setting Credentials for Oracle GoldenGate Targets](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/setting-credentials-oracle-goldengate-targets.html#GUID-190A37BE-4600-40D1-9F2E-4D587F1E0D4C)
* [Discovering Oracle GoldenGate Targets](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discover1.html#GUID-515B14FC-6ABE-478A-AAB6-AD29CCDC4253)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
