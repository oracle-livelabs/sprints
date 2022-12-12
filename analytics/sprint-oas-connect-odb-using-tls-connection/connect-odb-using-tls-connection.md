# How do I connect to an Oracle Database using a TLS connection with TCPS Protocol in Oracle Analytics Server (OAS)?

Duration: 3 minute

Some Organizations require End-to-End Secure Communication to access Oracle Analytics Server, please follow this blog [End-to-End SSL Configuration for Oracle Analytics Server](https://blogs.oracle.com/analytics/post/oas-mp-end-to-end-ssl) to accomplish such configuration.   
Further to End-to-End Secure Communication, some Organizations even require the products involved in the environment like Oracle Database to communicate securely using TCPS Protocol.
In such a case, we need to configure both the Oracle Analytics Server RCU Schemas and Oracle Database as a Data Source to use TLS Connections using TCPS Protocol.
The current blog will cover the steps required to connect the Oracle Database as a Data Source using TLS Connection with TCPS Protocol from the RPD while running the Reports or DV Projects.

## Connect to Oracle Database using TLS Connection with TCPS Protocol from OAS RPD

>**Note:** You must have the Oracle Database enabled for TLS Connection using TCPS Protocol. You must also have the RPD Connection Pools updated to connect Oracle Database using TLS Connections with TCPS Protocol and uploaded to Oracle Analytics Server.

When we have a requirement to connect to the Oracle Database as a Data Source using TLS Connection with TCPS Protocol from RPD while running the Reports and DV Projects, perform the following steps:

1. Upload the RPD using Replace Data Model Option in UI or the datamodel.sh script on the Oracle Analytics Server.

2. Export the Trusted Certificates of the Oracle Database Server from the Server Wallet.

  <code> orapki wallet export -wallet /u01/app/oracle/product/19.0.0.0/dbhome_1/admin/oadb19_iad1d6/tls_wallet -dn 'CN=oadb19_iad1d6,C=US' -cert /tmp/oadb19_ca.cert </code>

3. Create a client wallet to connect to the Oracle Database Server in TCPS Protocol.

    a. Go to the TNS\_ADMIN path
    <code>OAS 5.5: [DOMAIN\_HOME]/bidata/components/core/serviceinstances/ssi/oracledb
    OAS 5.9 & 6.4: /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb </code>

    b.	Create the wallet
    <code>orapki wallet create -wallet /u01/app/Oracle/Middleware/Oracle\_Home/bi/modules/oracle.bi.servicelcm/oracledb -auto_login -pwd Oracle123 </code>

    c. Import the Trusted Certificate/Certificates to the Client wallet
    <code>orapki wallet add -wallet /u01/app/Oracle/Middleware/Oracle\_Home/bi/modules/oracle.bi.servicelcm/oracledb -trusted\_cert -cert oadb19_ca.cert -pwd Oracle123</code>

    d.	Check the wallet
    <code>orapki wallet display -wallet /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

    e.	List the Files:  cwallet.sso and ewallet.p12 should be listed


4. Copy the sqlnet.ora & tnsnames.ora files from the Oracle DB Server to the Oracle Analytics Server Machine to the TNS\_ADMIN Path:
<code>/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

  ![Image](images/image.png)

5. Edit the sqlnet.ora to have client required info

  ![Image](images/image.png)

6. Edit the tnsnames.ora to have the Data source Schemas

  ![Image](images/image.png)

7. Open an Analysis Report that uses the RPD Subject Area or Create a new Report to test the TCPS connection to Oracle Data source.

8. The report should have no issues displaying the data in the report.

**Troubleshooting:**

If any issues or errors occur while displaying the data, check the obis1/n component logs
e.g. <code>/u01/data/domains/bi/servers/obis1/logs</code>

If you notice that the logs show that the file cwallet.sso doesn’t exist under <code>/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb/wallets/client</code>

please create a folder
<code> mkdir -p /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb/wallets/client</code>
and copy the cwallet.sso and ewallet.p12 and then restart the obis1/n services and re-test the report.

## Learn More
* [Oracle Analytics Server Best Practices Series: Deployment](https://blogs.oracle.com/analytics/post/oracle-analytics-server-best-practices-series-deployment)
* [Enable End-to-End SSL Configuration for Oracle Analytics Server on Oracle Cloud Marketplace](https://blogs.oracle.com/analytics/post/oas-mp-end-to-end-ssl)

## Acknowledgements
* **Author** - Veera Raghavendra Rao Koka, Consulting Solutions Architect, Oracle Analytics
* **Last Updated By/Date** -Veera Raghavendra Rao Koka, Consulting Solutions Architect, Oracle Analytics, November 2022
