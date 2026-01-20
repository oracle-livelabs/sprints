# Deploy GoldenGate Free and Oracle AI Database Free on OCI Compute

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with Oracle Database technologies. You will go from beginner to confident user in a short time.

Estimated Time: 25 minutes

## FastLab Introduction

Deploy Oracle GoldenGate Free and Oracle AI Database Free as containers on OCI Compute. GoldenGate enables real-time data replication and change data capture between databases. You'll set up a fully functional environment for data replication scenarios.

This FastLab prepares your environment for real-time data replication scenarios like transaction monitoring, compliance reporting, and live analytics.

### Prerequisites

- An OCI tenancy with permissions to create Compute instances

## Task 1: Create an OCI Compute Instance

Create a Linux compute instance to host the GoldenGate Free and Oracle AI Database Free containers.

1. In the OCI Console, navigate to **Compute > Instances** and click **Create Instance**.

2. Configure the instance:

    | Setting | Value |
    |---------|-------|
    | Name | goldengate-free |
    | Compartment | Your compartment |
    | Image | Oracle Linux 9 |
    | Shape | VM.Standard.E5.Flex (1 OCPU, 16 GB RAM) |

    > Note: 16 GB RAM is recommended to run both database and GoldenGate containers.

3. Under **Networking**, select a public subnet.

4. Under **Add SSH keys**, upload your public SSH key or generate a new key pair. Download the private key if generated.

5. Click **Create** and wait for the instance to reach **Running** state.

6. Note the **Public IP Address** from the instance details page.

## Task 2: Connect and Install Podman

Connect to your instance and install Podman.

1. SSH into your compute instance:

    ```bash
    <copy>
    ssh -i <your-private-key> opc@<public-ip-address>
    </copy>
    ```

2. Update the system packages:

    ```bash
    <copy>
    sudo dnf update -y
    </copy>
    ```

3. Install Podman:

    ```bash
    <copy>
    sudo dnf install -y podman
    </copy>
    ```

4. Verify Podman is installed:

    ```bash
    <copy>
    podman --version
    </copy>
    ```

    You should see output like `podman version 5.x.x`.

## Task 3: Deploy Oracle AI Database Free Container

Pull and run the Oracle AI Database Free container.

1. Pull the Oracle AI Database Free image:

    ```bash
    <copy>
    sudo podman pull container-registry.oracle.com/database/free:latest
    </copy>
    ```

2. Run the Oracle AI Database Free container:

    ```bash
    <copy>
    sudo podman run -d --name oracle-db \
      -p 1521:1521 \
      -e ORACLE_PWD=Welcome1#GG23 \
      container-registry.oracle.com/database/free:latest
    </copy>
    ```

3. Wait for the database to be ready (this takes 2-5 minutes). Check the logs:

    ```bash
    <copy>
    sudo podman logs -f oracle-db
    </copy>
    ```

    Wait until you see `DATABASE IS READY TO USE!` then press `Ctrl+C` to exit the logs.

4. Get the container's IP address for GoldenGate to connect:

    ```bash
    <copy>
    sudo podman inspect oracle-db --format '{{.NetworkSettings.IPAddress}}'
    </copy>
    ```

    Note this IP address (e.g., `10.88.0.x`) - you'll need it for the GoldenGate connection.

    > Note: Both containers run on Podman's internal bridge network. GoldenGate connects to the database using this internal network IP, not the host's public IP. This allows container-to-container communication without exposing the database externally.

## Task 4: Deploy GoldenGate Free Container

Pull and run the GoldenGate Free container.

1. Pull the GoldenGate Free image:

    ```bash
    <copy>
    sudo podman pull container-registry.oracle.com/goldengate/goldengate-free:latest
    </copy>
    ```

2. Run the GoldenGate Free container:

    ```bash
    <copy>
    sudo podman run -d --name goldengate-free \
      -p 80:80 \
      -p 443:443 \
      -e OGG_ADMIN=oggadmin \
      -e OGG_ADMIN_PWD=Welcome1#GG23 \
      -e OGG_DEPLOYMENT=Deployment \
      container-registry.oracle.com/goldengate/goldengate-free:latest
    </copy>
    ```

3. Verify the container is running:

    ```bash
    <copy>
    sudo podman ps
    </copy>
    ```

    You should see both `oracle-db` and `goldengate-free` containers in the list.

4. Wait approximately 2 minutes for GoldenGate services to fully start. Check the logs:

    ```bash
    <copy>
    sudo podman logs goldengate-free
    </copy>
    ```

    Look for the "The deployment is READY" message.

## Task 5: Configure Network Access

Open ports 80 and 443 on both the compute instance firewall and OCI Security List.

1. On the compute instance, open the GoldenGate and database ports in the firewall:

    ```bash
    <copy>
    sudo firewall-cmd --permanent --add-port=80/tcp
    sudo firewall-cmd --permanent --add-port=443/tcp
    sudo firewall-cmd --permanent --add-port=1521/tcp
    sudo firewall-cmd --reload
    sudo firewall-cmd --list-ports
    </copy>
    ```

    Verify that `80/tcp`, `443/tcp`, and `1521/tcp` appear in the output.

    > Note: Port 1521 allows you to connect to the database using desktop tools like SQL Developer.

2. In the OCI Console, navigate to **Networking > Virtual Cloud Networks**.

3. Click on your VCN, then click on your **Public Subnet**.

4. Click on the **Security List** attached to the subnet.

5. Click **Add Ingress Rules** and add:

    | Setting | Value |
    |---------|-------|
    | Source CIDR | 0.0.0.0/0 (or your IP for security) |
    | Destination Port Range | 80,443,1521 |
    | Description | GoldenGate Console and Database |

6. Click **Add Ingress Rules**.

## Task 6: Access GoldenGate Console

Verify you can access the GoldenGate web console.

1. Open a browser and navigate to:

    ```
    https://<your-compute-public-ip>
    ```

2. Accept the self-signed certificate warning.

3. Log in with:

    | Field | Value |
    |-------|-------|
    | Username | oggadmin |
    | Password | Welcome1#GG23 |

4. You should see the GoldenGate Service Manager console with the "Deployment" deployment listed.

    ![GoldenGate Console](./images/gg-console.png " ")

You now have both Oracle AI Database Free and GoldenGate Free running on your compute instance. Proceed to the Transaction Monitoring FastLab to configure real-time replication.

## Summary

You have deployed:

| Component | Container Name | Port | Purpose |
|-----------|---------------|------|---------|
| Oracle AI Database Free | oracle-db | 1521 | Source and target database |
| GoldenGate Free | goldengate-free | 80, 443 | Replication engine |

## Signature Workshop

Ready to dive deeper? This workshop provides comprehensive GoldenGate training.

👉 [GoldenGate Microservices on Marketplace](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=585)

## Learn More

* [GoldenGate Free Documentation](https://docs.oracle.com/en/middleware/goldengate/free/)
* [Oracle AI Database Free Documentation](https://docs.oracle.com/en/database/oracle/oracle-database-free/)
* [GoldenGate Free Container Image](https://container-registry.oracle.com/ords/ocr/ba/goldengate/goldengate-free)
* [Oracle AI Database Free Container Image](https://container-registry.oracle.com/ords/ocr/ba/database/free)

## Acknowledgements
* **Author** - Oracle LiveLabs Team
* **Last Updated By/Date** - Oracle LiveLabs, January 2026
