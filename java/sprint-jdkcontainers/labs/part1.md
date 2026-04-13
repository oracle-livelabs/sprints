# Download an Oracle JDK Container Image

Duration: 6 minutes

[Introduction to Oracle JDK Container Images ](videohub:1_7d20kpln:medium)

## Introduction

Before building your own Java container image, consider exploring the official Oracle Java images on [Oracle Container Registry](https://container-registry.oracle.com).

On the **Java** tab you will find repositories for the JDK, server JRE, OpenJDK, and JDK releases available under the [Oracle No-Fee Terms and Conditions License (NFTC)](https://www.oracle.com/downloads/licenses/no-fee-license.html).

Each repository provides installation instructions, supported JDK versions, available OS variants, usage examples, and more.

It is recommended to review these resources before creating your own image.

### Objectives

In this lab, you will:

- Get access to Oracle Container Registry
- Download an Oracle JDK Container Image

## Task 1: Getting Started

Sign into [Oracle Container Registry](https://container-registry.oracle.com) with your Oracle account.

If needed, create a secret Auth Token and store it securely. To do so, click on your username, and then select **Auth Token** from the drop-down menu.

In a terminal, confirm that docker is installed:

```
<copy>
docker --version
</copy>
```

and

```
<copy>
docker info
</copy>
```

If Docker is not installed, do so now.

## Task 2: Download an Oracle JDK Container Image

In a terminal, log into Oracle Container Registry:

```
<copy>
docker login container-registry.oracle.com
</copy>
```

You will be prompted to enter a user name and password.

Use your Oracle account name for the user name. The password is your Auth Token.

Next, Pull the JDK image provided by Oracle:

```
<copy>
docker pull container-registry.oracle.com/java/jdk-no-fee-term:latest
</copy>
```

It may take some time to pull the image.

To verify that the download completed successfully:

```
<copy>
docker image ls |grep jdk
</copy>
```

The output will look like this:

```
container-registry.oracle.com/java/jdk-no-fee-term  latest  ebc8cb5fb144  2 months ago  660MB
```
There are five pieces of information here:

| Output String | Explanation |
|---------------|-------------|
| `container-registry.oracle.com/java/jdk-no-fee-term` | Image repository name |
| `latest` | Tag* |
| `ebc8cb5fb144` | Unique truncated image identifier |
| `2 months ago` | Time since the image was created |
| `660MB` | Image size |

*Specific image version or variant of the image

## Task 3: Start the Container

Connect to the Oracle JDK container image in interactive mode:

```
<copy>
docker run -it --name part1-ocr container-registry.oracle.com/java/jdk-no-fee-term:latest /bin/bash
</copy>
```

This `docker run` command includes the following options

| Docker Run Command Option | Function |
|---------------------------|----------|
| `-it` | Allows for interactive sessions |
| `--name` | Assigns a custom name to the container for easier reference |
| `container-registry.oracle.com/java/jdk-no-fee-term:latest` | Name of the Docker image to use as a template |
| `/bin/bash` | A command to run inside the container (optional) |

Verify that you are connected to the Oracle JDK container image:

```
<copy>
java --version
</copy>
```

Example output:

```
java version "25.0.1" 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode, sharing)
```

End the bash session:

```
<copy>
exit
</copy>
```

You should now be back in your system's terminal.

You can also check the container's Java version directly without starting an interactive session by running:

```
<copy>
docker run container-registry.oracle.com/java/jdk-no-fee-term:latest java -version
</copy>
```

Sample output:

```
java version "25.0.1" 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode, sharing)
```