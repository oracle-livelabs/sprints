# Introduction

## About Oracle AI Database Graph

**Oracle AI Database Graph** enables you to uncover insights from relationships within large datasets by analyzing how entities are connected, not just as standalone entities. Relational databases excel at storing data in tables and rows, but are not intuitive when you need to traverse complex networks of relationships like fraud rings, recommendation networks, supply chain dependencies, or social connections.

Graph technology in Oracle AI Database treats relationships as first-class citizens. You can ask questions like "find all accounts receiving money from a suspicious person through 1 to 3 intermediaries" or "what's the shortest path between two entities" and get answers in milliseconds, not hours. The graph is derived directly from your existing relational tables with no data duplication, so inserts, updates, and deletes are instantly reflected across both views.

Behind the scenes, you still get enterprise-grade capabilities: transactions, governance, security, and performance applied directly to your graph queries using industry-standard SQL:2023 syntax.

[Video hosted on Oracle Video Hub](videohub:)

### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interact with the demo.

<iframe src="../graph-demo.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You'll Discover:

- **The Problem with Tracing Relationships with Tables**: See how finding accounts 1-3 hops away from a suspicious person requires complex nested JOINs that become unwieldy and perform poorly as relationships deepen.
- **Create a Property Graph**: Watch how a graph view is created from existing ACCOUNTS and TRANSACTIONS tables with no data copy, just a new perspective on the same data.
- **Graph Query Power**: Execute a simple pattern-matching query that traverses 1 to 3 hops instantly, finding all connected accounts in the money flow network, difficult to do without graph syntax in SQL.
- **Fraud Ring Detection**: Use simple graph syntax in SQL to automatically detect circular money flow patterns (fraud rings) that would be nearly impossible otherwise.
- **Real-time Visualization**: See the transaction network come alive with nodes (people and accounts) and edges (transfers and ownership) highlighted as queries execute.

### Key Benefits:

- **Relationship-First Analysis**: Query and analyze data where connections between entities are just as important as the entities themselves, enabling pattern detection impossible without using graphs.
- **No Data Duplication**: Graph is a view derived from existing relational tables, so all changes are instantly reflected across both perspectives with no ETL or sync jobs.
- **SQL:2023 Standard**: Use familiar SQL syntax with new GRAPH_TABLE and MATCH clauses for pattern matching, making graph queries accessible to anyone who knows SQL.
- **Built-in Analytics**: Leverage powerful algorithms for PageRank, community detection, shortest path, centrality, and cycle detection without writing complex code.
- **Enterprise Safety Net**: Governance, auditing, backup/recovery, RAC, Data Guard, TDE, and the usual Oracle strengths apply to your graph queries as well.
- **Unified Platform**: Combine graph analytics with relational, JSON, spatial, and AI capabilities in one converged database, reducing complexity and integration overhead.
- **Works Everywhere**: On-prem (Exadata/ODA), OCI (Autonomous DB, Exadata DB Service, Base DB Service), multicloud (Oracle Database @ Azure/Google Cloud/AWS), plus Always Free and downloadable images.

### The Challenge Oracle Graph Solves:

Everything is connected, but relational-only databases struggle with:

**Complex Relationships**: Questions like "find all people connected within 3 degrees of separation" or "what's the shortest path between two entities" require traversing millions of relationships in milliseconds through a data structure not optimized for following connections.

**Network and Pattern Analysis**: Discovery of patterns like fraud rings, recommendation networks, supply chain dependencies, or social influence patterns are nearly impossible to detect without graph syntax in SQL. Each additional "hop" would require another layer of JOINs.

**Real-time Traversals**: Business scenarios demand instant answers to relationship questions, but traditional approaches force you to either denormalize data (losing integrity) or accept poor performance as relationships deepen.

### How It Works:

Oracle Graph technology models data as entities (vertices) and relationships (edges), creating a **Property Graph** where each vertex and edge can have properties. This flexible structure lets you:

1. **Create graphs from existing data** - Define a property graph using CREATE PROPERTY GRAPH syntax that references your existing ACCOUNTS, TRANSACTIONS, PERSONS tables
2. **Run analytics algorithms** - Apply built-in algorithms like cycle detection, PageRank, community detection, and shortest path to uncover hidden patterns
3. **Combine with other workloads** - Join graph results with relational tables, JSON collections, vector searches, and more in a single query

### Advanced Capabilities:

**Graph Analytics**: Oracle Graph Server provides high-performance, in-memory parallel graph algorithms for pattern detection, influence analysis, and predictive modeling on massive datasets.

**Knowledge Graphs and AI**: Combine semantic search with knowledge graphs for precise results. An ontology (expert-curated knowledge graph) enables Graph RAG - using relationship context to improve AI search accuracy and reduce hallucinations.

**Developer-Friendly Tools**: Work with graphs using SQL in your favorite database tools, Graph Studio in Oracle Database, graph visualizations in VSCode extensions, or programmatic APIs in Python, Java, and other languages.

### Real-World Use Case:

**Customer Data Integrity at Industrial Scientific**: Traced exactly where each piece of customer information came from across multiple databases, improving governance, workflows, data discovery, and lineage. Used innovative graph connections across systems to eliminate data inconsistencies that caused lost revenue and frustrated customers, all on Autonomous AI Database for less than 5% the cost of traditional enterprise data intelligence platforms.

## Learn More

- [Oracle Graph Documentation](https://docs.oracle.com/en/database/oracle/property-graph/index.html)
- [LiveLabs Graph Workshops](https://livelabs.oracle.com/pls/apex/f?p=133:100:::::SEARCH:graph)
- [Always Free Autonomous Database](https://www.oracle.com/autonomous-database/free-trial/)
- [Oracle AI Database Free](https://www.oracle.com/database/free/get-started/)

## Acknowledgements

- Author — Francis Regalado, Database Product Manager
- Contributors — Melliyal Annamalai
- Last Updated By/Date — Francis Regalado, February 2026
