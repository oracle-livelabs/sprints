# Deploy Litmus Chaos on OKE using Oracle Resource Manager

## Introduction

Oracle Kubernetes Engine (OKE) is a managed Kubernetes service on Oracle Cloud Infrastructure (OCI). It provides highly available Kubernetes control planes, managed worker node pools, and native integration with OCI networking, load balancers, identity, and observability services.

Litmus Chaos is an open source chaos engineering platform for Kubernetes. It helps teams validate application resiliency by running controlled chaos experiments, such as deleting pods, introducing network delays, or stressing CPU and memory, while observing whether applications recover as expected.

This Terraform stack provisions an OKE cluster and installs Litmus Chaos on it by using the Litmus Helm chart.

## Objectives

- Deploy an enhanced OKE cluster and the required OCI networking resources.
- Install Litmus Chaos on OKE using Oracle Resource Manager (ORM).
- Expose the Litmus frontend by using an OCI load balancer.
- Show a basic usage example by running a pod-level chaos experiment against a sample workload.

## Prerequisites

- Active OCI tenancy.
- A compartment where the resources will be created.
- An OCI user with sufficient privileges to create and manage the required resources, or equivalent least-privilege policies. For example:

  ```text
  allow group <group-name> to manage orm-stacks in compartment <compartment-name>
  allow group <group-name> to manage orm-jobs in compartment <compartment-name>
  allow group <group-name> to manage cluster-family in compartment <compartment-name>
  ```

- SSH public key. The ORM stack schema requires this input.
- Kubernetes version supported by OKE in the selected region.
- Browser access to the Litmus frontend load balancer after deployment.
- Optional, for the usage example:
  - OCI Cloud Shell or a workstation with OCI CLI and `kubectl` installed.
  - Permission to generate a kubeconfig for the OKE cluster.

## Task 1: Deploy Litmus Chaos on OKE using Oracle Resource Manager

1. Clone or download [this](https://github.com/oracle-devrel/oci-automation-hub/releases/download/litmus-chaos-on-oke-sample/litmus-chaos-on-oke-sample.zip) repository.

2. In the OCI Console, create a Resource Manager stack:

   - Open the navigation menu and go to **Developer Services** > **Resource Manager** > **Stacks**.
   - Click **Create stack**.
   - Select **My configuration**.
   - In the **My configuration** section, select **Folder**.
   - Upload the folder that contains these Terraform files.
   - Give the stack a meaningful name, for example `litmus-on-oke`.
   - Choose the compartment where the stack metadata should be stored.
   - Click **Next**.

3. Configure stack variables:

   - Choose the compartment where the OKE and networking resources will be created.
   - Select the Kubernetes version.
   - Provide your SSH public key.
   - Click **Next**.

4. Review the stack configuration.

5. Select **Run apply** and click **Create**.

6. Wait for the apply job to finish. The stack creates:

   - VCN, subnets, route/security resources, and network security groups.
   - An enhanced OKE cluster named `litmus`.
   - A 3-node OKE node pool named `litmus-pool`.
   - A Kubernetes namespace named `litmus`.
   - A Helm release named `litmus` from `https://litmuschaos.github.io/litmus-helm/`.
   - A Kubernetes `LoadBalancer` service for the Litmus frontend.

7. Record the stack outputs:

   - `litmus_namespace` - namespace where Litmus is installed.
   - `litmus_release` - Helm release name.
   - `litmus_frontend_load_balancer_ip` - public IP address of the Litmus frontend service.

   > **Note:** The load balancer IP can take several minutes to become available. If the output is `null`, wait a few minutes and run a refresh/apply job again, or inspect the Kubernetes service after generating a kubeconfig.

## Task 2: Access the Litmus Chaos portal

1. Open the Litmus frontend in a browser:

   ```text
   http://<litmus_frontend_load_balancer_ip>:9091
   ```

2. Sign in to Litmus ChaosCenter.

   > **Note:** Many Litmus Chaos chart versions use `admin` / `litmus` as the initial credentials. If your deployed version prompts for a different setup flow, follow the instructions shown in the portal. Change the default password after the first login.

3. Close the greeting pop-up that suggests to enable chaos environment.

4. On the left-side menu, click **Environments** and then **New Environment**. Choose a name for the environment, select **Production** and then click **Save**.

5. Generate a kubeconfig for the OKE cluster from OCI Cloud Shell or a workstation with OCI CLI configured.
  Find the cluster in the OCI Console under **Developer Services** > **Kubernetes Clusters (OKE)** > `litmus`.
  On this page click **Actions** > **Access cluster** and choose the way you want to connect (cloud shell or local machine).
  
6. In LitmusChaos portal enable chaos:
     - Select the new environment and then click **Enable Chaos**
     - In the new window, fill in required data, e.g.:
       - Name: local
       - Chaos Components Installation: Cluster-wide access
       - Installation Location (Namespace): litmus
       - Service Account Name: litmus
     - Download the yaml file.
       
7. Apply the downloaded yaml file:
   - go to a shell where you configured kube config and apply the yaml file, e.g.:
     ```bash
     kubectl apply -f local-litmus-chaos-enable.yml
     ```
   - in ChaosCenter dashboard wait for the cluster to become `CONNECTED`

## Task 3: Run a basic chaos experiment

The following example deploys an `nginx` workload and runs a pod-delete chaos experiment against it.

1. Create a sample workload:

   ```bash
   kubectl create namespace chaos-demo
   kubectl -n chaos-demo create deployment nginx --image=docker.io/nginx --replicas=3
   kubectl -n chaos-demo expose deployment nginx --port=80
   kubectl -n chaos-demo get pods -l app=nginx
   ```
2. In the ChaosCenter dashboard, create a new probe

   - Go to `Resilience probes`.
   - Click `New probe`
   - Select `Command probe` as the type
   - Configure the probe as follows:
       - Name: `nginx-probe`
       - Timeout: 10s
       - Interval: 1s
       - Attempt: 1
       - Command: `kubectl get pods -n chaos-demo | grep nginx | grep Running | wc -l`
       - Type: Int
       - Comparison Criteria: >
       - Value: 2
2. In the ChaosCenter dashboard, create and run a pod-delete experiment:

   - Open the Litmus project.
   - Choose the OKE chaos infrastructure or agent.
   - Select the `pod-delete` experiment from the Litmus ChaosHub.
   - Set the target namespace to `chaos-demo`.
   - Set the application label to `app=nginx`.
   - Use a short duration for the first run, for example 30 seconds.
   - Add the probe configured above
   - Start the experiment.

3. Watch the workload while the experiment runs:

   ```bash
   kubectl -n chaos-demo get pods -w
   ```

   During the experiment, one or more pods should be terminated and recreated. After the experiment completes, the deployment should return to the desired state:

   ```bash
   kubectl -n chaos-demo get deployment nginx
   ```

## Task 4: Clean up

1. If you created the sample workload, delete it:

   ```bash
   kubectl delete namespace chaos-demo --ignore-not-found
   ```

2. Destroy the OCI resources created by the Terraform stack:

   - Go to **Developer Services** > **Resource Manager** > **Stacks**.
   - Select the stack you created.
   - Click **Destroy**.
   - Review the destroy job and confirm.

3. Wait for the destroy job to complete successfully.


## Learn More

*(optional - include links to docs, white papers, blogs, etc)*

* [Litmus tutorial](https://docs.litmuschaos.io/docs/introduction/what-is-litmus)
* [OKE docs](https://docs.oracle.com/en-us/iaas/Content/ContEng/home.htm)

## Acknowledgements
* **Author** - <Daniel Dinu, Principal Cloud Architect>
* **Last Updated By/Date** - <Daniel Dinu,  June 2026>
