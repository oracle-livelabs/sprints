# How do I enable trandata, add Heartbeat and Checkpoint tables by using the Oracle GoldenGate Admin client?

Duration: 5 mins

## Enable trandata and add Heartbeat and Checkpoint Tables

With the ADD TRANDATA command, Oracle GoldenGate acquires the transaction information that it needs from the transaction records. For a seamless data replication in Oracle GoldenGate, you need to first enable TRANDATA for the database tables.

The Heartbeat functionality helps in monitoring replication lags. Add a heartbeat table to each of your databases by using the `ADD HEARTBEATTABLE` command.

The use of checkpoint table causes checkpoints to be part of the Replicat transaction. Use the `ADD CHECKPOINTTABLE` command to create a checkpoint table in the target database. Replicat uses the table to maintain a record of its read position in the trail for recovery purposes.


1. Ensure that you have the appropriate database privileges to be able to execute the commands in the Admin Client. See **Learn More**.

2. To open the Admin Client, run the following script: 
    ```
    <copy>
        adminclient

    </copy> 

    ```

3. Test the database connection by running the following command:
    ```
    <copy>
    DBLOGIN USERIDALIAS ggeast
    </copy>
    ```

4. To enable TRANDATA, execute the following command:
    ```
    <copy>
    ADD TRANDATA pdbeast.hr.employees
    </copy>
    ```

5. Run the following command to verify the output:

    ```
    <copy>
    INFO TRANDATA pdbeast.hr.employees
    </copy>
    ```

    The Trandata output for **hr.employees** is as follows:
    ```
    Logging of supplemental transaction log data is disabled for table PDBEAST.HR.COUNTRIES.
    Logging of supplemental transaction log data is disabled for table PDBEAST.HR.DEPARTMENTS.
    Logging of supplemental transaction log data is enabled for table PDBEAST.HR.EMPLOYEES.

    All columns supplementally logged for table `PDBEAST.HR.EMPLOYEES`.
    ```


     Add the heartbeat tables for both source and target endpoints by connecting to **ggeast** and  **ggwest** database credential aliases.

6. To add the Heartbeat tables, execute the following command:
    ```
    <copy>
    ADD HEARTBEATTABLE
    </copy>
    ```

7. Repeat step 3 on the target database.

8. Run the following command to verify the output:

    ```
    <copy>
    INFO HEARTBEATTABLE
    </copy>
    ```

    The HEARTBEAT table gets added and the output is as follows:
    ```
    2022-04-19T12:59:16Z  INFO    OGG-14101  Successfully added heartbeat table.
    ```

9. To add the Checkpoint table, execute the following command:
    ```
    <copy>
    ADD CHECKPOINTTABLE ggadmin.ggs_checkpointtable
    </copy>
    ```

10. Run the following command to verify the output:

    ```
    <copy>
    INFO CHECKPOINTTABLE ggadmin.ggs_checkpointtable
    </copy>
    ```

    The Checkpoint table gets added as follows:
    ```
    22022-04-19T06:24:55Z  INFO    OGG-15189  Default catalog name PDBEAST will be used for table specification ggadmin.*.
    2022-04-19T06:24:55Z  INFO    OGG-08100  Checkpoint table PDBEAST.GGADMIN.GGS_CHKPT has been created on 2022-04-19 06:22:56.
    2022-04-19T06:24:55Z  INFO    OGG-08100  Checkpoint table PDBEAST.GGADMIN.GGS_CHECKPOINTTABLE has been created on 2022-04-19 06:15:55.
    ```



## Learn More
* [Using the Admin Client](https://docs.oracle.com/en/middleware/goldengate/core/21.1/admin/getting-started-oracle-goldengate-process-interfaces.html#GUID-84B33389-0594-4449-BF1A-A496FB1EDB29)
* [ADD TRANDATA](https://docs.oracle.com/en/middleware/goldengate/core/21.3/gclir/add-trandata.html#GUID-D3FD004B-81E4-4185-92D3-812834A5DEFC)
* [ADD HEARTBEATTABLE](https://docs.oracle.com/en/middleware/goldengate/core/21.3/gclir/add-heartbeattable.html#GUID-126E30A2-DC7A-4C93-93EC-0EB8BA7C13CB)
* [ADD CHECKPOINTTABLE](https://docs.oracle.com/en/middleware/goldengate/core/21.3/gclir/add-checkpointtable.html#GUID-870D65C1-A18E-4B2D-8257-F58E9A808197)
* [Command Line Interface Reference for Oracle GoldenGate](https://docs.oracle.com/en/middleware/goldengate/core/21.3/gclir/add-checkpointtable.html#GUID-870D65C1-A18E-4B2D-8257-F58E9A808197)

