# How do I Create a Custom Database Software Image in Oracle Base Database Service.
Duration: 5 to 10 minutes

You can create a Custom Database Software Image using the OCI Console:
 
  * **Database software images** are resources containing Oracle Database software used to provision and patch Oracle Databases and Oracle Database Homes.
  * **Database software images** are either **Oracle-published software releases** or **custom software images that you create**.
  * **Custom Database Software Images** are images that include specified patches and updates that meet your organization's standards.

Watch the How-to video below for a quick walk-through of the sprint.
[Create Custom Database Software Image](youtube:56fMYOu9SQw)



## Create Custom Database Software Image.

1. Open Your **OCI navigation menu** Click on **Oracle Database**, then click on **Oracle Base Database**.

2. On the left rail under **Resources**, click on **Database Software Images.**

    ![Navigate to Custom DB Software Images](./images/resources-custom-image.png" ")

3. Click on the **Create Database Software Image** button.

4. In the **Display Name** field, provide a display name for your image.

5. Select your **Compartment**

6. Choose **Virtual Machine and Bare Metal Shapes** for the Shape family.

    * This will populate the eligible Database Versions for the selected shape.

    ![Create Custom DB Software Image](./images/db-custom-image.png" ")

7. Choose the **Database Version** for your image.

    * For example, *19c*

8. Choose a **Software Update** from the Choose a patch set update, proactive bundle patch, or release update drop-down list.

    * For example, *19.14.0.0*

9. **In the One-Off Patch Field**, you can optionally enter a comma-separated **list of one-off (interim) update numbers.**

10. **In the upload Oracle Home Inventory field**, you can optionally upload an **Oracle home inventory** file from an existing Oracle Database.

11. Click on the **Show Advanced Options** link to add tags to your database software image.

12. Click on the **Create Database Software Image** Button.


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
