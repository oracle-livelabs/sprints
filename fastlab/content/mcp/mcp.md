# Build Database Objects with AI Using SQLcl MCP Server

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to quickly gain hands-on experience with Oracle technologies. You will move
from concept to execution in minutes.

**Estimated Time: 15 minutes**


## FastLab Introduction

This workshop focuses on using the **SQLcl MCP Server** with an AI Agent (Cline) to securely interact with your Oracle AI Database using natural
language.

Instead of writing SQL directly, you will:

- Connect to a database through MCP
- Generate and approve SQL statements
- Create relational tables and constraints
- Insert and query data
- Generate and validate PL/SQL APIs
- Inspect schema metadata

This lab demonstrates how SQLcl MCP enables a controlled, tool-based workflow where every action is proposed, reviewed, and executed securely within Oracle AI Database.


### Prerequisites

Before starting, ensure you have:

- Installed **SQL Developer Extension for VS Code**
- Installed the **Cline Extension for VS Code**
- Configured the **SQLcl MCP Server**
- Configured a database connection (Autonomous or FreeSQL)
- Click here for [Environment set-up guide](https://oracle-livelabs.github.io/developer/sqlcl-mcp-server-intro/workshops/freesql/?customTrackingParam=:ow:lp:cpo::::RC_WWMK211125P00013:llid=4285&lab=2-environment-set-up)



[SQLcl MCP](videohub:1_pp62mvme)

## Task 1: Connect and Validate MCP

1. Open the Cline extension in VS Code
    ![Navigate to Directory](./images/open_cline.png " ")

2. Ensure:
      - Plan mode is enabled
      - Auto-Approve is disabled

    ![Navigate to Directory](./images/auto_disabled.png " ")

3. Enable **Plan mode** and enter

    ```
    List my available database connections.
    Connect to the [name of your FreeSQL connection] connection.
    Summarize my current schema.
    ```

    ![Navigate to Directory](./images/prompt_1.png " ")

4. Review the proposed plan

5. Review the generated SQL carefully before approving execution

6. Confirm that a valid result is returned, you may edit the prompt if needed.

You are now connected through the SQLcl MCP Server.

## Task 2: Create Related Tables
Now create a small relational model.

1. In Plan mode, enter:

    ```
    Create two related tables with appropriate columns in my current database connection:
    - customers
    - orders
    Define the appropriate constraints
    ```

    ![Navigate to Directory](./images/prompt_2.png " ")

2. Review and approve.

    ![Navigate to Directory](./images/review_2.png " ")

## Task 3: Insert Sample Data

1. Enter the following prompt:

    ```
    Insert realistic sample data into both tables.
    Include multiple customers and multiple orders per customer.
    After inserting the data, commit the transaction.
    Then display data from each table.
    ```

    ![Navigate to Directory](./images/prompt_3.png " ")

    Review and approve.

2. Confirm that:
   - Customers exist
   - Orders reference valid customer_id values
   - Data looks consistent

If needed, refine your prompt and re-run.

## Task 4: Generate PL/SQL Table APIs

1. Now extend the schema with a reusable PL/SQL API.

    Enter the following prompt:

    ```
    Create a PL/SQL procedure that:
    - Calculates the total revenue for a given customer
    - Returns the value
    - Raises an exception if the customer does not exist
    ```

    ![Navigate to Directory](./images/prompt_4.png " ")

    Review and approve.

2. Validate the procedure

    Enter the following prompt:

    ```
    Generate an anonymous block that calls the procedure for a valid customer and prints the result.
    Then test it with a non-existent customer to validate the exception.
    ```

    Review and approve

    ![Navigate to Directory](./images/review_4.png " ")


## Task 5: Explore Schema Metadata

1. Now inspect your schema programmatically

    Enter the following prompt:

    ```
    Summarize the objects in my current schema.
    ```

    ![Navigate to Directory](./images/prompt_5.png " ")

2. Review the returned metadata summary.

    ![Navigate to Directory](./images/review_5.png " ")

3. Observe how the Agent interprets tables, columns, and relationships.

## Task 6: Close the Connection

1. Enter the following prompt:

    ```
    Disconnect from the database
    ```

    Approve the disconnect tool.

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to [Start the Signature Workshop](https://livelabs.oracle.com/ords/r/dbpm/livelabs/run-workshop?p210_wid=4285&p210_wec=&session=111104173253241)

## Learn More

* [Oracle MCP Servers](https://www.oracle.com/mcp/)
* [Oracle SQLcl Documentation](https://docs.oracle.com/en/database/oracle/sql-developer-command-line/)
* [Introducing MCP Server for Oracle Database](https://blogs.oracle.com/database/introducing-mcp-server-for-oracle-database)
* [Oracle LiveLabs](https://livelabs.oracle.com)

## Acknowledgements

* **Author** – Ley Sylvester, Senior Principal Product Manager
* **Contributors** - Jeff Smith, Chris Hoina
* **Last Updated By/Date** – Ley Sylvester, February 2026
