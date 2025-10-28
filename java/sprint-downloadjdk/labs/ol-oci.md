# Manually Downloading the the JDK on Oracle Linux Using OCI yum Repositories

## Overview
This tutorial covers installing the JDK on Oracle Linux using Oracle Cloud Infrastructure (OCI) yum repositories.

This method is available to OCI customers.  
<br />

## Tutorial
[Downloading for Oracle Linux on OCI](videohub:1_cmjf7kys)

All of the steps in this tutorial are completed using the Linux terminal.  
<br />

### 1. Make Sure You Are Running Oracle Linux
Run the following terminal command:
```
<copy>cat /etc/os-release</copy>
```
You should see something like "Oracle Linux Server" in the output.

If not, you might be using a different Linux distribution and this tutorial might not work for you.  
<br />

### 2. Update Your System
Before installing anything, make sure your system is up to date:
```
<copy>sudo dnf update -y</copy>
```
This might take a few minutes.  
<br />

### 3. Enable the Oracle Repositories
Even if the repositories might already be enabled, run the following just to make sure everything is in place:
```
<copy>sudo dnf config-manager --enable ol9_appstream ol9_baseos_latest</copy>
```
This command assumes you are using Oracle Linux 9. If you are using a different version, update the name of the repository by replacing "ol9" with "ol" and your version number.

This ensures your system can communicate with Oracle's official package server.

If you get a `No such command: config-manager` error, make sure you have `dnf-plugin-core` installed.  
<br />

### 4. View Available JDK Versions
View which JDK versions are available from the repository:
```
<copy>dnf list available | grep jdk</copy>
```
This will show all the available Oracle JDK packages, and a few other packages as well.

The Oracle JDK packages are named `jdk-VERSION-headless/headful`.  
<br />

### 5. Download and Install the JDK
Download and install the JDK (in this example JDK 17):
```
<copy>sudo dnf install jdk-17-headful -y</copy>
```
To download a different version, replace `17-headful` with the name of the package you want to install.

If you get a `package not found` error, ensure you are entering the package name exactly as it appears in the list.  
<br />

### 6. Check if Java is Installed and Working
After the installation has completed, check to make sure Java is installed and working:
```
<copy>java --version</copy>
```
In the terminal output you should see the Oracle JDK version.  
<br />

## Good to Know
- Oracle releases supported JDK updates every 3 months
- To update Java at any time, run:
```
<copy>sudo dnf update -y</copy>
```
- Confirm your Java version with:
```
<copy>java --version</copy>
```
- Compare your installed version with the latest at [JDK Releases](https://www.java.com/en/releases/)
- Updates continue for as long as your JDK version is supported