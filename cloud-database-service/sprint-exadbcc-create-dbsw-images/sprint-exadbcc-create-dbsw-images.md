# How do I Create a Custom Database Software Image for Exadata Database Service on Cloud@Customer.
Duration: 5 minutes

You can create a Custom Database Software Image using the OCI Console:
 
  * **Database software images** are resources containing Oracle Database software used to provision and patch Oracle Databases and Oracle Database Homes.
  * **Database software images** are either **Oracle-published software releases** or **custom software images that you create**.
  * **Custom Database Software Images** are images that include specified patches and updates that meet your organization's standards.

Watch the How-to video below for a quick walk-through of the sprint.
  [Create a Custom Database Software Image](youtube:jwxxIih3brQ)
 
## Using the console to create a Database Software Image

1. Open the navigation menu. Under **Oracle Database**, click **Exadata Cloud@Customer**.

2. Under **Resources**, click **Database Software Images**.

3. Click **Create Database Software Image**.

4. In the **Display name** field, provide a display name for your image.

5. Choose your **Compartment**.

6. Choose the **Database version** for your image.

7. Choose the **patch set update, proactive bundle patch, or release update**.

    * Optionally, you can enter a comma-delimited list of one-off (interim) patch numbers.
    * Optionally, you can upload an Oracle Home inventory file from an existing Oracle Database.

8. Click **Show Advanced Options** to add **tags** to your database software image.

9. Click **Create Database Software Image**.


## Acknowledgements
* **Author** - Leo Alvarado, Eddie Ambler, Product Management
* **Contributors** -  Tammy Bednar, Product Management
* **Last Updated By/Date** - Leo Alvarado, Product Management, March 2023
