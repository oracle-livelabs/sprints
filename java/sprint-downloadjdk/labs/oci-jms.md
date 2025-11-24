# Downloading with Java Management Service on Oracle Cloud Infrastructure

## Overview
Oracle Cloud Infrastructure (OCI) users can download the Oracle JDK through Java Management Service (JMS).

Java Management Service can generate customized commands and Dockerfiles to automate downloading the latest versions of releases available under the [Oracle No-Fee Terms and Conditions (NFTC)](https://www.oracle.com/downloads/licenses/no-fee-license.html) and [Oracle Technology Network License Agreement for Oracle Java SE (OTN)](https://www.oracle.com/downloads/licenses/javase-license1.html) licenses.

Java Management Service tracks all of a user's downloads and can generate reports based on that data. These reporting features are useful for fleet management.

Another advantage of using JMS is that you if you automate downloads of an LTS release (which would have been initially offered under the NFTC license), when that release reaches end-of-permissive license and further updates are offered under the OTN license,you will have the option of accepting the OTN terms for future updates. This will extend the validity of your token for that release, and allow existing scripts that are using it to continue working.


## Tutorials
[Download Using Java Management Service on OCI](videohub:1_5oyb4ujr:large)

To get started, you will need an Oracle Cloud Infrastructure (OCI) account.

When creating an OCI account, Oracle will ask for a credit card number to verify your identity. The credit card information used to create the OCI account will be used for verification purposes only.  OCI accounts receive an initial trial period.  At the end of the trial period, the account will convert into a "free-tier" account. if you decide to upgrade the account into a paid account, you will have to enter a credit card again or contact OCI sales to establish billing terms. The JMS download feature described in this tutorial can be used with any of the OCI accounts: trial, paid, and even free-tier.


### Manual Downloads
1. [Sign-in to OCI](https://www.oracle.com/cloud/sign-in.html), and then click on the navigation menu in the top-left corner of the screen.

2. Select **Observability and Management**.

3. Click on **Java Download** under "Java Management."

4. On the following page, select the required JDK release, then scroll down and click on the **Download** button for your desired platform.

**Note:** Bundled Patch Releases (BPRs) are linked from this page. These updates are only accessible to Java SE Support customers. These are meant to be used only when a critical bug fix is needed and you cannot wait for it to be included in the next scheduled release.


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

Once a release has a token you will also be able to download a Dockerfile that leverages your token to download an up-to-date JDK version during the Docker build process.


## Learn More
- [Script Friendly Java Download URLs on Oracle Cloud Infrastructure (OCI) (Doc ID 2995985.1)](https://support.oracle.com/epmos/faces/DocumentDisplay?id=2995985.1) on My Oracle Support
- [Script Friendly Download](https://docs.oracle.com/en-us/iaas/jms/doc/script-friendly-download.html#GUID-ADF04E11-3721-4D6D-8C61-E9418D926B48) in the OCI documentation
- [Downloading Java with Java Management Service: Script-friendly Oracle Java downloads now available through OCI](https://blogs.oracle.com/java/post/java-download-now-available-on-ocii) on Oracle Blogs