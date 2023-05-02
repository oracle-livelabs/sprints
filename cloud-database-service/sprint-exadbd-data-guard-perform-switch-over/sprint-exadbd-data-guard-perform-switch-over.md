# How do I Perform a database switchover operation using the Data Guard association in Exadata Database Service on Dedicated Infrastructure?
Duration: 5 minutes

You can initiate a switchover operation by using the Data Guard association of the primary database using the OCI Console.

## Perform a database switchover using the OCI Console

1. Open the navigation menu. Click **Oracle Database**, then click **Exadata on Oracle Public Cloud**.

2. Navigate to the Exadata VM Cluster that contains the primary database.

    - You initiate a switchover operation by using the Data Guard association of the primary database.

    ![Navigate to Primary Database](./images/navigate-primary-db.png" ")

3. On the Primary database details page, Under **Resources**, click **Data Guard Associations**.

    ![Click Data Guard Association](./images/dg-association.png" ")

    - For the Data Guard association on which you want to perform a switchover, click the Actions icon (three dots), and then click **Switchover**.

    ![Click Data Guard Switchover](./images/dg-switchover.png" ")

    - In the **Switchover Database** dialog box, enter the database admin password, and then click **OK**.


    - This database should now assume the role of the standby, and the standby should assume the role of the primary in the Data Guard association.

    ![New Data Guard Association role](./images/new-standby.png" ")


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, April 2023
