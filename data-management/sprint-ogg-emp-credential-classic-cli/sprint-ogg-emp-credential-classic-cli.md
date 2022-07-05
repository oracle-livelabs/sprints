# How do I create credentials for Oracle GoldenGate Classic instance using EMCLI in  GoldenGate Enterprise Manager Plug-in
Duration: 3 minutes

## Create credentials for GoldenGate Classic instance using the EM CLI client

1. Login to the EM CLI client.
2. Discover Oracle GoldenGate classic instance.
3. To create Named Credentials (host credentials), run the `create_named_credential` verb as shown in the following example:

    ```
    <copy>
    ./emcli create_named_credential -cred_name=classic -auth_target_type=host -cred_type=HostCreds -attributes="HostUserName:hostusername"

    </copy>
    ```  
4. Enter `HostPassword`.
5. Confirm the `HostPassword`.

    The credential gets created.
6. To create Named Credentials (OGG Admin credentials), run the `create_named_credential` verb as shown in the following example:

    ```  
    <copy>
    ./emcli create_named_credential -cred_name=classic2 -auth_target_type=oracle_goldengate -cred_type=OGGCred -attributes="AgentUserName:agentusername"
    </copy>
    ```   
7. Enter `AgentPassword`.
8. Confirm `AgentPassword`.

    The credential gets created.
9. To create Preferred credentials, run the `set_preferred_credential` verb as shown in the following example:

    ```
    <copy>
    /emcli set_preferred_credential -set_name=classic2 -target_type=oracle_goldengate -target_name=extract:target.us.oracle.com:2101 -cred_type=OGGCred -attributes="HostUserName:oggagentuser"

    </copy>
    ```
    The preferred credential gets created.

**Explanation of the parameters**:

* cred_name - Credential name. For example, `classic` or `classic2`
* auth\_target\_type - Authenticating target type. For example, `host` or `oracle_goldengate`
* cred_type - Credential type. For example `HostCreds` or `OGGCred`
* attributes - Specify credential host user name and host password. For OGG Admin Credentials, specify Monitor Agent user name and password.
* set_name - Sets the preferred credential for this credential set.
* target_name - Sets the preferred credential for this target.
* target_type - Target type for the target/credential set.
* credential_name - Name of the credential. This is a mandatory parameter while setting preferred credentials.
* credential_owner - Owner of the credential. This defaults to the currently logged in user.

**Video Preview**

Watch this video on how to set credentials the Oracle GoldenGate Enterprise Manager Plug-in UI: [Setting Credentials for Oracle GoldenGate instances in the Enterprise Manager Plug-in](youtube:zFaX348_LiA)

## Learn More

* [Downloading and Deploying EM CLI ](https://docs.oracle.com/en/enterprise-manager/cloud-control/enterprise-manager-cloud-control/13.4/emcli/downloading-and-deploying-em-cli.html#GUID-5DD77C55-387D-43C3-9DC2-2245569A6AFF)
* [Setting Credentials for Oracle GoldenGate Targets] (https://www.oracle.com/pls/topic/lookup?ctx=en/middleware/goldengate/emplugin/13.5.1&id=EMPUG-GUID-190A37BE-4600-40D1-9F2E-4D587F1E0D4C)
* [Discovering an Oracle GoldenGate Enterprise Manager Plug-in Microservices Instance using EM CLI](https://docs.oracle.com/en/middleware/goldengate/emplugin/13.5.1/empug/discovering-oracle-goldengate-targets-ma-instance-emcli.html#GUID-57AA8120-69C2-4818-9021-91E5F8BFFB7C)
* [New Route to Discovery in Oracle GoldenGate Enterprise Manager Plug-in](https://blogs.oracle.com/dataintegration/post/new-route-to-discovery-in-oracle-goldengate-enterprise-manager-plug-in-134200)
* [Oracle GoldenGate Enterprise Manager Plug-in Documentation](https://docs.oracle.com/en/middleware/goldengate/emplugin/index.html)
