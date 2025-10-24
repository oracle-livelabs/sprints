# Manually Downloading the JDK on Oracle Linux Using Unbreakable Linux Network Channels

## Overview
This tutorial covers installing the JDK on Oracle Linux using Unbreakable Linux Network (ULN) channels.

This method is available to OCI customers.  
<br />

## Tutorial
[Downloading for Oracle Linux on OCI](videohub:1_40lj26on)

### 1. Make Sure You Are Running Oracle Linux





Hello everyone. In this video, I’m going to walk you through how to install the Oracle JDK on Oracle Linux using the Unbreakable Linux Network, or ULN. This is a straightforward way to get Oracle’s official JDK on your system and keep it up to date, all from the terminal.

First, you’ll need to register for ULN. If you already have an Oracle Single Sign-On account, you can use that with your CSI. If you don’t have SSO, you can register for an Oracle account first, then associate it with your CSI to get access.

Next, generate an Auth Token for ULN. You’ll use this token instead of your password during registration on the system.

After you’ve registered and have your token ready, let’s go to the terminal and verify the Linux version:

cat /etc/os-release

You should see “Oracle Linux Server” in the output. If not, these steps won’t work for you. If you’re using a different Linux distribution, check the other guides for how to get the right Oracle JDK for your distribution.

Now we’ll register this system with ULN using your SSO email, your Auth Token, and your CSI. In the terminal, run:

sudo uln_register

Follow the prompts. Enter your Oracle SSO email as the username. The Auth Token as your password. And finally, the CSI. Continue through the prompts until registration finishes.

Right after registration, you’ll be prompted on what software packages are relevant to your system. Go ahead and select all the package groups you require so ULN can determine the right updates for your environment.

Next, let’s confirm the repositories that are now available:

sudo dnf repolist

You should see your enabled ULN channels listed here. If you don’t see the expected Java or software channels, go back to linux.oracle.com, open your system under Systems > <System Name> > Manage Subscriptions, and enable the appropriate channels for your Oracle Linux version and architecture.

Now we’re ready to install the JDK. To see which versions are available, you can run:

dnf list available | grep jdk

You should see entries for all supported JDK versions, and have the option to select headless or headful for each version. If you want a minimal package, just for running headless applications, choose the headless version. If you want a full JDK, including development and debugging tools, choose the headful version (even if you want to develop only headless applications).

Let’s say we want to install Java 17. We’ll run:

sudo dnf install jdk-17-headful -y

You can replace 17 with whichever version you need, just match it to the package name you see in the list.

Once installation completes, check that Java is installed and working by typing:

java --version

You should see details about your Oracle JDK version.

Oracle will provide quarterly updates for the JDK per Oracle “Critical Patch Update” in January, April, July, and October. You can get the exact dates and register to receive notices of new releases by searching for “Oracle Critical Patch Updates”. The result should be the top or among the top ones.

All versions of the JDK installed through this repository will be updated every time you tell dnf to update installed packages by running:

sudo dnf update -y

You can update individual JDK versions if you prefer. From our previous example, once you installed jdk-17-headful, you could update it by running:

sudo dnf update jdk-17-headful -y

You can verify your Java version again with:

java --version

And that’s it! You’ve registered your system with ULN, installed the Oracle JDK on Oracle Linux using official channels, and learned how to keep it up to date. Thanks for watching!