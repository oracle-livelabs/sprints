# Manually Downloading the JDK on Oracle Linux Using Unbreakable Linux Network Channels

### Overview

This tutorial covers installing the JDK on Oracle Linux using Unbreakable Linux Network (ULN) channels.

This method is only available to Oracle Linux Support customers using Oracle Linux.  
<br />

### Tutorial

[Downloading for Oracle Linux on OCI](videohub:1_40lj26on:large)

### 1. Register for Unbreakable Linux Network

The first step is to [register for an Unbreakable Linux Network (ULN)](https://linux.oracle.com/ords/f?p=101:30) account.

If you already have an Oracle Single Sign-On (SSO) account, click the **Sign On** button, and then enter your CSI on the next page.

If you don't have an SSO account, click the **Create New Single Signon Account** button. Follow the prompts to create an SSO and associate it with your CSI.

### 2. Generate a Secret Key

Once you have logged in, go to the **Auth Token** tab to generate a secret key. You’ll use this key instead of your password during registration on the system.

### 3. Register Your System and Select Packages

After you have registered and have your secret key ready, go to the terminal and verify the Linux version:
```
<copy>cat /etc/os-release</copy>
```
You should see “Oracle Linux Server” in the output. If not, the ULN method will not work for you. Check the other guides in this workshop for how to download the right Oracle JDK for your distribution.

Next, register this system with ULN using your SSO email, secret key, and CSI. In the terminal, run:
```
<copy>sudo uln_register</copy>
```
Follow the prompts.

At the login screen, enter the following information:

- **Login:** your SSO email address

- **Password:** your secret key

- **CSI:** your CSI

Continue through the prompts until registration finishes.

After registration you will be prompted to select which software packages are relevant to your system. Select all the package groups you require so ULN can determine the right updates for your environment.

### 4. Confirm the Repositories that are Available

In the terminal, run:
```
<copy>sudo dnf repolist</copy>
```
The terminal will output a list of enabled ULN channels.

If you don’t see the expected Java versions or software channels, go back to [the ULN website](https://linux.oracle.com), open your system under **Systems** > **SYSTEM_NAME** > **Manage Subscriptions**, and enable the appropriate channels for your Oracle Linux version and architecture.

### 5. Install the Oracle JDK

Now you are ready to install the JDK. To see which versions are available, run:
```
<copy>dnf list available | grep jdk</copy>
```
You should see entries for all supported JDK versions, both headless and headful.

If you want a minimal package for running headless applications, choose the headless version.

If you want a full JDK, including development and debugging tools, choose the headful version (even if you want to develop only headless applications).

As an example, to install a headful JDK 17, run:
```
<copy>sudo dnf install jdk-17-headful -y</copy>
```
You can replace "17" with whichever version you need, just match it to the package name you see in the list.

Once installation completes, check that Java is installed and working:
```
<copy>java --version</copy>
```
You should see details about your Oracle JDK version.

### 6. Updating Installed Packages

Oracle provides quarterly Critical Patch Updates (CPUs) in January, April, July, and October for each supported version of the JDK. It is highly recommended to update your JDK to the newest CPU when it becomes available.

To find the exact dates and register to receive notices of new releases, see [Critical Patch Updates, Security Alerts, and Bulletins](https://www.oracle.com/security-alerts/).

To update all of the versions of the JDK installed via ULN:
```
<copy>sudo dnf update -y</copy>
```
You can also update individual JDK versions. From the previous example, after installing jdk-17-headful, update it by running:
```
<copy>sudo dnf update jdk-17-headful -y</copy>
```
Then verify your Java version:
```
<copy>java --version</copy>
```