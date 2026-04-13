# Introduction

## About this Demo

Modern applications aren't local anymore. They are global and demand an "always-on" architecture. 

**The Challenge**: Users are everywhere. Data access needs to be fast for all users. Outages anywhere affect everyone. The cost of vertical scaling is prohibitive. Maintaining data residency compliance requirements is complex.

**The Fix**: Make your database global.

**Oracle Globally Distributed Database** is one logical database physically distributed across regions or countries with built-in replication, availability, and compliance controls.

An Oracle Globally Distributed Database is a **single logical database** where data is physically partitioned across multiple physical databases, which are called **shards**. All shards concurrently process requests. Shards can be deployed across multiple machines, data centers, regions, or countries. Data in each shard is replicated for survivability. Queries can be parallelized both within and across shards to implement massively parallel analytics.

This is the next generation of Big Data done right. It grows horizontally - just add more shards! It keeps your data where the law requires it.

### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interact with the demo.

<iframe src="globally-distributed-db.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You'll Discover:

The demo walks through the key mechanics and benefits of Oracle Globally Distributed Database:

- **Setup Global Database**: Visualize how a single logical database is deployed across multiple global data centers providing unified access for applications.

- **Distribute Shards**: See how sharding enables distributed scale-out. Data is physically partitioned across shards deployed in different regions. All shards process requests concurrently.

- **Raft Replication**: Experience Active/Active/Active application and data tier across 3 data centers in different countries. Automatic 3-second application failover with zero data loss (RPO=3 seconds, RTO=0) with Raft Replication.

- **Data Sovereignty**: Understand how data can be distributed across multiple clouds and on-premises environments. Customers can choose the deployment option independently for each shard, size shard counts independently, and define the shard HA configuration desired in each deployment location - avoiding cloud lock-in while meeting data residency requirements.

- **Multi-Cloud Deployment**: Move shards online between clouds. Deploy across OCI, Azure, GCP, AWS, and on-premises in the same logical database.

## The Magic Behind GDD - Key Mechanics

Oracle Globally Distributed Database combines three powerful technologies:

1. **Sharding** for distributed scale-out
2. **Raft Replication** for strong consistency and fast failover with quorum-based consensus
3. **Automatic Routing** so apps don't need special logic
4. **Automatic Failover** to replica in under 3 seconds

### How It Works

Tables in your application are categorized as:

- **Sharded Tables**: Customer-related data (Customers, Orders, Line Items) that is distributed across shards based on a sharding key
- **Duplicated Tables**: Reference data (Products) that is replicated to all shards for local access

This architecture enables both horizontal scalability and data locality.

## Designed for Mission Critical & AI Workloads

Oracle Globally Distributed Database:

- **Handles extreme throughput** - Massive write throughput and near-instant consistency with Exascale infrastructure
- **Delivers ultra-low latency reads** - Data is close to users globally
- **Has Vector processing + AI metadata built-in** - Adds hyper-scale and data sovereignty to AI Vector Search and RAG
- **Shards and loads massive vector indexes into memory** for low-latency search
- **Combines vector similarity search with business data queries** in a single distributed request

### Deployment Choice for Global Elasticity:
- Dedicated Exadata Cloud Infrastructure
- Serverless Exascale infrastructure
- Automatic distribution of compute and storage

## What Makes Globally Distributed Database Awesome?

### Key Benefits:

✅ **True global active-active-active database** — writes anywhere, anytime

✅ **Exascale infrastructure delivers massive write throughput and near-instant consistency**

✅ **Not a "replication band-aid"** — a fully distributed database that scales out horizontally

✅ **Local writes + global coordination** for high-speed transactions

✅ **Integrated data sovereignty compliance** built into the architecture

✅ **Built for AI vector workloads**, combining vector search + business data in one distributed request

✅ **Serverless elastic global scaling** across compute + storage with Exascale Infrastructure

✅ **Works everywhere**: across clouds, on-prem, and hybrid environments

## Supercharged on Exascale

Oracle Globally Distributed Database is supercharged when deployed on Exascale infrastructure:

- **Data Residency**: Automatically keeps country-specific data within the required regions
- **Dynamic Capacity**: Near-instantaneous add or remove shards without data movement for elastic, right-sized capacity
- **Lower Entry Cost**: No dedicated upfront hardware costs with serverless architecture
- **Zero ETL Analytics**: Storage-efficient instant cloning of the entire Distributed Database
- **Always-on Databases**: Raft replication delivers zero data loss and automatic failover across locations


## Learn More
- Oracle Globally Distributed Database Documentation: https://docs.oracle.com/en/database/oracle/oracle-database/26/shard/index.html

- Raft Replication Guide: https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?clear=RR,180&wid=835&session=107057344106592

## Acknowledgements

- **Author**: Francis Regalado, Database Product Manager
- **Contributors**: 
- **Last Updated**: February 2026
