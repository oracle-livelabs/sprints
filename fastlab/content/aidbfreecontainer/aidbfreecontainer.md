# Deploy Oracle AI Database Free Container with Podman

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with Oracle Database technologies. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction

Deploy Oracle AI Database Free as a container on your local machine using Podman. You'll have a fully functional Oracle Database running in minutes—perfect for development, testing, and learning Oracle's AI capabilities.

This FastLab covers installation on both macOS and Windows, giving you a local Oracle Database environment without complex setup procedures.

### Prerequisites

- **macOS** or **Windows** machine
- Minimum 8 GB RAM available for the container
- 15 GB free disk space

## Task 1: Install Podman

Podman is a daemonless container runtime that runs Oracle container images. Choose your operating system below.

### Option A: macOS Installation

1. Install Podman using Homebrew:

    ```bash
    <copy>
    brew install podman
    </copy>
    ```

2. Initialize and start the Podman machine:

    ```bash
    <copy>
    podman machine init --cpus 2 --memory 8192
    podman machine start
    </copy>
    ```

    > **Note:** The `--memory 8192` allocates 8 GB RAM to the Podman machine. Adjust based on your available memory.

3. Verify Podman is running:

    ```bash
    <copy>
    podman --version
    podman machine list
    </copy>
    ```

    You should see the Podman version and your machine in "Running" state.

### Option B: Windows Installation

We recommend installing Podman Desktop, which provides a graphical interface and simplifies container management. While there are other ways to install Podman, Podman Desktop handles WSL2 integration automatically and makes troubleshooting easier.

1. Install Podman using Winget in PowerShell:

    ```powershell
    <copy>
    winget install RedHat.Podman
    </copy>
    ```

    Or using [Chocolatey](https://chocolatey.org/install) in an elevated PowerShell:

    ```powershell
    <copy>
    choco install podman-desktop
    </copy>
    ```

2. Initialize and start the Podman machine:

    ```powershell
    <copy>
    podman machine init --cpus 2 --memory 8192
    podman machine start
    </copy>
    ```

3. Open WSL2 for running container commands:

    ```powershell
    <copy>
    wsl
    </copy>
    ```

    > **Note:** All subsequent commands in this lab should be run in WSL2. When using Podman in WSL2, you may need to omit `sudo` depending on your configuration.

4. Verify Podman is running:

    ```bash
    <copy>
    podman --version
    </copy>
    ```

## Task 2: Pull and Run Oracle AI Database Free

Oracle AI Database Free provides a fully-featured Oracle Database at no cost, including AI Vector Search, JSON, Graph, and all enterprise features.

1. Pull the Oracle AI Database Free image:

    ```bash
    <copy>
    podman pull container-registry.oracle.com/database/free:latest
    </copy>
    ```

    > **Note:** The image is approximately 3 GB. Download time depends on your internet connection.

2. Run the Oracle AI Database Free container:

    ```bash
    <copy>
    podman run -d --name oracle-db \
      -p 1521:1521 \
      -e ORACLE_PWD=<your-secure-password> \
      container-registry.oracle.com/database/free:latest
    </copy>
    ```

    > **Important:** Replace `<your-secure-password>` with a strong password. The password must be 8-30 characters, contain at least one uppercase letter, one lowercase letter, and one digit. Avoid special characters like `@`, `$`, or `!` as they may cause issues in shell commands.

    | Parameter | Description |
    |-----------|-------------|
    | `-d` | Run in detached (background) mode |
    | `--name oracle-db` | Name the container for easy reference |
    | `-p 1521:1521` | Map database port to localhost |
    | `-e ORACLE_PWD` | Set the SYS and SYSTEM password |

3. Wait for the database to initialize (2-5 minutes). Monitor the logs:

    ```bash
    <copy>
    podman logs -f oracle-db
    </copy>
    ```

    Wait until you see `DATABASE IS READY TO USE!` then press `Ctrl+C` to exit the logs.

4. Verify the container is running:

    ```bash
    <copy>
    podman ps
    </copy>
    ```

    You should see `oracle-db` in the container list with status "Up".

## Task 3: Connect to the Database

Connect to your Oracle AI Database Free using SQL*Plus from within the container.

1. Connect to the container's SQL*Plus (replace `<your-secure-password>` with the password you set in Task 2):

    ```bash
    <copy>
    podman exec -it oracle-db sqlplus sys/<your-secure-password>@FREEPDB1 as sysdba
    </copy>
    ```

2. Set up SQL*Plus formatting for better output readability:

    ```sql
    <copy>
    SET LINESIZE 150
    SET PAGESIZE 50
    SET WRAP OFF
    </copy>
    ```

3. Verify the database version:

    ```sql
    <copy>
    SELECT banner_full FROM v$version;
    </copy>
    ```

4. Check available AI Database features:

    ```sql
    <copy>
    SELECT * from v$option;
    </copy>
    ```

5. Create a test table to confirm everything works:

    ```sql
    <copy>
    CREATE TABLE test_table (id NUMBER, name VARCHAR2(100));
    INSERT INTO test_table VALUES (1, 'Oracle AI Database Free');
    SELECT * FROM test_table;
    </copy>
    ```

6. Exit SQL*Plus:

    ```sql
    <copy>
    EXIT
    </copy>
    ```

## Task 4: Connect from External Tools

Connect to the database from SQL Developer, VS Code, or other tools using these connection details.

| Setting | Value |
|---------|-------|
| Host | localhost |
| Port | 1521 |
| Service Name | FREEPDB1 |
| Username | SYS (as SYSDBA) or SYSTEM |
| Password | The password you set in Task 2 |

**JDBC Connection String:**

```
jdbc:oracle:thin:@localhost:1521/FREEPDB1
```

**Easy Connect String:**

```
localhost:1521/FREEPDB1
```

You now have Oracle AI Database Free running locally, ready for development and testing.

## Appendix: Managing Your Container

Common commands for managing your Oracle AI Database Free container.

**Stop the container:**

```bash
<copy>
podman stop oracle-db
</copy>
```

**Start the container again:**

```bash
<copy>
podman start oracle-db
</copy>
```

**View container logs:**

```bash
<copy>
podman logs oracle-db
</copy>
```

**Remove the container (data will be lost):**

```bash
<copy>
podman rm -f oracle-db
</copy>
```

**Remove the container image:**

```bash
<copy>
podman rmi container-registry.oracle.com/database/free:latest
</copy>
```

## Appendix: Persisting Data with Volumes

To keep your database data across container restarts, use a volume mount.

1. Create a directory for Oracle data:

    ```bash
    <copy>
    mkdir -p ~/oracle-data
    </copy>
    ```

2. Run the container with a volume mount:

    ```bash
    <copy>
    podman run -d --name oracle-db \
      -p 1521:1521 \
      -e ORACLE_PWD=<your-secure-password> \
      -v ~/oracle-data:/opt/oracle/oradata \
      container-registry.oracle.com/database/free:latest
    </copy>
    ```

    > **Note:** Replace `<your-secure-password>` with a strong password following the requirements from Task 2.

    Your database files will now persist in `~/oracle-data` even if the container is removed.

## Signature Workshop

Ready to dive deeper? This workshop provides comprehensive Oracle Database training.

👉 [Database 23ai New Features](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=3950)

## Learn More

* [Oracle AI Database Free Documentation](https://docs.oracle.com/en/database/oracle/oracle-database-free/)
* [Oracle AI Database Free Container Image](https://container-registry.oracle.com/ords/ocr/ba/database/free)
* [Podman Documentation](https://docs.podman.io/)
* [Podman Desktop](https://podman-desktop.io/)
* [Oracle Database 23ai New Features](https://www.oracle.com/database/free/)

## Acknowledgements
* **Author** - Oracle LiveLabs Team
* **Last Updated By/Date** - Oracle LiveLabs, January 2026
