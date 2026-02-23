# Oracle Globally Distributed AI Database: Demo Raft Replication and Failover 

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 30 minutes

## Introduction

Oracle Globally Distributed Database provides built-in fault tolerance with Raft-based replication, a capability that integrates data replication with transaction execution in a Distributed database. Raft-based replication enables fast automatic failover with zero data loss.

![Raft introduction](./images/intro.png " ")

### Objectives
In this workshop, you will gain first-hand experience in utilizing the Raft-based Replication within Oracle Globally Distributed Database.

- To show RAFT-based replications via a sample UI Application.
- Hands-on Lab for RAFT Topology via GDSCTL which can be from a GSM container image deployed in the podman container. GDSCTL is the command-line utility used to manage and configure Oracle Global Data Services (GDS). GSM is Global service manager.
- Exploring the dynamics of Raft.

### Prerequisites
This lab assumes you have:
- An Oracle Free Tier or Paid Cloud account
- Provisioned a vm which will be used in Prerequisites Task1 to prepare this lab environment

### Video Walkthrough

[Demo App for Raft Replication](videohub:1_147isows)


## Task 1: Confirm the Remote Desktop Environment

1. Launch your LiveLabs desktop session. By default, two browser windows open: the Introduction on the left and the **RAFT Replication LiveLabs Demo: All Customers List** app on the right.

    ![LiveLabs desktop layout](./images/task2-scrn-1.png " ")

2. The Home page of the Raft Replication Demo UI Application to view sample customers data populated via running the initial workload:

![<all_customer_after_inital_workload>](./images/task2-scrn-2.png " ")

## Task 2: Observe Automatic Shard Failover

1. Navigate to "All Customers List" page show on the right window and from any customer row, open **More Details** in a new tab to inspect the current shard leader and replication unit for that record. To open **More Details** in a new tab, right click on the "More Details" link and click "Open link in new tab", it will open a page titled with "RAFT 23ai LiveLabs Demo: More Details".

    ![<all_customers_more_details_link>](./images/task3-scrn-1.png " ")

    If you just click on the "More Details" link, it'll open in the same tab. Clicking "Back to Customers List" from "More Details" page brings back to the main page.
    

2. "More Details" tab shows the "Shard Database Name" and Replication Unit (RU#) of the customer record with matching customerId (which is the sharding key). here, "Shard Database Name" can be either "orcl1cdborcl1pdb" (Shard1) or "orcl2cdborcl2pdb" (Shard2) or "orcl3cdb_orcl3pdb" (Shard3).

    ![<more_details_prior_shutdown_shard2>](./images/task3-scrn-2.png " ")

3. You can Shutdown a Shard based on the "Shard Database Name" value. Click only one of the matching shard's links for example, either "Shutdown Shard1" or "Shutdown Shard2" or "Shutdown Shard3".

    When Shard2 is the leader for Replucation Unit (RU#1), click "Shutdown Shard2" link as below:

    ![<shutdown_shard2>](./images/task3-scrn-3.png " ")

4. Monitor the **More Details** view. Raft automatically elects a new leader and re-routes traffic with no manual intervention needed. (it can take around a minute or a few seconds sometime). You will notice that the hovering icon of the "more Details" tab stops and the shard leadership automatically changes. "Shard Database Name" will show new leader shard. For Example, When "orcl1cdb_orcl1pdb" (Shard1) is the new leader for Replucation Unit (RU#1) in the screenshot as below.

    ![<more_details_after_shutdown_shard2>](./images/task3-scrn-4.png " ")

    You can observe that the leadership has automatically moved to another shard, indicating re-routing of the request and switchover of RU to another shard is completed.


## Task 3: Startup the previously shutdown shard

1. As you verified that application kept running while one of the shard was down, now bring that shard back.
   For example, since shard2 was shutdown in a previous Task 1's step 3 earlier, now to bring it back, click the "Start Shard2" link.

    ![<restart_shard2>](./images/task4-scrn-1.png " ")


2. Now all three shards are up and application is running. To restart UI page if you have closed UI browser session, you can re-open itsby http://localhost:8080 on the 2nd window or on a new browser session.

## Conclusion

***Congratulations***, you have successfully completed the FastLab on working with the Oracle Globally Distributed AI Database: Raft-base Replication! In this lab, you discovered how to connect demo UI application for Raft-base replication, browse it contents, shutdown a shard database and still see application working since another shard is service the data for the same Replicaion Units.  With these skills, you’ve built the foundation that how to use Raft-based Replication with Oracle Globally Distributed AI Database for Resilient Never Down Apps.

With these skills, you can now help the team replicate new data faster in backgroud while Application data being served from Oracle Globally Distributed AI Database. Visit our Signature Workshop to see more complex examples and learn even more skills.

## Signature Workshop

Ready to explore the complete environment build-out? Continue with the full workshop here: [Use Raft Replication with Distributed Database for Resilient Never Down Apps](https://livelabs.oracle.com/pls/apex/f?p=133:180:::::wid:3772).

## Learn More

- [Raft Replication Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/shard/raft-replication.html)
- [Oracle Globally Distributed AI Database Overview](https://www.oracle.com/database/distributed-database/)
- [Introduction to Global Data Services](https://docs.oracle.com/en/database/oracle/oracle-database/18/gsmug/intro-global-data-services.html)

## Acknowledgements
- **Authors** – Ajay Joshi, Oracle Globally Distributed AI Database Product Management
- **Contributors** – Edgard Ambler, Shefali Bhargava, Carmen Berdant 
- **Last Updated By/Date** – Ajay Joshi, Oracle Globally Distributed AI Database Product Management, February 2026