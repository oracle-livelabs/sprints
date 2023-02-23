<!--
    {
        "name":"Download ADB Wallet using OCI CLI",
        "description":"Downloading the ADB Wallet using OCI CLI"
    }
-->

# Downloading the ADB Wallet using OCI CLI

Duration: 1 minute

## Use OCI Command Line Interface (OCI CLI)

You can use the  `oci dbautonomous-database generate-wallet` command in OCI (OCI CLI) to download the wallet. 
All you need is the OCID of your autonomous database. 
Furthermore, you can provide a location and filename. Finally, you have to provide a password that is going to be used with the wallet. 

```
<copy>
oci db autonomous-database generate-wallet --autonomous-database-id <OCID of your ADB instance> --file <filename>.zip --password <password>
</copy>
```


## Learn More

* [OCI CLI documentation](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm)
* [generate-wallet command](https://docs.oracle.com/en-us/iaas/tools/oci-cli/3.1.1/oci_cli_docs/cmdref/db/autonomous-database/generate-wallet.html)

