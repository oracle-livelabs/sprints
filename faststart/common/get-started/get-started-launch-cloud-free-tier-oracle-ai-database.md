# Get started - Launch Your Always Free Autonomous AI Database Lab Environment

## Introduction

Welcome to this **LiveLabs FastStart** lab.

In this lab, we will show you how to launch an **Always Free Autonomous AI Database** instance and how to open the built-in **Database Actions** tools,  
so that you can gain hands on experience with Oracle Cloud and the latest Oracle AI Database features outlined in the LiveLabs FastStart Labs.  
This lab will provide you with a set of step by step instructions, that will enable you to launch your lab environment in the cloud utilizing an Autonomous AI Database Free instance on the Oracle Cloud Free Tier.

![Oracle Autonomous AI Database Free- Homepage](./images/oracle-autonomous-database-free-homepage.png " ")
![What's in Oracle Cloud Free Tier](./images/oracle-cloud-free-tier-whats-in-it.png " ")

>***Note:*** The FastStart Labs will utilize the Always Free services when you leverage Autonomous AI Database in the Oracle Cloud Free Tier.

**Estimated Time:** ***As little as 2 minutes - Task level timing estimates provided***, **as task 1 & 2 are one time tasks.**

### **Objectives**

- Create an Oracle Cloud Always Free Tier Account
- Create an Always Free Oracle Autonomous AI Database Instance
- Connect to Always Free Oracle Autonomous AI Database Instance & Open Database Actions Launchpad


>Skip to task 2 to **Create an Always Free Oracle Autonomous AI Database Instance**, if you already have an **Oracle Cloud Free Tier** account.  
>Skip to task 3 to **Connect to Always Free Oracle Autonomous AI Database Instance & Open Database Action Launchpad**, if you already have an Oracle Autonomous Database Instance



## ***Task 1: Create Oracle Cloud Always Free Tier Account***

**Estimated Time:** ***15 minutes***

1. **Set up an Oracle Cloud Free Trial account**

       * Visit [Oracle's Free Tier page](https://www.oracle.com/cloud/free/) and click on **Start for Free** to begin the signup process.

       ![Oracle Cloud Free Tier- Homepage](./images/oracle-cloud-free-tier-homepage.png "=50%x*")

2. **Enter Account Creation Information**

       * Select your Country/Territory
       * Enter your First Name & Last Name
       * Enter a valid Email Adress
       * Check the box and Complete the "I am human" CAPTCHA verification

       ![Oracle Cloud Free Tier- Account Info](./images/oracle-cloud-free-tier-account-info.png "=50%x*")

3. **Verify Your Email**

       * Click on **Verify Email** button to proceed

       * Open your email and find the verification email from Oracle

       * Click the Verify email button in the email

       ![Oracle Cloud Free Tier- Verify Email](./images/oracle-cloud-free-tier-verify-email.png "=50%x*")

4. **Complete Entering Account Information**

       * Enter a Password for your cloud account
       * Select Customer Type
       * Enter a Cloud Account Name - also known as a Tenancy Name

       ![Oracle Cloud Free Tier- Account Info � Page 2](./images/oracle-cloud-free-tier-account-info-page2.png "=50%x*")

       * Select your Home Region

       ![Oracle Cloud Free Tier- Account Info � Home Region](./images/oracle-cloud-free-tier-account-info-home-region.png "=50%x*")


       * Check the box to confirm you understand that the Home Region choice cannot be changed after signup

       * Read and accept the Terms of Use, then click Continue button to proceed.

5. **Enter Address & Phone Information**

       * **Enter address**

       >***Ensure the address is accurate***, as it will be **verified with your payment details.**

       * **Enter phone number**

        ![Oracle Cloud Free Tier- Account Info Address Info](./images/oracle-cloud-free-tier-account-info-address-info.png "=50%x*")

       >***You may receive a verification code via SMS*** to confirm your phone number


       * click on continue to proceed

6. **Add Payment Method for Verification**

       * Click on **Add Payment Verification Method**

        ![Oracle Cloud Free Tier Account Add Payment Info](./images/oracle-cloud-free-tier-account-add-payment-info.png "=50%x*")

       * On Popup window, Click on Credit Card button

        ![Oracle Cloud Free Tier Account Add Credit Card](./images/oracle-cloud-free-tier-account-add-credit-card.png " ")


       * **Enter your credit card billing information.**

        ![Oracle Cloud Free Tier Account Enter Billing Details](./images/oracle-cloud-free-tier-account-enter-billing-details.png " ")

       >***Note:*** A temporary hold will be placed on your card, typically for $1, which is then removed.


       * **Now select your payment card type and enter card payment details.**

        ![Oracle Cloud Free Tier Account Enter Payment Details](./images/oracle-cloud-free-tier-account-enter-payment-details.png "=50%x*")

       * Click on **Finish button** to proceed.

        ![Oracle Cloud Free Tier Account Thank You](./images/oracle-cloud-free-tier-account-thank-you.png " ")


7. **Accept Terms & Conditions to Start Your Free Trial**

       * Check the box to **accept terms and conditions**

       * Click on **Start my free trial** button

        ![Oracle Cloud Free Tier Account Accept Trial Agreement](./images/oracle-cloud-free-tier-accept-trial-agreement.png "=50%x*")


8. **Access Your Free Oracle Cloud Trial Account**

       * Once Oracle has completed provisioning your account, **you will receive a "Welcome" or "Get Started" email.**
       * Use your ***Cloud Account Name*** to **Login to the OCI console:** at  https://cloud.oracle.com.
       * Click the **Next** button and then enter your **User ID** (your email), and **Password** and Click **Sign In** Button.

        ![Oracle Cloud Free Tier Account OCI Console Login](./images/oracle-cloud-free-tier-oci-console-login.png " ")


***Congratulations!***

You now have your own **Oracle Cloud Free Tier Account** that you can use to gain hands on experience with Oracle Cloud and Oracle Database 23ai.
<br>
<br>

## ***Task 2: Create an Always Free Oracle Autonomous AI Database Instance***

**Estimated Time:** ***15 minutes***


1. Open Navigation Menu

       * Open the **Navigation Menu** by clicking the hamburger icon in the top-left corner.

       ![OCI Console – Open Navigation Menu](./images/create-adb-open-navigation-menu.png "=50%x*")

2. Navigate to Autonomous Database Landing Page
       * Click on **Oracle Database**, then select **Autonomous Database**.

       ![OCI Console - Navigate to ADB](./images/create-adb-navigate-console-to-adb.png " ")

3. Choose Your Compartment and Start Autonomous Database Creation

       * Select the **Compartment** where you want to create your database.
       * Click the **Create Autonomous Database** button.

       ![ADB Home Page - Start Create ADB](./images/create-adb-start-create-adb.png "=50%x*")

4. Provide Details to Create Database

       * Display Name: Enter a user-friendly name to identify your database.
       * Database Name: Create a unique name for your database within your tenancy.
       * Workload Type: Select "Transaction Processing" or "Data Warehouse" based on your needs.

       >***Note:*** For this lab example we entered ***ADBFree*** for the **Display Name** and **Database Name**  <br>
       >We also selected ***Data Warehouse*** for the **Workload Type**

       ![Create ADB - Enter Details](./images/create-adb-enter-details.png "=50%x*")

5. Choose Autonomous Database **Instance type** to be ***Always Free*** and ***23ai** for Database Version

       * Under **Database configuration**, ensure that the **Always Free** toggle slider is on.
       * In the **Database version** section, **choose 23ai** from the drop-down menu.

       >***Note:*** Free Tier databases automatically use **Shared Infrastructure** (serverless).
       >***Note:*** ADB free instances can be upgraded to a paid version. Requires you to first upgrade the Free Tier account to a paid OCI account.

       ![Create ADB - Set as Always Free and 23ai](./images/create-adb-set-as-always-free-23ai.png "=50%x*")

6. Set Administrator Credentials

       * Create a strong password for the default ***ADMIN*** user
       >***Important:*** Remember this password, as you will need it to access your database.

       ![Create ADB - Set Admin Password](./images/create-adb-set-admin-password.png "=50%x*")

7. Choose Network Access Type

       <u>Description of Network Access Choices:</u>
       * **Secure access from everywhere:** The simplest option for testing, allow users with database credentials to  connect from any IP address.
       * **Secure access from allowed IPs and VCNs only:** (suggested) Restrict access to specific IP addresses and Virtual Cloud Networks.

       ![Create ADB - Configure Network Access](./images/create-adb-configure-network-access.png "=50%x*")

8. Review Configuration Page and Launch Create ADB flow

       * Review all your configuration settings one last time.
       * Click **Create** button to begin provisioning Autonomous Database.

       ![Create ADB – Select Create final button](./images/create-adb-select-create-final-button.png "=50%x*")

       >The Autonomous Database service will begin creating your instance. <br>
       >This process can take 2 to 5 minutes.
       <br>

       ![Create ADB – Provisioning in Progress](./images/create-adb-provisioniong-in-progress.png "=50%x*")

       >The status will change from Provisioning to Available when complete.

       ![Create ADB – Provisioning Complete](./images/create-adb-provisioniong-complete.png " ")

***Congratulations!*** Your Autonomous Database Free Instance is now ready for use.
<br>
<br>


## ***Task 3: Connect to Always Free Oracle Autonomous AI Database & Open Database Action Launchpad***
<br>

**Estimated Time:** ***15 minutes***

>Skip to **Step 4** ***if you are continuing from Task 2*** 

1. Open Navigation Menu
       * Open the **Navigation Menu** by clicking the hamburger icon in the top-left corner.

       ![OCI Console – Open Navigation Menu](./images/select-adb-open-navigation-menu.png "=50%x*")

2. Navigate to Autonomous Database Landing Page
       * Click on **Oracle Database**, then select **Autonomous Database**.

       ![OCI Console - Navigate to ADB](./images/select-adb-navigate-console-to-adb.png "=50%x*")

3. **Choose Compartment** where your database resides and **select your database from list** of Autonomous Databases displayed

       ![OCI Console – Select Compartment and your ADB](./images/select-adb-select-compartment-and-adb.png "=50%x*")

4. On database details page select **Database Actions** button and click on **View all database actions**

       ![OCI Console – Select Database Actions](./images/select-adb-select-database-actions.png "=50%x*")

       >**This opens the Database Actions Launchpad**, ***where you can access the built-in web-based tools, including SQL Worksheet.***

       ![OCI Console – Database Actions Launchpad](./images/select-adb-database-actions-launchpad.png "=50%x*")

***Congratulations!*** Your lab environment is now ready for use. <br>
***Please proceed to lab 1***.
<br>
<br>





***Please proceed to lab 1***, once your lab environment is ready for use.
<br>
<br>


## Acknowledgements
- **Created By/Date** - Eddie Ambler
- **Last Updated By/Date** - Eddie Ambler, September 2025

