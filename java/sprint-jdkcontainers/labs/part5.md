# Part 5: Building a JDK Container Image Using the Official Oracle JDK Container Image

Duration: 8 minutes

[Building a Minimal JDK Runtime with Multi-Stage Docker](videohub:1_j22okrul:medium)

## Introduction

This tutorial covers process of building a JDK container image using the official Oracle JDK container image.

The first section demonstrates creating a Dockerfile that:
- Pulls the Oracle JDK container image and uses it as the builder stage
- Customizes the JDK in the builder environment to produce a minimal runtime
- Switches to a smaller Oracle Linux slim base for production
- Copies only the custom runtime from the builder into the final image
- Builds the final container image

The second section shows how to include a demo application in an container image.

## Build the JDK Docker Image Using the Official Image

Copy this Dockerfile and save it as `myDockerfile.ocr`:

```
<copy>
FROM container-registry.oracle.com/java/jdk-no-fee-term:latest as builder
RUN dnf -y install --setopt=install_weak_deps=False binutils && dnf -y clean all && rm -rf /var/cache/dnf
WORKDIR /opt/app

RUN jlink --output './jdk-small' --add-modules java.base --strip-debug

FROM container-registry.oracle.com/os/oraclelinux:10-slim
WORKDIR /opt/app
COPY --from=builder /opt/app/jdk-small/ /jdk/

ENV JAVA_HOME=/jdk
ENV PATH="$JAVA_HOME/bin:$PATH"
</copy>
```

`FROM container-registry.oracle.com/java/jdk-no-fee-term:latest as builder` uses the latest JDK available under NFTC as the build environment. It contains the full JDK and tools like `jlink` that we need to create a custom runtime

Next, build the JDK Docker image:
```
<copy>
docker build -f myDockerfile.ocr -t java/jdk:25-ol10-ocr .
</copy>
```

| Command Option | Function |
|----------------|----------|
| `-f myDockerfile.ocr` | Name of the Docker file |
| `-t java/jdk:25-ol10-ocr` | Tags the image |
| `.` | Use the current directory as the build context |


When the build has finished, confirm the image:
```
<copy>
docker image ls |grep jdk
</copy>
```
Example output:
```
java/jdk        25-ol10-ocr     2e91b032df29        37 Seconds ago      150MB
```
Output explanation:

| Output String | Explanation |
|---------------|-------------|
| `java/jdk` | Image repository name |
| `25-ol10-ocr` | Tag |
| `2e91b032df29` | Unique truncated image identifier |
| `37 Seconds ago` | Time since the image was created |
| `150MB` | Image size |

Run the container and confirm the Java version:
```
<copy>
docker run java/jdk:25-ol10-ocr java -version
</copy>
```
Example output:
```
java version "25.0.1" 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 25.0.1+8-LTS-27)
Java HotSpot (TM) 64-Bit Server VM (build 25.0.1+8-LTS-27, mixed mode)
```

To list available modules:
```
<copy>
docker run java/jdk:25-ol10-ocr java --list-modules
</copy>
```
Example output:
```
java.base@25.0.1
```

## Including a Java Application in a JDK Container Image

This section covers how to include a Java application in a JDK container,  using a sample application that prints a greeting and today's date. Copy the sample application below and save it as `Demo.java`:

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Demo {
    public static void main(String[] args) {
        String name = (args.length > 0) ? args[0] : System.getProperty("user.name", "there");
        System.out.printf("Hello, %s!%n", name);
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("EEEE, MMM d, uuuu");
        System.out.println("Today is: " + LocalDate.now().format(fmt));
   }
}
```

Also create a new Dockerfile, `myDockerfile.reuse`:
```
<copy>
FROM container-registry.oracle.com/java/jdk-no-fee-term:latest
RUN dnf -y update && dnf -y clean all && rm -rf /var/cache/dnf

COPY ./Demo.class /home
</copy>
```

Build the JDK Docker image:
```
<copy>
docker build -f myDockerfile.reuse -t java/jdk:25-ol10-reuse .
</copy>
```
Confirm the image:
```
<copy>
docker image ls |grep jdk
</copy>
```
Example output:
```
java/jdk        25-ol10-reuse     9c101186faa9        27 Seconds ago      850MB
```

Output explanation:

| Output String | Explanation |
|---------------|-------------|
| `java/jdk` | Image repository name |
| `25-ol10-reuse` | Tag |
| `9c101186faa9` | Unique truncated image identifier |
| `27 Seconds ago` | Time since the image was created |
| `850MB` | Image size |

Now run `Demo.java` from the container:
```
<copy>
docker run java/jdk:25-10-ol-reuse java -cp "./home" Demo Balchandra
</copy>
```
Example output:
```
Hello, Balchandra!
Today is: Sunday, Dec 28, 2025
```

## Oracle JDK Container Examples

[This GitHub repository](https://github.com/aureliogrb/docker-images/tree/main/OracleJava)contains sample container configurations to facilitate installation and environment setup for DevOps users; instructions for creating the Oracle Java base image, sample Docker files for JDK 8, JDK 11, JDK 17, JDK 21, and JDK 25; example container configurations to streamline installation and environment setup for DevOps workflows.

Explore this repository to see practical patterns and adapt them to your projects.