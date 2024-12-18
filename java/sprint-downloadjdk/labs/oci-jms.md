# Downloading with Java Management Service on Oracle Cloud Infrastructure

## Overview
Any Oracle Cloud Infrastructure (OCI) user can download the Oracle JDK through Java Management Service (JMS).

Java Management Service can generate customized terminal commands and Dockerfiles to automate downloading the latest versions of releases available under the NFTC and OTN licenses.

Java Management Service tracks all of a user's downloads and can generate reports based on that data. These reporting features are mainly useful for fleet management and can be ignored if they are not useful to you.

Another advantage of using JMS is that you if you automate a download of an LTS release covered by the NFTC, and the license changes to OTN, you simply have to login to OCI and accept the new terms. Your existing download tokens will automatically be extended to the new license, which means you do not have to update any scripts.

Note that when creating an OCI account, even a free tier, Oracle will ask for a credit card number to verify your identity. Your credit card information will not be saved and you will never be automatically billed.

## Tutorials
[Download Using Java Management Service on OCI](videohub:1_5oyb4ujr)

To get started, you will need an Oracle Cloud Infrastructure (OCI) account. Even if you're using the free tier, Oracle requires a credit card for identity verification. 
You will not be charged, and your credit card details will not be saved.

### Manual Downloads
1. [Sign-in to OCI](https://www.oracle.com/cloud/sign-in.html), and then click on the navigation menu in the top-left corner of the screen.

2. Select **Observability and Management**.

3. Click on **Java Download** under "Java Management."

4. On the following page, select the required JDK release, then scroll down and click on the **Download** button for your desired platform.

### Automating Downloads
1. Follow steps 1 - 3 above.

2. The next step is to generate a token. From the Java download page, select the required JDK version.

3. On the next page, click the **Generate new token** button.

4. In the "Description" field, provide a description, and then click the **Generate** button.

5. On the Java download page, click the **Tokens** tab to view the status of the newly-created token.

6. Once the token has been generated, return to the **Java releases** tab.

7. Select the required JDK release, and then scroll down to until you reach the entry for the required platform.

8. Click **Copy download command** to generate the command.

9. In a terminal, paste and run the copied command to download. This command can be used in scripts to automate the download process.


## Learn More
- [Script Friendly Java Download URLs on Oracle Cloud Infrastructure (OCI) (Doc ID 2995985.1)](https://support.oracle.com/epmos/faces/DocumentDisplay?id=2995985.1) on My Oracle Support
- [Script Friendly Download](https://docs.oracle.com/en-us/iaas/jms/doc/script-friendly-download.html#GUID-ADF04E11-3721-4D6D-8C61-E9418D926B48) in the OCI documentation
- [Downloading Java with Java Management Service: Script-friendly Oracle Java downloads now available through OCI](https://blogs.oracle.com/java/post/java-download-now-available-on-ocii) on Oracle Blogs