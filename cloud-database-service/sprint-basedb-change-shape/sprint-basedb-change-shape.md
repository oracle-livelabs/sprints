# How do I Change the DB System VM Shape / Scale OCPU in Oracle Base Database Service?
Duration: 3 minutes (Change DB System VM Shape operation might take approximately 10-15 minutes)

You can change the Shape of a VM DB System using the OCI Console

* The Memory, Network bandwidth, Theoretical max IOPS resources scale proportionately to the number of OCPUs you selected
* However, changing the shape of the VM does not impact the amount of storage available to the DB system.

Watch the How-to video below for a quick walk-through of the sprint.
[Change DB System VM Shape](youtube:CkQu4UOYico)

 
## Change DB System VM Shape / Scale OCPU.

1. Open Your **OCI navigation menu** Click on **Oracle Database**, then click on **Oracle Base Database**.

2. On the left rail, validate that the **Compartment** selected contains the DB System that you want to change the VM Shape for.

3. In the list of **DB systems**, find the name of the DB System you want to change the shape for and click its highlighted name.

4. Near the top of the page, Click on the **Change Shape** button.

    ![Change Shape](./images/scale-up.png" ")

    * This will bring up the Change Shape pop-up window
    * You will note that our Current DB System Shape is checked
     
5. Select the new shape from the list of compatible and available shapes that are displayed
     
6. Click on **Change Shape** to proceed

    * *Note:* Changing shape requires a reboot, However for **RAC DB Systems** the shape change operation takes place in a rolling fashion, allowing you to change the shape with no database downtime.
    * Change Shape operation would take approximately 10 minutes
     
7. On the **Confirm Change Shape** window, Confirm your desire to Change the DB system shape by Clicking on the **Change Shape** button
     


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
