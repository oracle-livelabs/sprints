# Build a Minimal JDK Runtime with Multi-Stage Docker

Duration: 7 minutes

[Building a Minimal JDK Runtime with Multi-Stage Docker](videohub:1_xvf8prnw:medium)

## Introduction

This tutorial covers how to build a minimal Java runtime (only the modules you need) in one stage, then copy just that runtime into a tiny final image. This keeps the production image small, faster to pull, and with a reduced attack surface.

This tutorial uses the Oracle Linux 10 container images available from [Oracle Container Registry](https://container-registry.oracle.com).

## Task 1: Create the Dockerfile

The process of pulling the Linux base image, downloading and extracting the JDK bundle, and reducing the JDK's size with `jlink` can be automated with a Dockerfile. This is a two-stage process. The first is to setup the builder image and do the heavy work, and the second is to build the final runtime image.

This section first presents the complete Dockerfile to use, and then explains each line of the file after.

Copy this Dockerfile and save it as `myDockerfile.auto`:

```
<copy>
FROM container-registry.oracle.com/os/oraclelinux:10 as builder
RUN dnf -y install --setopt=install_weak_deps=False binutils wget && dnf -y clean all && rm -rf /var/cache/dnf
WORKDIR /opt/app

RUN wget https://download.oracle.com/java/25/latest/jdk-25_linux-x64_bin.tar.gz && tar xzvf jdk-25_linux-x64_bin.tar.gz && rm -f jdk-25_linux-x64_bin.tar.gz
RUN jdk-25.0.1/bin/jlink --output './jdk-small' --add-modules java.base --strip-debug

FROM container-registry.oracle.com/os/oraclelinux:10-slim
WORKDIR /opt/app
COPY --from=builder /opt/app/jdk-small/ /jdk/

ENV JAVA_HOME=/jdk
ENV PATH="$JAVA_HOME/bin:$PATH"
</copy>
```

This Dockerfile performs the following tasks in one pass:

1. Pulls an Oracle Linux container image and uses it as the builder stage
2. Downloads and extracts the Oracle JDK in the builder environment
3. Reduces the JDK size using `link`
4. Switches to a slim base image for production
5. Copies the customized, compact JDK into the slim image

### Detailed Explanation

This section explains each line of `myDockerfile.auto`.

```
<copy>
FROM container-registry.oracle.com/os/oraclelinux:10 as builder
</copy>
```

Sets Oracle Linux 10 as a stage builder. The file will build artifacts here and copy only what is needed into the final image.

```
<copy>
RUN dnf -y install --setopt=install_weak_deps=False binutils wget && dnf -y clean all && rm -rf /var/cache/dnf
</copy>
```

Installs required build tools using `dnf`. `binutils` provides essential binary tools that `jlink` may rely on. `wget` downloads the JDK. `--setopt=install_weak_deps=False` avoids pulling uneccessary packages. `dnf -y clean all && rm -rf /var/cache/dnf` cleans the `dnf` metadata and caches in the same layer, to keep the image small.

```
<copy>
WORKDIR /opt/app
</copy>
```

Sets the working directory for the build actions.

```
<copy>
RUN wget https://download.oracle.com/java/25/latest/jdk-25_linux-x64_bin.tar.gz && tar xzvf jdk-25_linux-x64_bin.tar.gz && rm -f jdk-25_linux-x64_bin.tar.gz
</copy>
```

Downloads the latest JDK 25 archive, extracts it, then removes the tarball to avoid leaving large temporary files in the layer.

```
<copy>
RUN jdk-25.0.1/bin/jlink --output './jdk-small' --add-modules java.base --strip-debug
</copy>
```

Uses `jlink` from the extracted JDK to produce a minimized Java runtime with only the `java.base` module. `--strip-debug` instructs `jlink` to remove debug information from the resulting image. The result is a small runtime in the `./jdk-small` directory.

```
<copy>
FROM container-registry.oracle.com/os/oraclelinux:10-slim
</copy>
```

Switches to using the slim Oracle Linux 10 image for a smaller footprint.

```
<copy>
WORKDIR /opt/app
</copy>
```

Sets the working directory for the runtime image.

```
<copy>
COPY --from=builder /opt/app/jdk-small/ /jdk/
</copy>
```

Copies only the minimized runtime from the builder state into `./jdk`, avoiding all build tools and downloads.

```
<copy>
ENV JAVA_HOME=/jdk
</copy>
```

Points the `JAVA_HOME` environment variable to the custom runtime.

```
<copy>
ENV PATH="$JAVA_HOME/bin:$PATH"
</copy>
```

Puts the custom runtime's `bin` directory first on `PATH` so Java and related tools are immediately available.

### Key Takeaways

- Multi-stage builds let you keep the final image lean by doing heavy work in a separate builder stage.
- Cleaning package caches and removing temporary artifacts in the same RUN layer prevents bloat
- `jlink` enables you to ship only the Java modules you need, significantly shrinking the runtime
- Using a slim base image further reduces pull times and final image size

## Task 2: Build the JDK Container Image

Next, build the JDK container image:

```
<copy>
docker build -f myDockerfile.auto -t java/jdk:25-ol10-auto .
</copy>
```

| Command Option | Function |
|----------------|----------|
| `-f myDockerfile.auto` | Name of the Docker file |
| `-t -java/jdk:25-ol10-auto` | Tags the image |
| `.` | Use the current directory as the build context |

When the build has completed, confirm the image:

```
<copy>
docker image ls |grep jdk
</copy>
```

Example output:

```
java/jdk    25-ol10-auto    289b981618f4    41 seconds ago  150MB
```

There are five pieces of information here:

| Output String | Explanation |
|---------------|-------------|
| `java/jdk` | Image repository name |
| `25-ol10-auto` | Tag* |
| `289b981618f4` | Unique truncated image identifier |
| `41 seconds ago` | Time since the image was created |
| `150MB` | Image size |

Next, run the container in interactive mode:

```
<copy>
docker run -it --name part4-auto java/jdk:25-ol10-auto /bin/bash
</copy>
```

This `docker run` command includes the following options

| Docker Run Command Option | Function |
|---------------------------|----------|
| `-it` | Allows for interactive sessions |
| `--name` | Assigns a custom name to the container for easier reference |
| `java/jdk:25-ol10-auto` | Name of the Docker image to use as a template |
| `/bin/bash` | A command to run inside the container (optional) |

When the container is running, confirm the JDK version:

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

Confirm the available modules:

```
<copy>
java --list-modules
</copy>
```

The output shows only the base module:

```
java-base@25.0.1
```