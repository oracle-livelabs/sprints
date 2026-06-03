# Deploy Chaos Mesh on OKE using Oracle Resource Manager

## Introduction

Oracle Kubernetes Engine (OKE) is the managed Kubernetes service on Oracle Cloud Infrastructure (OCI). It provides a managed Kubernetes control plane, worker node pools, and native integration with OCI networking and load balancing.

Chaos Mesh is an open source chaos engineering platform for Kubernetes. It lets you run controlled experiments against Kubernetes workloads and observe how applications behave under failures or resource pressure.

This Terraform stack deploys an OKE cluster and installs Chaos Mesh on it. The included basic usage example deploys `nginx`, configures an HPA, and runs a Chaos Mesh `StressChaos` memory experiment.

## Objectives

- Deploy an enhanced OKE cluster and the required OCI networking resources.
- Install Chaos Mesh on OKE using Oracle Resource Manager (ORM).
- Show a basic usage example with an `nginx` deployment, HPA, and `StressChaos` experiment.

## Prerequisites

- Access to an active OCI tenancy.
- A compartment where the resources will be created.
- Sufficient privileges to create and manage Resource Manager stacks/jobs, OKE, networking, compute, block volume, and load balancer resources. Example policies:

  ```text
  allow group <group-name> to manage orm-stacks in compartment <compartment-name>
  allow group <group-name> to manage orm-jobs in compartment <compartment-name>
  allow group <group-name> to manage cluster-family in compartment <compartment-name>
  ```

- A machine with OCI CLI configured and `kubectl` installed.
- SSH public key. The ORM stack schema requires this input.

## Task 1: Deploy Chaos Mesh on OKE using Oracle Resource Manager

1. Download the GitHub [release](https://github.com/oracle-devrel/oci-automation-hub/releases/download/chaos-mesh-on-oke-sample/chaos-mesh-on-oke-sample.zip) archive as a `.zip` file.

2. Unzip the archive on your local machine.

3. In the OCI Console, create a Resource Manager stack:

   - Open the navigation menu and go to **Developer Services** > **Resource Manager** > **Stacks**.
   - Click **Create stack**.
   - Select **My configuration**.
   - In the **My configuration** section, select **Folder**.
   - Upload the directory from the unzipped archive.
   - Give the stack a meaningful name, for example `chaos-mesh-on-oke`.
   - Choose the compartment where the stack metadata should be stored.
   - Click **Next**.

4. Configure stack variables:

   - Choose the compartment where the OKE and networking resources will be created.
   - Select the Kubernetes version.
   - Provide your SSH public key.
   - Keep **Enable Metrics Server** and **Enable cert-manager** enabled. They are required for the HPA example.
   - Choose the Chaos Mesh dashboard service type. `ClusterIP` is recommended.
   - Click **Next**.

5. Review the stack configuration.

6. Select **Run apply** and click **Create**.

7. Wait for the apply job to finish. The stack creates:

   - OCI networking resources: VCN, subnets, gateways, route/security resources, and network security groups.
   - An enhanced OKE cluster named `chaosmesh`.
   - A 3-node OKE node pool named `chaosmesh-pool`.
   - OKE add-ons: cert-manager and Metrics Server.
   - A Kubernetes namespace named `chaos-mesh`.
   - Chaos Mesh resources, via helm, installed in `chaos-mesh` namespace.

## Task 2: Access the OKE cluster

1. In the OCI Console, open **Developer Services** > **Kubernetes Clusters (OKE)**.

2. Select the cluster named `chaosmesh`.

3. Click **Actions** drop-down menu and then click **Access Cluster**.

4. Copy the OCI CLI command shown in the console.

5. Paste and run the command in a shell on a machine where OCI CLI and kubectl are configured.

6. Confirm that `kubectl` can access the cluster:

   ```bash
   kubectl get nodes
   ```

## Task 3: Access the Chaos Mesh web interface

1. In the same shell, start port forwarding and leave this command running:

   ```bash
   kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333
   ```

2. Open the Chaos Mesh dashboard in a browser:

   ```text
   http://localhost:2333
   ```

3. In another shell, generate a login token:

   ```bash
   kubectl create token chaos-dashboard -n chaos-mesh
   ```

4. In the web interface, give the token a name, for example `chaos`, and paste the token value generated above. Then click **Submit**

## Task 4: Run a basic usage example with nginx, HPA, and StressChaos

The example uses the Kubernetes manifests included in **chaos-mesh-on-oke-sample** directory:

- `deployment.yaml` deploys `nginx`.
- `hpa.yaml` creates the HPA. This is the Horizontal Pod Autoscaler (HPA) manifest.
- `stresschaos.yaml` creates the Chaos Mesh memory stress experiment.

1. Open a new shell and change to the Terraform directory from the unzipped archive:

   ```bash
   cd <unzipped-archive>
   ```

2. Create the `nginx` deployment:

   ```bash
   kubectl apply -f deployment.yaml
   kubectl rollout status deployment/nginx -n default
   kubectl get pods -n default -l app=nginx
   ```

3. Configure the HPA:

   ```bash
   kubectl apply -f hpa.yaml
   kubectl get hpa nginx-hpa -n default
   ```

4. Create the Chaos Mesh stress experiment:

   ```bash
   kubectl apply -f stresschaos.yaml
   kubectl get stresschaos nginx-mem-1 -n default
   ```

5. Observe the deployment while the experiment runs:

   ```bash
   kubectl get deployment nginx -n default -w
   ```

6. In another shell, observe the HPA:

   ```bash
   kubectl get hpa nginx-hpa -n default -w
   ```

7. Optional: watch the nginx pods directly:

   ```bash
   kubectl get pods -n default -l app=nginx -w
   ```

8. Expected behavior:

   - Chaos Mesh injects memory stress into the `nginx` pod for the duration defined in `stresschaos.yaml`.
   - The HPA detects increased memory consumption.
   - The number of `nginx` pods increases.
   - After the experiment ends and the HPA stabilization period passes, the deployment scales down again.

## Task 5: Clean up

1. Delete the Chaos Mesh stress experiment:

   ```bash
   kubectl delete -f stresschaos.yaml --ignore-not-found=true
   ```

2. Delete the HPA:

   ```bash
   kubectl delete -f hpa.yaml --ignore-not-found=true
   ```

3. Delete the `nginx` deployment:

   ```bash
   kubectl delete -f deployment.yaml --ignore-not-found=true
   ```

4. Stop the Chaos Mesh dashboard port-forward command with `Ctrl+C`.

5. Destroy the OCI resources created by the Terraform stack:

   - Go to **Developer Services** > **Resource Manager** > **Stacks**.
   - Select the stack you created.
   - Click **Destroy**.
   - Review the destroy job and confirm.

6. Wait for the destroy job to complete successfully.



## Learn More


* [Chaos MEsh docs](https://chaos-mesh.org/docs/)
* [OKE docs](https://docs.oracle.com/en-us/iaas/Content/ContEng/home.htm)

## Acknowledgements

* **Author** - Daniel Dinu, Principal Cloud Architect
* **Last Updated By/Date** - Daniel Dinu,  June 2026
