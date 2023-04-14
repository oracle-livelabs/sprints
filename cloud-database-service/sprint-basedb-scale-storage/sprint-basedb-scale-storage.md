# How do I Scale DB System Storage in Oracle Base Database Service.
Duration: 10 minutes

You can scale the Storage for Oracle Base Database Service DB System using the OCI Console

Watch the How-to video below for a quick walk-through of the sprint.
[Scale DB System Storage](youtube:gPIPym5pt9M)
 
## Scale DB System Storage.

1. Open Your **OCI navigation menu** Click on **Oracle Database**, then click on **Oracle Base Database**.

2. On the left rail, Choose the **Compartment** where the DB System that you want to scale the storage for resides.

3. In the list of **DB systems** displayed, find the name of the **DB System** that you want to scale up the Storage for and click its highlighted name.

4. On the **DB Systems Details** Page, you can find information for **Available data storage**, **Recovery area storage** and **Total storage size**

5. Click on the **Scale Storage Up** button

    ![Scale DB System Storage](./images/scale-storage.png" ")
       
   In the Scale Storage Up panel, enter the information to scale your storage as needed:

    * You can Increase the **Available data storage**: which increases the amount of storage available to your database's data files.
    * You can also Increase the **Recovery area storage**: which increases the amount of storage available for recovery log data.
    * Oracle recommends keeping recovery storage sized at 20% of the total storage or higher.


6. Click on the **Update** button to process the storage expansion request
       
     
## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
