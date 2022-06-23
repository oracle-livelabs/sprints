# How do I create credentials for Oracle GoldenGate Classic instance in Enterprise Manager Plug-in?
Duration: 3 minutes

### Prerequisites
This sprint assumes you have:
  * Downloaded and Deployed the EM CLI Client
  * Discovered Oracle GoldenGate Classic instance

See **Learn More**.

## Create credentials for GoldenGate Classic instance

In the EM CLI client, run the `discover_ggma` verb as shown in the following example:
```
<copy>
emcli discover_ggma
[-configFile="/path/gg_discovery_input_file.properties"]
[-host="host"]
[-user="user"]
[-password="password"]
[-port="port"]
[-agentURL="agentURL"]
[-targetNamePrefix="targetNamePrefix"]
[-debug]
[-check]
</copy>
```   
The `.properties` file contains the following mandatory parameters:
* host - Hostname of Oracle GoldenGate Monitor Agent. For example, `localhost`
* port - Port of Oracle GoldenGate Monitor Agent.
* user - Username to connect to Oracle GoldenGate Monitor Agent. For example, *empuser*.
* password - Password to connect to Oracle GoldenGate Monitor Agent.
* agentURL - Enterprise Manager Agent URL. For example, `https://localhost:<em-agent-port>/emd/main/`.
* targetNamePrefix - Enter the target name prefix. For example, `test_env_orcl_src`. The target name prefix is appended with colon (":") and this gets prefixed to all target names. For example, `test_env_orcl_src:targetName`. This is an optional parameter.

### Video Preview
Watch this video on how to Discover Oracle GoldenGate Classic and Microservices instances in the UI: [Discover Oracle GoldenGate Classic and Microservices instances](youtube:KAfmbzGDe9E)


## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance using EM CLI](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discovering-oracle-goldengate-targets-ma-instance-emcli.html#GUID-57AA8120-69C2-4818-9021-91E5F8BFFB7C)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
