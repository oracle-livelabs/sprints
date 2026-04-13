# Create a JDK Container Image

Estimated Time: 7 minutes

[Creating a JDK Container Image](videohub:1_tznm8ga3:medium)

## Introduction

This tutorial covers downloading Oracle Linux and Oracle JDK, and then using them to create a JDK container image.

### Objectives

In this lab, you will:

- Download Oracle Linux from Oracle Container Registry
- Download the Oracle JDK
- Create a Docker file
- Build a JDK Docker image

## Task 1: Download Oracle Linux

Oracle publishes Oracle Linux images in [Oracle Container Registry](https://container-registry.oracle.com). You can find them under the **OS** section. In this section, select **oraclelinux**.

You will be taken to the Oracle Linux images page. This page includes an overview, and images for different versions and CPU architectures. Choose an image that fits your needs. This example uses the Oracle Linux 10 for AMD 64 architectures image.

Copy the appropriate docker pull command, and then run it on the terminal:

```
<copy>
docker pull container-registry.oracle.com/os/oraclelinux:10
</copy>
```

When the download is complete, verify the image:

```
<copy>
docker image ls |grep oraclelinux
</copy>
```

The output for this example:

```
container-registry.oracle.com/os/oraclelinux        10      8e91b577cf55    42 hours ago    242MB
```

| Output String | Explanation |
|---------------|-------------|
| `container-registry.oracle.com/os/oraclelinux` | Image repository name |
| `10` | Tag* |
| `8e91b577cf55` | Unique truncated image identifier |
| `42 hours ago` | Time since the image was created |
| `242MB` | Image size |

*Specific image version or variant of the image

## Task 2: Download the Oracle JDK

Oracle provides JDK builds via [Oracle.com](https://www.oracle.com/java/technologies/downloads/), [jdk.java.net](https://jdk.java.net/), and [My Oracle Support](https://support.oracle.com/signin). Choose the build and license you need, then download the JDK you plan to put into your container. For download help, see [How to Download the Oracle Java Development Kit](https://livelabs.oracle.com/ords/r/dbpm/livelabs/run-workshop?p210_wid=4111) on Oracle LiveLabs.

If you want the latest JDK available under the No Fee Terms and Conditions (NFTC) license, you can [download it from Oracle.com with wget](https://www.oracle.com/java/technologies/jdk-script-friendly-urls/). Copy the Linux JDK download URL. In this example it is `https://download.oracle.com/java/25/latest/jdk-25_linux-x64_bin.tar.gz`.

In a terminal, run:

```
wget <DOWNLOAD_URL>
```

To extract the JDK, copy the name of the downloaded file, then run:

```
tar xzvf <FILENAME>
```

The JDK and the Linux image are now both available locally.

## Task 3: Create a Docker File

The next step is to create a Docker file. You can copy the sample file below and, for the purposes of this demonstration, save it as myDockerfile.

```
<copy>
FROM oraclelinux:10
COPY ./jdk-25.0.1/ /jdk/

ENV JAVA_HOME=/jdk
ENV PATH="$JAVA_HOME/bin:$PATH"
</copy>
```

| Docker File Command | Explanation |
|---------------------|-------------|
| FROM oraclelinux:10 | Sets the base image |
| COPY ./jdk-25.0.1/ /jdk/ | Copies the locally extracted JDK into a `jdk` folder in the image |
| ENV JAVA_HOME=/jdk | Defines an environment variable called `JAVA_HOME` that points to the `/jdk` folder |
| ENV PATH="$JAVA_HOME/bin:$PATH" | Updates the `PATH` environment variable so that Java commands can be run without specifying the full path |

The next step is to build the JDK docker image:

```
<copy>
docker build -f myDockerfile -d java/jdk:25-ol10.
</copy>
```

This tells Docker to use myDockerfile, tag the image as `java/jdk:25ol-10`, and use the current folder as the build context.

When the build finishes, confirm the Docker file:

```
<copy>
dockerimage ls | grep jdk
</copy>
```

The output shows the repository, tag, image ID, creation time, and size.

Next, run the container in interactive mode:

```
<copy>
docker run -it --name part2-own java/jdk:25-ol10 /bin/bash
</copy>
```

To confirm the JDK version:

```
<copy>
java -version
</copy>
```

Example output:

```
java version "25.0.1" 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode, sharing)
```