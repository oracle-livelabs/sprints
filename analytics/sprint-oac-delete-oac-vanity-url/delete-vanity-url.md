# How do I delete an Oracle Analytics Cloud Vanity URL?

Duration: 1 minute

Deleting the vanity URL is needed when you no longer need it or when the domain name is changed, as you have to delete and create the vanity URL for the new domain name.

Delete the SSL certificates for your Vanity URL in below scenarios.
*	Vanity URL is no longer needed.
*	Domain Name is changed.

## Delete OAC Vanity URL

>**Note:** You must have an **OAC Administrator** role to complete this Sprint.

1. Sign in to the OCI Console at https://cloud.oracle.com

2. In Oracle Cloud Infrastructure Console, click **Navigation menu** in the top left corner.

3. Click **Analytics & AI**. Under Analytics, click **Analytics Cloud**.

3. Select the compartment that contains the OAC instance you're looking for.

4. Click the name of the OAC instance for which you want to delete the vanity URL.

5. On the **Instance Details** page, click **More Actions** and then select **Remove Vanity URL**.

  ![Remove Vanity URL](images/remove-url.png)

6. Click **Remove** to confirm. In few minutes the Vanity URL should be deleted, and your instance will reflect the same.

  ![Confirm remove](images/confirm-remove.png)

## Learn More
* [Create, Update and Delete Oracle Analytics Cloud Vanity URL using UI and OCI CLI](https://blogs.oracle.com/analytics/post/create-update-delete-oac-vanity-url)

## Acknowledgements
* **Author** - Ravi Bhuma, CEAL
* **Last Updated By/Date** - Ravi Bhuma, June 2023
