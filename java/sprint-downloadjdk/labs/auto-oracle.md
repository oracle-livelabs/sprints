# Automatic Downloads from Oracle.com


## Introduction
This tutorial covers automating downloads of Oracle JDK and GraalVM. These methods are available to everyone.

[Automate Downloads from Oracle.com](videohub:1_b66ya1gy)


## Automate Downloading the Latest Releases
There are URLs available on the [Java Downloads page](https://www.oracle.com/java/technologies/downloads/) that always point to the latest releases covered by the NFTC license. These can be used in scripts and Dockerfiles to automate downloading. You can use these URLs to ensure that your deployments are always up-to-date.

1. Navigate to the [Java Downloads page on Oracle.com](https://www.oracle.com/java/technologies/downloads/).

    **Note:** You can also use this shorter URL: oracle.com/javadownload

2. Use the horizontal menus to select the release family you want. NFTC releases are near the top of the page, and OTN releases are below.

3. Use the smaller horizontal menu to choose your operating system.

4. Copy the link that corresponds to your desired download.

You can use this URL to automate the download process by integrating it into scripts or Dockerfiles. For example, in a script, you can download the latest Oracle JDK or GraalVM directly via command line. Similarly, Dockerfiles can use this URL to fetch the necessary Java components automatically during container builds.

For example, to download the latest release of JDK 23 on Linux using `wget`, run the following command in the terminal:
```
wget https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.tar.gz
```
This also works with `curl`:
```
curl https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.tar.gz
```

Keep in mind that a script configured to download the latest version of a release family will cease functioning when that release family reaches end-of-life and enters sustaining support. See "Availability of URLs" on [JDK and GraalVM Script Friendly URLs](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/) for details.


## Automate Downloading of Releases in Sustaining Support
To automate downloading a JDK or GraalVM release in sustaining support:

1. Open the [Java Archive page](https://www.oracle.com/java/technologies/downloads/archive/).

2. Scroll down to the "Previous Java releases" section.

3. Use the left menu to select the product you want, and then the menu on the right to select the release or release family. You will then be taken to the download page.

From here you can select the URL for the platform and file type you want. This URL can be used in a terminal, in scripts and in Dockerfiles.

Note that these URLs point to the exact version indicated, not to the latest release, so they will not include the latest security updates.


## References
- [JDK and GraalVM Script Friendly URLs on Oracle.com](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/)