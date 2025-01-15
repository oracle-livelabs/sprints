# Automating Downloads from Oracle.com


## Introduction
This tutorial covers automating downloads of Oracle JDK and GraalVM. 
This method is available to everyone and does not require login or license clickthrough

[Automate Downloads from Oracle.com](videohub:1_b66ya1gy)


## Automate Downloading the Latest Releases
There are URLs available on the [Java Downloads page](https://www.oracle.com/java/technologies/downloads/) that point to the updates for releases covered by the [NFTC license](https://www.java.com/freeuselicense) or [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html). These can be used in scripts and Dockerfiles to automate downloading. You can use these URLs to ensure that your deployments are always up-to-date.

1. Navigate to the [Java Downloads page on Oracle.com](https://www.oracle.com/java/technologies/downloads/).

    You can also use this shorter URL: [oracle.com/javadownload](https://www.oracle.com/javadownload)

2. Scroll to the area of the page that lists the releases offered under NFTC terms.   Releases offered under NFTC releases are near the top of the page, releases offered under the  OTN license are listed further below.  Use the tabs to find the Feature release of your choice.

3. Use the sub-tab to select your operating system. 

4. Copy the link that corresponds to your desired download.  Notice that in some cases there are multiple architectures and different packaging options

You can use these URLs to automate the download process by integrating them into scripts or Dockerfiles. For example, in a script, you can download the latest Oracle JDK or GraalVM directly via command line. Similarly, Dockerfiles can use this URL to fetch the necessary Java components automatically during container builds.

For example, to download the latest release of JDK 23 on Linux using `wget`, run the following command in the terminal:
```
wget https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.tar.gz
```
This also works with `curl`:
```
curl https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.tar.gz
```

These URLs offer up-to-date releases of the selected release families. For example, `https://download.oracle.com/java/23/latest/jdk-23_linux-x64_bin.tar.gz` will serve the General Availability (GA) version of JDK 23, until the first Critical Patch Update (CPU) for JDK 23 is released. It will then offer 23.0.1 (the first CPU) until the next JDK 23 CPU is released, at which point it will offer JDK 23.0.2.

Keep in mind that a script configured to download the latest version of a release family will cease functioning when that release family reaches end-of-life and enters sustaining support. See "Availability of URLs" on [JDK and GraalVM Script Friendly URLs](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/) for details.



## Automate Downloading of Specific Update Releases
To automate downloading of a specific release, there are URLs that have `archive` instead of `latest` in the path, and then list the complete version number (such as 23.0.1).

For example, `https://download.oracle.com/java/21/archive/jdk-21.0.4_linux-aarch64_bin.tar.gz` started working on the day that JDK 21.0.4 released, and will continue delivering JDK 21.0.4 even after it has been superseded by 21.0.5.

There archive URLs are only recommended for debugging older systems, as non-current updates do not contain important fixes (such as fixes to potential security vulnerabilities) that are present in the current CPU releases.

To automate downloading a JDK or GraalVM release in sustaining support:

1. Open the [Java Archive page](https://www.oracle.com/java/technologies/downloads/archive/).

2. Scroll down to the "Previous Java releases" section.

3. Use the left menu to select the product you want, and then the menu on the right to select the release or release family. You will then be taken to the download page.

For releases that were offered under NFTC, and for up to one year after the corresponding "latest" url continues to work, you can select the URL for the platform and file type you want. 

This URL can be used in a terminal, in scripts and in Dockerfiles.


## References
- [JDK and GraalVM Script Friendly URLs on Oracle.com](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/)