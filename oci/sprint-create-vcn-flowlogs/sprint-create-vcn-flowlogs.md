# How do I create VCN flow logs for resources in VCN?
Duration: 5 minutes

You can use flow logs for troubleshooting and monitoring. You can enable, view, and manage your flow log configuration through the Logging service. 

## Enable flow logs

VCN flow logs show details about the traffic that passes through your VCN, and VCN flow logs help you audit traffic and troubleshoot your security lists.

1. Open the navigation menu and click <b>Observability & Management</b>. Under <b>Logging</b>, click <b>Log Groups</b>

![Navigation menu showing the Observability & Management menu along with the Logging and Log Groups](images/oandmlogging.png "Log Groups Button")

2. Click <b>Create Log Groups</b>.

3. Enter a name and description for the Log Groups.

4. Enable VCN flow logs on your subnet. On the Logs tab, click <b>Enable Service Log</b>. Select the <b>Virtual Cloud Network - subnets</b> service, and select your subnet as the resource. Enter a name for the log, and click Enable Log

## Learn More

* [VCN Flow Logs](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/vcn_flow_logs.htm)


