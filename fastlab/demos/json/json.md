# Introduction

## About this Demo

**JSON Collections** in Oracle AI Database let you store application data as flexible JSON documents and query it with full SQL in the same database engine. You get the agility of document storage (each document can look different) with the power of SQL for reporting, analytics, and AI without duplicating data into a separate JSON store.

JSON Collections are part of a converged Oracle AI Database that supports many data types and workloads (JSON, relational, graph, AI, and more) in one system. That means fewer moving parts, less integration code, and data that is ready for AI and reporting the moment it lands.

Behind the scenes, you still get enterprise-grade capabilities: transactions, governance, security, and performance that is now applied directly to your JSON documents.

You may add an optional video, using this format: [](youtube:YouTube video id)

[](youtube:REPLACE_WITH_VIDEO_ID)


### **Try the Interactive Demo**
Note: You can minimze the menu by clicking '≡' to better interactive with the demo.

<iframe src="../json.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You’ll Discover:

- **Create a JSON Collection**: You'll see how data is stored as JSON but remains fully SQL-queryable from the start, no separate JSON store or extra ETL needed.
- **Insert JSON Documents**: Add documents with slightly different shapes. Some documents with type, some with email, others with nested arrays and properties. The collection accepts them all without schema redesign, while staying immediately available to SQL.
- **Generate a Report**: Run a query to report on JSON documents directly in the collection, no data movement, no separate analytics systems.
- **Modify Documents in Place**: Flip data, or update fields in a JSON document. Oracle applies changes transactionally, so both JSON APIs and SQl queries read the same, up-to-date values.
-**Delete Documents Cleanly**: Remove a JSON document from the collection. The demo shows how that delete is applied across views, so apps, reports and analytics no longer see outdated data.  


### Key Benefits:
- **Flexible Schema for Agile App Development**: Each document can be different: no upfront schema design, application-controlled structure, and support for nested JSON that maps closely to your domain objects.
- **SQL and JSON together**: Build fast with JSON, analyze deep with SQL without moving data around.
- **Fewer moving parts**: Less middleware, fewer sync jobs, and lower risk.
- **Enterprise safety net**: Governance, auditing, backup/recovery, the usual Oracle strengths apply to your JSON as well.
-  **Works everywhere**: On-prem (Exadata/ODA), OCI (Autonomous DB, Exadata DB Service, Base DB Service), and multicloud (Oracle Database @ Azure/Google Cloud/AWS), plus Always Free and downloadable images

## Learn More
- Oracle JSON Developer's Guide (Docs) : https://docs.oracle.com/en/database/oracle/oracle-database/26/adjsn/index.html

- Related Livelabs Workshop : https://livelabs.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=3635


## Acknowledgements
- Author — Francis Regalado Database Product Manager
- Contributors — David Start, William Masdon, Ley Sylvester 
- Last Updated By/Date — Francis Regalado, November 2025
