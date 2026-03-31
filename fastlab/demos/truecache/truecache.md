# Introduction

## About Oracle True Cache

**Oracle True Cache** is a built-in, in-memory caching service that runs inside the Oracle AI Database, eliminating the need for external cache systems like Redis or Memcached. Applications get microsecond read latency with zero code changes, no cache invalidation logic, no separate skill set, no stale data risk.

Traditional mid-tier caches create a dangerous tradeoff: reads are fast, but consistency is your problem. After a write, the cache keeps serving the old value until you remember to invalidate it. True Cache solves this at the source. Using Oracle's redo technology, the same mechanism that powers Data Guard, every committed change on the primary database propagates to True Cache automatically. Applications always read correct, up-to-date data at memory speed, while writes continue flowing to the authoritative primary for full durability.

[Video hosted on Oracle Video Hub](videohub:)

### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interact with the demo.

<iframe src="../truecache.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You'll Discover:

- **The Problem**: See how every read request travels all the way to the back-end database, creating latency bottlenecks and CPU exhaustion at high traffic volumes.
- **Cache Pitfalls**: Watch how traditional caches (Redis, Memcached) serve fast reads but with stale data. Writes bypass the cache entirely, leaving it out of sync.
- **True Cache**: Experience the three-node architecture. Application reads from True Cache at microsecond speed while writes route to the Primary DB for full durability.
- **Always Fresh**: See Oracle redo technology in action. Every commit on the primary instantly propagates to True Cache, no TTL, no manual invalidation, no stale data ever.
- **Scale Out**: Deploy multiple True Cache instances for higher availability, larger data sets, and group isolation. HR, Sales, Finance each with their own warmed cache.
- **Go Closer**: True Cache can be deployed geographically near the application for proximity reads. Because it stores nothing on disk by default, it qualifies as a data-processing tier under data residency regulations.
- **Business Value**: Explore real customer workloads: stock exchange ticker feeds, fraud detection AI inferencing, real-time marketing campaigns, and core banking read offload.

### Key Benefits:

- **Zero stale data**: Redo-based synchronisation guarantees applications always read fresh, correct data, the same consistency guarantee as the primary database, at memory speed.
- **No application changes**: Works transparently with existing SQL queries. No new APIs, no query rewriting, no client libraries.
- **Single cache for all data types**: One service handles relational, JSON, document, row, and columnar data, no need to bolt on separate solutions per data format.
- **Offload reads to commodity hardware**: Right-size the primary database by routing read-heavy workloads to True Cache nodes, reducing cost without sacrificing performance.
- **Enterprise security included**: Security, auditing, and encryption extend to the cache tier automatically, data never leaves Oracle's security boundary.
- **Scale horizontally**: Deploy multiple instances to serve different teams, aggregate memory for larger working sets, or distribute reads globally near users.

## Learn More

- [Oracle True Cache Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/tgdba/true-cache.html)
- [Oracle AI Database Overview](https://www.oracle.com/database/ai-database/)
- [LiveLabs Hands-On Workshops](https://livelabs.oracle.com)
- [Always Free Autonomous Database](https://www.oracle.com/autonomous-database/free-trial/)

## Acknowledgements

* Author - Francis Regalado, Database Product Manager
* Contributors - 
* Last Updated By/Date - Francis Regalado, February 2026
