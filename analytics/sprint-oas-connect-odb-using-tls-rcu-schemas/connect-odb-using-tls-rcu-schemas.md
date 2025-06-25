# How do I use TLS connection with TCPS protocol to connect to Oracle Database for the RCU schema in Oracle Analytics Server?

Duration: 6 minutes

> **Note:** Note: Before you can complete this sprint, be sure that you've set up end-to-end secure communication to access Oracle Analytics Server. For more information, see[End-to-End SSL Configuration for Oracle Analytics Server](https://blogs.oracle.com/analytics/post/oas-mp-end-to-end-ssl)   

In addition to end-to-end secure communication, you might need to configure Oracle Database to use TLS connections using TCPS protocol. In this case, you need to configure both Oracle Analytics Server RCU schemas and Oracle Database  to use TLS connections with TCPS Protocol.

## Connect to Oracle Database using TLS Connection with TCPS Protocol for RCU Schemas
> **Note:** You must have the **BI Service Administrator** role to access the Weblogic console and login to OAS to complete the following steps.

Stop all the Services in the OAS Server and change the Oracle Database connection to use TCPS.

1. Go to command prompt and export the Oracle Database Server trusted certificates from the server wallet.

  <code>orapki wallet export -wallet /u01/app/oracle/product/19.0.0.0/dbhome_1/admin/oadb19_iad1d6/tls_wallet -dn 'CN=oadb19_iad1d6,C=US' -cert /tmp/oadb19_ca.cert</code>

2. Copy the sqlnet.ora and tnsnames.ora files from Oracle Database Server to Oracle Analytics Server.

  <code>/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

  These are the sqlnet.ora and tnsnames.ora file locations:

    * <code>/u01/app/oracle/product/19.0.0.0/dbhome_1/network/admin/sqlnet.ora</code>

      ![sqlnet.ora](images/sqlnet-ora.png)

    * <code>/u01/app/oracle/product/19.0.0.0/dbhome_1/network/admin/tnsnames.ora</code>

      ![tnsnames.ora](images/tnsnames-ora.png)

3. Create a client wallet to connect to the Oracle Database Server in TCPS Protocol.

    * Open Command Prompt and navigate to the TNS_ADMIN path.

      **OAS 5.5**: [DOMAIN_HOME]/bidata/components/core/serviceinstances/ssi/oracledb

      **OAS 5.9 & 6.4**: /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb

    * Create the wallet.

    <code>export PATH=/u01/app/Oracle/Middleware/Oracle_Home/oracle_common/bin:$PATH</code>

    <code>orapki wallet create -wallet /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb -auto_login -pwd Oracle123</code>

    * Import the trusted certificate/certificates to the client wallet.

    <code>orapki wallet add -wallet /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb -trusted_cert -cert oadb19_ca.cert -pwd Oracle123</code>

    * Check the wallet.

    <code>orapki wallet display -wallet /u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

    * List the files.

    cwallet.sso and ewallet.p12 should be listed.

4. Make sure the cwallet.sso, sqlnet.ora & tnsnames.ora files exist at below path on the OAS.
  <code>/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

  ![list files](images/list-files.png)

5. Open the sqlnet.ora file and add the required client information.

  ![sqlnet.ora](images/sqlnet-ora2.png)

6. Open the tnsnames.ora file and add the RCU schema connection string.

  ![tnsnames.ora](images/tnsnames-ora2.png)

7. Access the <code>/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>  path and add the ojdbc.properties as shown below.

  ![Create file ojdbc.properties](images/ojdbc-properties.png)

8. Edit all the jdbc xml files or Stick with WebLogic Admin Console. Start only the AdminServer to edit the Database Connection details using the WebLogic administration console. Edit the Connection Pool to be:
  <code>jdbc:oracle:thin:@pdb1_tcps?TNS_ADMIN=/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</code>

  ![Connection pool url](images/connection-pool-url.png)

    * Change the URL for all the below Data Sources:
    ![Data sources](images/data-sources.png)

    * Or edit the files in the below path:
  <code>/u01/data/domains/bi/config/jdbc/*.xml</code>

    >**Note**: All the Services should be down to edit files in the backend.

    ![jdbc xml files](images/xml-files.png)

9. Edit the jps-config.xml and jps-config-jse.xml files in below path

  <code>/u01/data/domains/bi/config/fmwconfig/jps-config.xml</code>

  and

  <code>/u01/data/domains/bi/config/fmwconfig/jps-config-jse.xml</code>

  vi the xml file and run below cmd

  <code>:%s/jdbc\:oracle\:thin\:@\/\/oadb19.sub03123456791.oasvcn.oraclevcn.com\:1521\/PDB1.sub030123456791.oasvcn.oraclevcn.com/jdbc\:oracle\:thin\:@pdb1_tcps?TNS_ADMIN=\/u01\/app\/Oracle\/Middleware\/Oracle_Home\/bi\/modules\/oracle.bi.servicelcm\/oracledb/g</code>


10. Update the default DSN for Oracle Delivers (scheduler) in <code>[DOMAIN_HOME]/config/fmwconfig/biconfig/OBISCH/schedulerconfig.xml</code>

  For example:

  From:

  <code><DSN>(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST= oadb19.sub03123456791.oasvcn.oraclevcn.com)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME= pdb1.sub03123456791.oasvcn.oraclevcn.com)))</DSN></code>

  To:

  <code><DSN>(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCPS)(HOST= oadb19.sub03123456791.oasvcn.oraclevcn.com)(PORT=2484)))(CONNECT_DATA=(SERVICE_NAME= pdb1.sub03123456791.oasvcn.oraclevcn.com)))</DSN></code>

    >**Note**: This DSN cannot have the TNSName Format as below

    <code><DSN> pdb1?TNS_ ADMIN=/u01/app/Oracle/Middleware/Oracle_Home/bi/modules/oracle.bi.servicelcm/oracledb</DSN></code>


11. Run this command to stop all services:

  <code>/u01/data/domains/bi/bitools/bin/stop.sh</code>

  Run sync_midtier_db.sh

  <code>/u01/data/domains/bi/bitools/bin/sync_midtier_db.sh</code>

  >**Note**Note: This script updates odbc.ini with the data source connection and TCPS details.

  <code>cat /u01/data/domains/bi/config/fmwconfig/bienv/core/odbc.ini</code>

  ![odbc.ini](images/odbc-ini.png)

12. Navigate to the datasource.propreties file:

  <code>/u01/data/domains/bi/config/fmwconfig/bienv/core/datasource.properties

  cd /u01/data/domains/bi/config/fmwconfig/bienv/core

  vi datasource.properties</code>

  ![Data source properties](images/data-source-properties.png)

13. Navigate to the odbc.ini file:
  <code>vi /u01/data/domains/bi/config/fmwconfig/bienv/core/odbc.ini</code>

  Go to the datasource definition and add the below parameters:

  <code>ValidateServerCertificate=0
  EncryptionMethod=1
  CryptoProtocolVersion=TLSv1.2</code>

    >**Note**: The files (datasource.properties and odbc.ini) will not be overwritten unless you run sync_midtier_db.sh yourself.  

    >**Note**: In case you run the sync_midtier_db.sh , please edit the two files manually to have the correct URL and the parameters respectively.


  ![Data Source Properties](images/data-source-prop2.png)

14. Run this command to start all services.

  <code>/u01/data/domains/bi/bitools/bin/start.sh</code>

15. Run this command to check the status of the services. All services should be running.

  <code>/u01/data/domains/bi/bitools/bin/status.sh</code>

  >**Note**: All Services should be RUNNING.

Congratulations, you have successfully learned how to connect to Oracle Database using TLS Connection with TCPS Protocol for the RCU Schemas of OAS.

## Learn more
* [End-to-End SSL Configuration for Oracle Analytics Server](https://blogs.oracle.com/analytics/post/oas-mp-end-to-end-ssl)

## Acknowledgements
* **Author** - Veera Raghavendra Rao Koka, Consulting Solutions Architect, Oracle Analytics
* **Last Updated By/Date** - Nagwang Gyamtso,  March 2023
