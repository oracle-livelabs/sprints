# Introduction

## About this Demo

**Oracle Select AI** brings generative AI capabilities directly to Oracle Autonomous AI Database and Oracle AI Database. With Select AI, you can ask questions in natural language and receive answers from your data-no SQL required. Additionally, you can chat with your LLM, generate synthetic data, translate and summarize text, and build and run AI agents. Select AI transforms your database into an AI-powered “answer engine” for both structured (tables) and unstructured (documents) content.

Rather than coding your own AI solutions or learning multiple APIs and vector databases, Select AI operates natively within your database. It is fully integrated with a variety of AI providers and uses your existing schemas or trusted documents, ensuring security and governance throughout. Select AI uses your chosen LLM to automatically generate SQL, conduct Retrieval Augmented Generation (RAG), and orchestrate multi step AI agents. Using a chatbot, business users can ask questions in plain English (or other languages, depending on the LLM’s capabilities), and Select AI manages prompts, model interactions, SQL, and vector search processes behind the scenes. Using SQL or Python APIs, developers can easily build AI enhanced applications. 

Because Select AI is integrated with Oracle’s converged database, you can reduce the gap between users and data, leading to fewer tickets, faster insights, and minimized need for custom reports, all while keeping your sensitive data securely in place.

[Video hosted on Oracle Video Hub](videohub:)


### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interactive with the demo.

<iframe src="../select-ai.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>

###  
### 

### What You’ll Discover:

- **Ask About Sales Data (NL2SQL)**: See how Select AI converts a plain English requests like “Show me our top 5 customers by revenue this year” into an optimized SQL query, runs it, and returns a results table.
- **Search Company Docs (RAG)**: Explore Retrieval Augmented Generation, where Select AI uses AI Vector Search to find relevant content in your private documents and then provides this content to your LLM to generate a contextually relevant response - reducing hallucinations and keeping answers grounded in your own policies and manuals.
- **AI Chat**: Select AI provides general AI chat capabilities to your chosen LLM directly from your database, enabling intelligent conversations that maintain context about your data and business.
- **Automate Analysis (Agent)**: Watch an AI Agent that your app developer created orchestrate multi step workflows like analyzing churn risk, identifying at risk customers, and generating a retention campaign by chaining tasks and SQL calls declared from within the database.

### Key Benefits:

- **Natural language to SQL and beyond**: Business users ask questions in everyday language and Select AI generates the SQL, runs it, explains it, and can even narrate results back in natural language.
- **One in-database gateway to many LLMs**: Work with  AI models from OCI Generative AI, OpenAI, Azure OpenAI, Cohere, Anthropic, Amazon, and more via AI profiles, without rewriting your application logic. Easily switch between providers and models. Even use privately hosted AI models.
- **Built-in RAG with AI Vector Search**: Use Select AI to automate creating vector indexes over your documents and performing the full RAG workflow.
- **Secure, governed, and observable**: Keep data, security policies, and auditing in the database. Select AI uses existing roles, controls, and logging so your AI access is enterprise ready by design.
- **Developer and data scientist friendly**: Use SQL, PL/SQL, and Python APIs to integrate AI into apps, analytics, and pipelines, no separate vector database or AI control plane to run.
- **Lower TCO, faster insight**: Fewer moving parts, less glue code, and no cross system ETL for AI use cases means lower cost and faster time to value.


## Learn More
- **Select AI SQL generation & usage**: Use Select AI for Natural Language Interaction with your Database : </br>
  https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai.html

- **Supercharge SQL: Unleashing AI Queries with Oracle Autonomous Database Select AI** : </br>
  https://blogs.oracle.com/machinelearning/supercharge-sql-unleashing-ai-queries-with-oracle-adb-select-ai

- **6 Simple Tips for Better Text to SQL Generation using Oracle Autonomous Database Select AI** :  </br>
  https://blogs.oracle.com/machinelearning/post/6-simple-tips-for-better-texttosql-generation-using-oracle-autonomous-database-select-ai

- **Select AI Agent** : Build interactive and autonomous agents inside Autonomous AI Database, combining planning, tool use, reflection, and memory to deliver multi-turn workflows: </br>
  https://docs.oracle.com/en-us/iaas/autonomous-database-serverless/doc/select-ai-agent.html

## Acknowledgements
- Author - Francis Regalado Database Product Manager
- Contributors - Mark Hornick
- Last Updated By/Date - Francis Regalado, December 2025