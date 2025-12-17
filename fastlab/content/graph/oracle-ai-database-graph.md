# Oracle AI Database Graph: Uncover Insights from Relationships

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction

In today’s interconnected world, data relationships drive critical insights—from detecting fraud rings and recommendation networks to mapping supply chain dependencies and social influences. Traditional relational databases struggle with complex queries involving multiple relationships, such as "find all people connected within 3 degrees of separation" or "what's the shortest path between two entities." These often require expensive self-joins that scale poorly beyond a few hops.

Oracle AI Database Graph addresses this challenge by providing native graph capabilities directly within the database. It allows you to model and query highly connected data where relationships are as important as the entities themselves. Graphs are derived views on existing relational tables—no data duplication or ETL needed. Inserts, updates, and deletes in the tables are instantly reflected in the graph, making it ideal for operational workloads.

Using industry-standard SQL syntax (from SQL:2023) for property graphs, you can perform real-time traversals and network analysis on millions of relationships in milliseconds. Oracle AI Database supports two graph models: Property Graphs for flexible traversal and analytics, and RDF (Resource Description Framework) for semantic understanding and reasoning. Integrated with all database features, including AI Vector Search for Graph RAG (Retrieval-Augmented Generation), it combines symbolic graph precision with probabilistic semantic search for more accurate AI applications.

In this 15-minute FastLab, you'll create a property graph from sample banking data and use SQL to query transfer paths, uncovering hidden connections like suspicious transaction chains.

### Prerequisites

- An Oracle Autonomous AI Database

  - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4276)

## Task 1: Launch SQL Worksheet

You will use Database Actions as your SQL workspace. This task opens SQL Worksheet so you can run the rest of the lab.

1. In the ADB Console, click **Database Actions** and select **SQL**.

## Task 2: Create Tables for Banking Data

We'll create two relational tables: one for bank accounts (vertices) and one for transfers (edges). This simulates a simple banking scenario where accounts are connected via money transfers.

1. Create the `bank_accounts` table to store account details.

   ```sql
   <copy>
   -- Task 2: Create bank_accounts table
   CREATE TABLE bank_accounts (
     account_id NUMBER PRIMARY KEY,
     name VARCHAR2(50),
     address VARCHAR2(100)
   );
   </copy>
   ```

2. Create the `bank_transfers` table to store transfer relationships.

   ```sql
   <copy>
   -- Task 2: Create bank_transfers table
   CREATE TABLE bank_transfers (
     transfer_id NUMBER PRIMARY KEY,
     from_acct NUMBER,
     to_acct NUMBER,
     amount NUMBER,
     transaction_date DATE,
     FOREIGN KEY (from_acct) REFERENCES bank_accounts(account_id),
     FOREIGN KEY (to_acct) REFERENCES bank_accounts(account_id)
   );
   </copy>
   ```

## Task 3: Insert Sample Data

Populate the tables with sample accounts and transfers. We'll include "Russell Rivera" as in the use case, along with a chain of transfers to demonstrate path queries.

1. Insert sample accounts.

   ```sql
   <copy>
   -- Task 3: Insert sample accounts
   INSERT INTO bank_accounts VALUES (1, 'Russell Rivera', '123 Main St, Anytown');
   INSERT INTO bank_accounts VALUES (2, 'Alice Johnson', '456 Oak Ave, Anytown');
   INSERT INTO bank_accounts VALUES (3, 'Bob Smith', '789 Pine Rd, Anytown');
   INSERT INTO bank_accounts VALUES (4, 'Charlie Lee', '101 Elm St, Anytown');
   </copy>
   ```

2. Insert sample transfers to create connections (e.g., Russell -> Alice -> Bob -> Charlie).

   ```sql
   <copy>
   -- Task 3: Insert sample transfers
   INSERT INTO bank_transfers VALUES (101, 1, 2, 500, SYSDATE);  -- Russell to Alice
   INSERT INTO bank_transfers VALUES (102, 2, 3, 300, SYSDATE);  -- Alice to Bob
   INSERT INTO bank_transfers VALUES (103, 3, 4, 700, SYSDATE);  -- Bob to Charlie
   INSERT INTO bank_transfers VALUES (104, 1, 3, 1000, SYSDATE); -- Direct Russell to Bob
   </copy>
   ```

3. Verify the data.

   ```sql
   <copy>
   -- Task 3: Verify data
   SELECT * FROM bank_accounts;
   SELECT * FROM bank_transfers;
   </copy>
   ```

## Task 4: Create a Property Graph

A Property Graph models entities (vertices) and relationships (edges). Here, accounts are vertices, and transfers are directed edges with properties like amount.

1. Create the property graph `BANK_GRAPH` as a view on the relational tables.

   ```sql
   <copy>
   -- Task 4: Create Property Graph
   CREATE PROPERTY GRAPH BANK_GRAPH
     VERTEX TABLES (
       bank_accounts
       KEY (account_id)
       PROPERTIES (account_id, name, address)
     )
     EDGE TABLES (
       bank_transfers
       SOURCE KEY (from_acct) REFERENCES bank_accounts (account_id)
       DESTINATION KEY (to_acct) REFERENCES bank_accounts (account_id)
       KEY (transfer_id)
       PROPERTIES (transfer_id, amount, transaction_date)
     );
   </copy>
   ```

## Task 5: Query the Graph to Uncover Connections

Use SQL's `GRAPH_TABLE` to traverse the graph. This use case finds accounts connected to Russell Rivera via 1 to 3 transfer hops, helping detect potential fraud rings or influence networks.

1. Simple query: Find direct transfers from any account.

   ```sql
   <copy>
   -- Task 5: Simple graph query - direct transfers
   SELECT *
   FROM GRAPH_TABLE (BANK_GRAPH
     MATCH (s) -[e IS BANK_TRANSFERS]-> (d)
     COLUMNS (
       VERTEX_ID(s) AS source_name,
       VERTEX_ID(d) AS dest_name,
       EDGE_ID(e).amount AS transfer_amount
     )
   );
   </copy>
   ```

2. Advanced query: Find accounts connected to Russell Rivera within 1-3 hops (as in the use case).

   ```sql
   <copy>
   -- Task 5: Find connections to Russell Rivera via 1-3 transfers
   SELECT account_id1, account_id2
   FROM GRAPH_TABLE (BANK_GRAPH
     MATCH (v1) -[IS BANK_TRANSFERS]->{1,3} (v2)
     WHERE v1.name = 'Russell Rivera'
     COLUMNS (
       v1.account_id AS account_id1,
       v2.account_id AS account_id2
     )
   );
   </copy>
   ```

   This reveals indirect connections, such as paths through Alice or direct to Bob, in milliseconds—impossible with traditional SQL joins for deeper traversals.

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Graphs in Oracle AI Database](https://livelabs.oracle.com/pls/apex/f?p=133:180:4579534958655::::wid:3950)

## Learn More

* [Oracle AI Database Graph Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/spgdg/)
* [Property Graph Queries in SQL](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/GRAPH-TABLE.html)
* [Oracle Graph Analytics](https://www.oracle.com/database/technologies/graph-analytics.html)
* [Try Oracle Autonomous AI Database Free](https://www.oracle.com/autonomous-database/free-trial/)

## Acknowledgements
* **Author** - Cline, based on Oracle AI Database Graph content
* **Last Updated By/Date** - Cline, December 2025
