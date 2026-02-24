# Introduction

## About Oracle MCP Server for AI Database

**Oracle MCP Server** enables AI agents to securely interact with Oracle AI Database using a standard protocol called Model Context Protocol (MCP). Instead of building custom connectors for every AI tool, MCP provides a
single integration point that allows any MCP-compatible agent to connect through SQLcl.

The MCP Server is built directly into SQLcl, the Oracle command-line tool already included with Oracle Database. There is no new server to deploy, no additional infrastructure to manage, and no direct credential exposure to AI agents.

In this demo, you explore how Oracle MCP Server:

- Replaces custom AI-to-database integrations with one standard protocol
- Uses SQLcl as the secure runtime
- Provides structured tools such as `schema-information` and `run-sql`
- Enables agents to generate accurate SQL with full schema awareness
- Delivers real business insights while enforcing enterprise-grade security


### What You'll Discover:

- Why AI tools traditionally require custom database connectors
- How MCP standardizes AI-to-database communication
- How SQLcl runs the MCP Server locally using JSON-RPC over STDIO
- How agents securely connect without receiving database credentials
- How the `schema-information` tool improves accuracy and reduces token consumption
- How AI agents can execute structured SQL queries and generate business reports
- How Oracle wallet encryption and least-privilege users enforce security by design

Oracle MCP Server works wherever SQLcl is supported, including on-premises environments, Oracle Cloud, and container deployments.

[Video hosted on Oracle Video Hub](videohub:)

### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interact with the demo.

<iframe src="mcp.html" width="100%" height="1100px" frameborder="0"
style="min-width: 100%; min-height: 1000px; height: 1000px !important;"></iframe>

### 
### 

### Key Benefits:

- Integrate once, connect any MCP-compatible AI agent
- No new server or infrastructure required
- Built into SQLcl and included with Oracle Database
- Reduced AI token usage through schema-aware context
- Enterprise-grade security using Oracle wallet encryption
- Controlled, auditable agent interactions through defined tools
- Real business insight delivered in minutes, not hours

## Learn More

* [Oracle MCP Servers](https://www.oracle.com/mcp/)
* [Oracle SQLcl Documentation](https://docs.oracle.com/en/database/oracle/sql-developer-command-line/)
* [Introducing MCP Server for Oracle Database](https://blogs.oracle.com/database/introducing-mcp-server-for-oracle-database)
* [Oracle LiveLabs](https://livelabs.oracle.com)

## Acknowledgements

* **Author** – Ley Sylvester
* **Last Updated By/Date** – Ley Sylvester, February 2026