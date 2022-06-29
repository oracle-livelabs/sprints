# How do I create credentials for Oracle GoldenGate Microservices instance using EMCLI in  GoldenGate Enterprise Manager Plug-in
Duration: 3 minutes

### Prerequisites
This sprint assumes you have:
  * Downloaded and Deployed the EM CLI Client
  * Discovered Oracle GoldenGate Microservices instance


See **Learn More**.

To create Named Credentials (host credentials), run the `create_named_credential` verb as shown in the following example:
```  
<copy>
emcli create_named_credential
        -cred_name=ma
        -auth_target_type=host
        -cred_type=HostCreds
        -attributes="HostUserName:<user>;HostPassword:<password>"
</copy>
```   
To create Preferred credentials, run the `set_preferred_credential` verb as shown in the following example:
```  
<copy>
emcli set_preferred_credential
        -set_name=HostCreds
        -target_name=target.us.oracle.com:9001svrmgr
        -target_type=oracle_goldengate_srvmgr
        -credential_name=ma
        -credential_owner=credUser
</copy>
```   

**Options**:
* set_name - Sets the preferred credential for this credential set.
* target_name - Sets the preferred credential for this target.
* target_type - Target type for the target/credential set.
* credential_name - Name of the credential.
* credential_owner - Owner of the credential. This defaults to the currently logged in user.

### Video Preview
Watch this video on how to set credentials the Oracle GoldenGate Enterprise Manager Plug-in UI: [Setting Credentials for Oracle GoldenGate instances in the Enterprise Manager Plug-in](youtube:zFaX348_LiA)

## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Setting Credentials for Oracle GoldenGate Targets] (https://www.oracle.com/pls/topic/lookup?ctx=en/middleware/goldengate/emplugin/13.5.1&id=EMPUG-GUID-190A37BE-4600-40D1-9F2E-4D587F1E0D4C)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance using EM CLI](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discovering-oracle-goldengate-targets-ma-instance-emcli.html#GUID-57AA8120-69C2-4818-9021-91E5F8BFFB7C)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
