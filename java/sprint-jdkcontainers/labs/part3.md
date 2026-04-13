# Build a Compact JDK Container Image

Duration: 7 minutes

[Building a Compact JDK Container Image](videohub:1_o6b2hqem:medium)

## Introduction

This tutorial covers building a compact JDK container image using `jlink`. The examples below are for JDK 25.

### Objectives

In this lab, you will:

- Create a custom compact JDK
- Create a containerimage using the custom JDK

## Task 1: Create a Custom Compact JDK Using jlink

The `jlink` tool lets you create a custom JDK runtime that includes only the modules your application needs, which can significantly shrink your image. The `jlink` tool is included in the JDK `bin` directory by default.

For more information on `jlink` run:

```
<copy>
jlink --help |more
</copy>
```

> **Note:** You can also refer to the online man pages for `jlink`:
> - [JDK 25 (LTS)](https://docs.oracle.com/en/java/javase/25/docs/specs/man/jlink.html)
> - [JDK 21 (LTS)](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jlink.html)
> - [JDK 17 (LTS)](https://docs.oracle.com/en/java/javase/17/docs/specs/man/jlink.html)
> - [JDK 11 (LTS)](https://docs.oracle.com/en/java/javase/11/tools/jlink.html)

To view the list of all modules in the JDK, run:

```
<copy>
jdk-25.0.1/bin/java --list-modules
</copy>
```

Next, use `jlink` to create a custom runtime that includes only the Java base module.

```
<copy>
jdk-25.0.1/bin/jlink --output ./jdk-small --add-modules java.base --strip-debug
</copy>
```

| jlink Command Option | Function |
|----------------------|----------|
| `--output ./jdk-small` | Creates an image called `jdk-small` in the current directory |
| `--add-modules java.base` | Include only the `java.base` module in the custom runtime |
| `--strip-debug` | Remove debug information from the resulting image |

Next, navigate to the `jdk-small` directory:

```
<copy>
cd ./jdk-small
</copy>
```

This directory only includes Java and `keytool`.
It only includes a single module, `java.base@25.0.1`.

To compare the disk spaced used by the custom JDK with the original, first run:

```
<copy>
du -s -k ./jdk-25.0.1
</copy>
```

Example output:

```
383092 ./jdk-25.0.1
```

Then run:

```
<copy>
du -s -k  ./jdk-small
</copy>
```

Example output:

```
54080 ./jdk-small
```

In this example, the size of `jdk-small` is approximately 54MB, whereas the size of JDK 25.0.1 is 383MB.

By using `jlink` we have created a custom JDK that is approximately 1/7 the size of the full JDK package.

## Task 2: Create the Container Image with the Compact JDK

Copy this Dockerfile and save it as `myDockerfile.jlink`:

```
<copy>
FROM oraclelinux:10
COPY ./jdk-small/ /jdk/

ENV JAVA_HOME=/jdk
ENV PATH="$JAVA_HOME/bin:$PATH"
</copy>
```

Now build the JDK Docker image:

```
<copy>
docker build -f myDockerfile.jlink -t java/jdk:25-ol10.jlink .
</copy>
```

| Command Option | Function |
|----------------|----------|
| `-f myDockerfile.jlink` | Name of the Docker file |
| `-t java/jdk:25-ol10.jlink` | Tags the image |
| `.` | Use the current directory as the build context |

When the build finishes, you can confirm the image with:

```
<copy>
docker image ls | grep jdk
</copy>
```

Example output:

```
java/jdk    25-ol10.jlink    992b7f4045602    42 seconds ago  298MB
```

There are five pieces of information here:

| Output String | Explanation |
|---------------|-------------|
| `java/jdk` | Image repository name |
| `25-ol10.jlink` | Tag |
| `992b7f4045602 ` | Unique truncated image identifier |
| `42 seconds ago` | Time since the image was created |
| `298MB` | Image size |

It is possible to further reduce the image size by choosing a smaller Linux base image. This will be covered in the next lab.

For now, run the container in interactive mode:

```
<copy>
docker run -it --name part3-jlink java/jdk:25-ol10.jlink /bin/bash
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