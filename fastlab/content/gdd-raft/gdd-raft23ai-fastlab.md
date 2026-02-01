# Oracle Globally Distributed AI Database: Raft Replication FastLab

Welcome to this **LiveLabs FastLab** workshop.

This FastLab guides you through a condensed, hands-on tour of Oracle Globally Distributed AI Database (GDD) Raft replication. You will validate the provided sandbox, experience the demo application, and observe automatic shard role transitions—all within minutes.

Estimated Time: 30 minutes

## FastLab Introduction

### Prerequisites

- Oracle Cloud tenancy (Free Tier, Paid, or LiveLabs reservation)
- Provisioned Raft replication sandbox from the companion workshop stack

### Video Walkthrough

[Raft FastLab Walkthrough](videohub:1_c5e1jhps)

## Task 1: Confirm the Remote Desktop Environment

1. Launch your LiveLabs desktop session. By default, two browser windows open: the Introduction on the left and the **RAFT Replication LiveLabs Demo: All Customers List** app on the right.

    ![LiveLabs desktop layout](./images/default_windows_raft_livelabs.png " ")

2. If the windows are not visible, open a terminal from the desktop (Activities → Terminal) and re-run the helper script:

    ```bash
    <copy>
    .livelabs/init_ll_windows.sh
    </copy>
    ```

3. Wait for the browser tabs to reload, then verify that both the overview page and the application tab are active.

## Task 2: Explore the Raft-based replication - Demo UI Application

1. Focus the **RAFT-based Replication LiveLabs Demo: All Customers List** tab or navigate to `http://localhost:8080` if needed.

    ![Customers list](./images/all_customer_after_inital_workload.png " ")

2. Review the pagination controls and the total customer count. The dataset is queried through the catalog service, demonstrating proxy routing across shards.

3. Use the **Add Customer** link to create a sample customer. Confirm that the list refreshes automatically and the total count increases.

4. Optionally exercise **Update** and **Delete** to experience CRUD operations sustained by Raft replication.

## Task 3: Observe Automatic Shard Failover

1. From any customer row, open **More Details** in a new tab to inspect the current shard leader and replication unit for that record.

2. Use the page controls to shut down the leader shard (for example, **Shutdown Shard2**) and wait for the operation to finish.

    ![Shard leadership change](./images/more_details_after_shutdown_shard2.png " ")

3. Monitor the **More Details** view. Raft automatically elects a new leader and re-routes traffic with no manual intervention needed.

4. Return to the main list and continue browsing or performing CRUD operations to validate application continuity.

5. When you are ready, start the shard again with the matching **Start Shard** control to restore full capacity.

## Signature Workshop

Ready to explore the complete environment build-out? Continue with the full workshop here: [Use Raft Replication with Distributed Database for Resilient Never Down Apps](https://livelabs.oracle.com/pls/apex/f?p=133:180:::::wid:3772).

## Learn More

- [Raft Replication Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/shard/raft-replication.html)
- [Oracle Globally Distributed AI Database Overview](https://www.oracle.com/database/distributed-database/)

## Acknowledgements
- **Authors** – Ajay Joshi, Oracle Globally Distributed AI Database Product Management
- **Contributors** – Edgard Ambler, Shefali Bhargava, Carmen Berdant 
- **Last Updated By/Date** – Ajay Joshi, Oracle Globally Distributed AI Database Product Management, January 2026
