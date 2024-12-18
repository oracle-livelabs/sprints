# Automatic Downloads from Oracle.com

[Automate Downloads from Oracle.com](videohub:1_jzqalln0)

This tutorial covers automating downloads of the latest NFTC releases of Oracle JDK and GraalVM. 


1. Navigate to the [Java Downloads page on Oracle.com](https://www.oracle.com/java/technologies/downloads/).

    **Note:** You can also use this shorter URL: oracle.com/javadownload

2. Use the horizontal menus to select the release family you want. NFTC releases are near the top of the page, and OTN releases are below.

3. Use the smaller horizontal menu to choose your operating system.

4. Copy the link that corresponds to your desired download.

With the URL copied, you can now easily automate the download process by integrating it into scripts or Dockerfiles. 
For example, in a script, you can use this URL to download Oracle JDK or GraalVM directly via command line. 
Similarly, Dockerfiles can use this URL to fetch the necessary Java components automatically during container builds.

**Note:** A script configured to download the latest version of a release family will cease functioning when that release family reaches end-of-life and enters sustaining support.




## References
- [JDK and GraalVM Script Friendly URLs on Oracle.com](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/)