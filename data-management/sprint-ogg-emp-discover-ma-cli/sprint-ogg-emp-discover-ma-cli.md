# How do I discover GoldenGate MA instances using the EM CLI verb in Oracle GoldenGate Enterprise Manager Plug-in?
Duration: 3 minutes


## Discover GoldenGate Microservices (MA) instance

1. Ensure that you have downloaded and deployed the EM CLI client. See **Learn More**.
2. Ensure that you have a configuration file with the required values. The following is the content of a sample `microservices.txt` configuration file:

    ```
    host=abc.cloud.com
    user=empuser
    password=empuser
    port=5559
    agentURL=https://abc.cloud.com:1838/emd/main/
    targetNamePrefix=test_env_orcl_src
    ```  
3. In the EM CLI client, run the command as shown in the following example:

    ```
    <copy>
    emcli discover_ggma -configFile="/path/microservices.txt"
    </copy>
    ```   
The Discovery process begins and gets completed as follows:
```
Discovering GoldenGate Instances targets in host:abc.cloud.com:9001
Begin GoldenGate target discovery...
Number of targets discovered : 6
Discovered Agent Monitored GoldenGate Targets.
Verifying targets discovered...
Number of new targets found: 6
Saving newly discovered targets...
Successfully saved targets.
GoldenGate discovery completed successfully.
```

**Content of the configuration file**

The `configuration file` (here `microservices.txt`file) contains the following mandatory parameters:

* host - Hostname of Oracle GoldenGate Monitor Agent. For example, `abc.cloud.com`
* port - Port of Oracle GoldenGate Monitor Agent.
* user - Username to connect to Oracle GoldenGate Monitor Agent. For example, *empuser*.
* password - Password to connect to Oracle GoldenGate Monitor Agent.
* agentURL - Enterprise Manager Agent URL. For example, `https://abc.cloud.com:1838/emd/main`.
* targetNamePrefix - Enter the target name prefix. For example, `test_env_orcl_src`. The target name prefix is appended with colon (":") and this gets prefixed to all target names. For example, `test_env_orcl_src:targetName`. This is an optional parameter.



**Video Preview**

Watch this video on how to Discover Oracle GoldenGate Classic and Microservices instances in the UI: [Discover Oracle GoldenGate Classic and Microservices instances](youtube:KAfmbzGDe9E)


## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance using EM CLI](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discovering-oracle-goldengate-targets-ma-instance-emcli.html#GUID-57AA8120-69C2-4818-9021-91E5F8BFFB7C)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
