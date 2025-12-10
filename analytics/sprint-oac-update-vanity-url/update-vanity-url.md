# How do I update an Oracle Analytics Cloud Vanity URL in Oracle Cloud Infrastructure(OCI)?

Duration: 2 minutes

This sprint teaches you how to use the OCI console to update an OAC vanity URL's SSL certificates.

Update the Vanity URL's SSL certificates when.
*	Your Existing SSL certificates are expired.
*	Existing SSL certificates are compromised and renewed.
*	Domain Name change and SSL certificate changes.


## Update OAC Vanity URL

>**Note:** You must have an **OAC Administrator** role to complete the following steps.

1. Go to https://cloud.oracle.com and Log in to the Oracle Cloud Infrastructure Console
    *	In the OCI Console, click **Navigation menu** in the top left corner.
    * Click **Analytics & AI**. Under Analytics, click **Analytics Cloud**.
    *	Select the compartment that contains the Oracle Analytics Cloud instance you want to update.
    *	Click on the name of the instance you want to update the vanity URL for.

2. On the Instance Details page, click **More Actions** and then select **Update Vanity URL Certificate**.

  ![More Actions](images/more-actions.png)

3. On the **Update Vanity URL Certificate** page, update the digital X.509 certificate for your vanity domain. You can do this by either uploading a valid certificate file in PEM format (with the extensions .pem, .cer, or .crt) or pasting the valid X.509 certificate text.

  ![Update URL](images/update-url.png)

3. Update the private key for this certificate. You can do this by either uploading the private key file (with the extensions .pem or .key) or pasting the private key text. If your private key requires a passphrase, enter the passphrase in the **Private Key Passphrase** field.

  ![Private Key](images/private-key.png)

4. If your certificate requires a new certificate authority chain, select **Custom Certificate Authority Chain** and update the chain by uploading the chain file (with the extensions .pem, .cer, or .crt) or pasting the chain text.

  ![Custom Certificate Authority Key](images/custom-cert-key.png)

5. Once you have updated the certificate, key, and chain (if necessary), click **Update.** Wait a few moments for the update to complete.

  ![Update](images/update.png)

6. To test the update, go to the Access Information section and  click the vanity URL to verify that you access OAC.  

Congratulations, you've learned how to use OCI to update a vanity URL in  Oracle Analytics!


## Learn More
* [Create, Update and Delete Oracle Analytics Cloud Vanity URL using UI and OCI CLI](https://blogs.oracle.com/analytics/post/create-update-delete-oac-vanity-url)

## Acknowledgements
* **Author** - Ravi Bhuma, CEAL
* **Last Updated By/Date** - Shiva Oleti, June 2025
