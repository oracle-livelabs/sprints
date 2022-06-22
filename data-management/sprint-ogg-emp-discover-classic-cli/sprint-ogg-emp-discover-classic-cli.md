# How do I discover GoldenGate (classic) instances using the EM CLI verb in Oracle GoldenGate Enterprise Manager Plug-in?
Duration: 1 minute

### Prerequisites
This sprint assumes you have:
  * Downloaded and Deployed the EM CLI Client

See **Learn More**.

## Discover GoldenGate (classic) instance

In the EM CLI client, run the command as shown in the following example:
```
<copy>
emcli discover_gg
[-configFile="/path/input.conf"]
[-debug]
[-check]
</copy>
```   

The `configFile` (here `input.conf`file) contains the following parameters:

* host - Hostname of Oracle GoldenGate Monitor Agent. For example, `localhost`
* port - Port of Oracle GoldenGate Monitor Agent.
* user - Username to connect to Oracle GoldenGate Monitor Agent. For example, *empuser*.
* password - Password to connect to Oracle GoldenGate Monitor Agent.
* agentURL - Enterprise Manager Agent URL. For example, `https://localhost:<em-agent-port>/emd/main/`.
* targetNamePrefix - Enter the target name prefix. For example, `test_env_orcl_src`. The target name prefix is appended with colon (":") and this gets prefixed to all target names. For example, `test_env_orcl_src:targetName`. This is an optional field.


### Video Preview
Watch this video on how to Discover Oracle GoldenGate Classic and Microservices instances in the UI: [Discover Oracle GoldenGate Classic and Microservices instances](youtube:KAfmbzGDe9E)


## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Classic Instance using EM CLI](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discovering-oracle-goldengate-targets-classic-instance-emcli.html#GUID-CD43915E-8E6A-4835-8FEC-C1C9EC2763CD)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
