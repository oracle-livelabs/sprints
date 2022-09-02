# How do I repair SQL in GoldenGate Veridata?
Duration: 2 minutes

### Prerequisites
  * Linux
  * Oracle Database 19c (19.3.0.0) (for the repository)
  * Java 1.8 or higher
  * [Oracle GoldenGate Veridata Software](https://www.oracle.com/middleware/technologies/goldengate-downloads.html)

## Install and Configure the Back End Servers and Infrastructure

In a nutshell, the installation process includes the following four major tasks. After completing these steps, you can configure the Oracle GoldenGate Veridata Agents:

1. WebLogic Server and Infrastructure file needed for Oracle GoldenGate Veridata. Install the WebLogic Server infrastructure (formerly known as JRF) files on top of an existing 12.2.1.4.0 WebLogic Server install. Invoke this by using the command: `java -jar fmw_12.2.1.4.0_infrastructure_generic.jar`.

2. Oracle GoldenGate Veridata Server + Oracle GoldenGate Veridata Agent. It is a jar file, and works on all supported platforms except NonStop. Select a required combination. For this lab, the choice was **complete** to get everything installed in one pass. Invoke this by using the command: `java -jar fmw_12.2.1.4.0_ogg.jar`.

3. Run the Repository Creation Utility (RCU). It gets installed as a part of the WLS+JRF install in Step 1. You can run it once for all the products (WebLogic Server and Oracle GoldenGate Veridata.) The RCU location in this demo (and the sample VM) is: `/home/opc/VDT/oracle_common/bin/rcu`.

4. Configure the Oracle WebLogic Server and Oracle GoldenGate Veridata domains. You can run this once for all products. To configure the WebLogic Server, use the command: `/home/opc/VDT/oracle_common/common/bin/config.sh`.

## Learn More

* [Oracle GoldenGate Veridata documentation](https://docs.oracle.com/en/middleware/goldengate/veridata/12.2.1.4/index.html)
* [Veridata Basic Workshop-Oracle LiveLabs: Get Started with Oracle GoldenGate Veridata workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=833)
* [Oracle LiveLabs: Master Oracle GoldenGate Veridata Advanced Features workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=913)
