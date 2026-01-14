# Introduction

## About this Demo

**Oracle Select AI** brings generative AI directly into Oracle Autonomous AI Database and Oracle AI Database, so you can ask questions in natural language and get answers from your data without writing SQL. It turns your database into an AI powered “answer engine” for both structured (tables) and unstructured (documents) content.

Instead of juggling separate AI services, APIs, and vector databases, Select AI runs inside the database engine. It uses your existing schemas, security, and governance to generate SQL, run Retrieval Augmented Generation (RAG), and even orchestrate multi step AI agents. Business users ask questions in plain English, and Select AI takes care of the prompts, models, SQL, and vector search behind the scenes.

Because Select AI is integrated into Oracle’s converged database, you reduce the distance between users and data: fewer tickets, fewer custom reports, and much faster time from question to insight all while keeping sensitive data where it already lives today.

[Video hosted on Oracle Video Hub](videohub:1_g3figd1t)


### **Try the Interactive Demo**
Note: You can minimze the menu by clicking '≡' to better interactive with the demo.

<iframe src="../select-ai.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You’ll Discover:

- **Ask About Sales Data (NL2SQL)**: See how Select AI converts a plain English request like “Show me our top 5 customers by revenue this year” into an optimized SQL query, runs it, and returns a results table, no SQL knowledge required.
- **Search Company Docs (RAG)**: Explore Retrieval Augmented Generation, where Select AI uses AI Vector Search to find relevant content in your private documents and then summarizes it in context, reducing hallucinations and keeping answers grounded in your own policies and manuals.
- **Generate Content (AI Chat)**: Use Select AI to draft business ready content (for example, a customer email about new pricing) via `DBMS_CLOUD_AI.GENERATE`, while still benefiting from database security, audit, and governance.
- **Automate Analysis (Agents)**: Watch an AI Agent orchestrate multi step workflows like analyzing churn risk, identifying at risk customers, and generating a retention campaign by chaining tasks and SQL calls declared from within the database.

### Key Benefits:

- **Natural language to SQL and beyond**: Business users ask questions in everyday language and Select AI generates the SQL, executes it, and can even narrate results back in plain English.
- **One in database gateway to many LLMs**: Work with OCI Generative AI, OpenAI, Azure OpenAI, Cohere, Anthropic, Bedrock, and more via AI profiles, without rewriting your application logic.
- **Built in RAG with AI Vector Search**: Create vector indexes over your documents declaratively and let Select AI handle embeddings, similarity search, and prompt augmentation for you.
- **Secure, governed, and observable**: Keep data, security policies, and auditing in the database. Select AI uses existing roles, controls, and logging so your AI access is enterprise ready by design.
- **Developer and data scientist friendly**: Use SQL, PL/SQL, and Python APIs to integrate AI into apps, analytics, and pipelines, no separate vector DB or AI control plane to run.
- **Lower TCO, faster insight**: Fewer moving parts, less glue code, and no cross system ETL for AI use cases means lower cost and faster time to value.


## Learn More
- **Select AI SQL generation & usage**:  
  https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/sql-generation-ai-autonomous.html

- **6 Simple Tips for Better Text to SQL Generation using Oracle Autonomous Database Select AI**:  
  https://blogs.oracle.com/machinelearning/post/6-simple-tips-for-better-texttosql-generation-using-oracle-autonomous-database-select-ai

## Acknowledgements
- Author - Francis Regalado Database Product Manager
- Contributors - David Start, Ley Sylvester 
- Last Updated By/Date - Francis Regalado, December 2025