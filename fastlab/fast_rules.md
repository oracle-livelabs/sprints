# FastLab Generation Rules

## Overview

This document provides rules for generating Oracle LiveLabs FastLab workshops from PowerPoint presentations. FastLabs are quick, hands-on workshops (10-20 minutes) that teach Oracle AI Database features through step-by-step instructions with SQL code examples.

FastLabs follow a standard markdown structure rendered by the Oracle LiveLabs platform.

---

# PART 1: FILE STRUCTURE

## 1.1 Required Files

Every FastLab MUST contain these files in a directory:

```
/fastlab-name/
├── fastlab-name.md      # Main content file (markdown)
├── manifest.json        # Workshop metadata
├── index.html           # Standard LiveLabs template (copy exactly)
└── images/              # Screenshots directory
    ├── sql.png          # Standard SQL worksheet screenshot
    └── *.png            # Task-specific screenshots
```

## 1.2 manifest.json Structure

```json
{
    "workshoptitle": "LiveLabs FastLab - [Feature Name]",
    "help": "livelabs-help-database_us@oracle.com",
    "tutorials": [
        {
            "title": "FastLab - [Feature Description]",
            "filename": "fastlab-name.md"
        }
    ]
}
```

## 1.3 index.html (Standard Template)

Copy this EXACT template - do not modify:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Oracle LiveLabs gives you access to Oracle's products to run a wide variety of labs and workshops; allowing you to experience our best technology, live!">
    <title>Oracle LiveLabs</title>

    <script src="https://oracle-livelabs.github.io/common/redwood-hol/js/jquery-1.11.0.min.js"></script>
    <script src="https://oracle-livelabs.github.io/common/redwood-hol/js/jquery-ui-1.10.4.custom.js"></script>
    <script src="https://oracle-livelabs.github.io/common/redwood-hol/js/main.min.js"></script>

    <link rel="stylesheet" href="https://oracle-livelabs.github.io/common/redwood-hol/css/style.min.css" />
    <link rel="shortcut icon" href="https://oracle-livelabs.github.io/common/redwood-hol/img/favicon.ico" />
</head>

<body>
    <header class="hol-Header" role="banner">
        <div class="hol-Header-wrap">
            <div class="hol-Header-logo"><span>Oracle LiveLabs</span></div>
            <a href="https://livelabs.oracle.com" target="_blank" id="livelabs" title="Oracle LiveLabs"></a>
            <div class="hol-Header-actions">
                <button id="openNav" class="hol-Header-button hol-Header-button--menu rightNav" aria-label="Open Menu"
                    title="Open Menu">
                    <span class="hol-Header-toggleIcon"></span>
                </button>
            </div>
        </div>
    </header>

    <div id="container">
        <div id="leftNav">
            <div id="toc"></div>
        </div>
        <div id="contentBox">
            <main class="hol-Content" id="module-content"></main>
        </div>
    </div>

    <footer class="hol-Footer">
        <a class="hol-Footer-topLink" href="#top">Return to Top</a>
        <div id="footer-banner"><div class="footer-row">
          <div class="footer-content"><ul class="footer-links">
              <li><a href="https://docs.oracle.com/pls/topic/lookup?ctx=en/legal&id=cpyr" target="_blank">© Oracle</a></li>
              <li><a href="https://www.oracle.com/corporate/index.html" target="_blank">About Oracle</a></li>
              <li><a href="https://www.oracle.com/corporate/contact/" target="_blank">Contact Us</a></li>
              <li><a href="https://docs.oracle.com/en/browseall.html" target="_blank">Products A-Z</a></li>
              <li><a href="https://www.oracle.com/legal/privacy/" target="_blank">Terms of Use & Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</body>

</html>
```

---

# PART 2: CRITICAL PRINCIPLES (LEARNED FROM COMPARISON)

These principles take priority over structural rules. A FastLab that follows structure but ignores these principles will fail.

## 2.1 Use the PowerPoint's Story - Don't Invent Generic Alternatives

**CRITICAL**: If the PowerPoint includes specific names, scenarios, or use cases, USE THEM.

| PowerPoint Has | Do This | Don't Do This |
|----------------|---------|---------------|
| "Russell Rivera" as example | Use "Russell Rivera" in your data | Create generic "Alice, Bob, Carol" |
| "Fraud detection" scenario | Frame FastLab around fraud detection | Create abstract "find connections" |
| Banking transfers example | Use bank accounts and transfers | Use generic "people and relationships" |

**Why**: The PowerPoint's story was chosen for business relevance. Generic alternatives lose the hook that motivates users.

In case, you do not get a story from a PPT, use this overarching story to find an applicable use case:

SeerGroup is a global conglomerate with multiple divisions. Each division buried in transactions, documents, and customer data. 
The divisions are: finance, retail, manufacturing, healthcare, media & gaming, energy & utilities, life sciences, telecommunications, hightech, state & local government, transportation, 

## 2.2 Keep Introductions Under 50 Words

The introduction should answer three questions in ~50 words:
1. What will you do? (concrete action)
2. Why does it matter? (business value)
3. What will you learn? (outcome)

**Good Example (45 words):**
> This workshop focuses on working with property graphs in Oracle AI Database. You will create a graph from two tables containing bank account and transaction data. You will then run graph pattern queries in SQL to find circular payment chains and multi-hop paths.

**Bad Example (100+ words):**
> In today's connected world, understanding relationships is often more valuable than understanding individual records. Traditional databases excel at storing and querying rows and columns, but they struggle when you need to traverse millions of connections... [continues with theory]

## 2.3 Introduce Technical Terms Contextually, Not Upfront

**Don't front-load jargon in the introduction.** Introduce terms when users first encounter them in code.

| Term | When to Introduce | How to Introduce |
|------|-------------------|------------------|
| vertices | Task where you create the graph | "accounts are vertices (the entities)" |
| edges | Task where you create the graph | "transfers are edges (the relationships)" |
| GRAPH_TABLE | Task where you first query | "Use SQL's GRAPH_TABLE to traverse the graph" |
| SQL:2023 | Never (unnecessary detail) | Omit entirely |

**Bad**: Explaining vertices/edges in paragraph 1 before any code  
**Good**: Explaining vertices/edges in Task 4 when creating the graph, with concrete examples

## 2.4 Consolidate Related Queries Into One Task

**Don't split similar operations across multiple tasks.** Show progression within a single task.

| Bad Structure | Good Structure |
|---------------|----------------|
| Task 5: Direct queries | Task 5: Query the Graph |
| Task 6: Multi-hop paths | → Step 1: Simple direct query |
| Task 7: Variable-length paths | → Step 2: Multi-hop query |
| (3 tasks, 3 concepts) | (1 task, progressive complexity) |

**Why**: Each task switch creates cognitive overhead. Users lose momentum clicking through tasks that could be one progressive exercise.

## 2.5 Trust the User - Skip Unnecessary Verification Steps

**Don't add "verify X was created" steps** unless debugging is likely.

| Skip This | Keep This |
|-----------|-----------|
| "Query user_property_graphs to verify" | (Just move to the next step) |
| "Check that the table exists" | (Errors will show if it failed) |
| "Validate the results match expected" | "Verify the data" (quick SELECT *) |

**Exception**: A single `SELECT * FROM table` after inserts is acceptable to show the data.

## 2.6 Aim for 5 Tasks, Not 7+

**Target 5 tasks maximum** for a 15-minute FastLab:
1. Launch SQL Worksheet (standard)
2. Create tables/infrastructure
3. Insert sample data
4. Create the feature (graph, collection, etc.)
5. Query/demonstrate the feature (with progressive examples)

If you have 7+ tasks, you're probably:
- Splitting queries unnecessarily (see 2.4)
- Adding verification steps (see 2.5)
- Over-explaining setup

## 2.7 Write Task Explanations in 1-2 Sentences

Task explanations should be **1-2 sentences**, not paragraphs.

**Good (25 words):**
> A Property Graph models entities (vertices) and relationships (edges). Here, accounts are vertices, and transfers are directed edges with properties like amount.

**Bad (70+ words):**
> Now you create a property graph from your existing tables using the SQL:2023 CREATE PROPERTY GRAPH statement. The graph is just metadata—it doesn't copy your data. It defines which tables are vertices, which are edges, and how they connect. Any changes to the underlying tables are instantly visible in the graph.

## 2.8 Use Explicit PROPERTIES Lists Over "ALL COLUMNS"

**Prefer explicit property lists** for clarity:

```sql
-- Good: Clear what properties exist
PROPERTIES (account_id, name, address)

-- Avoid: User doesn't know what's available
PROPERTIES ALL COLUMNS
```

---

# PART 3: MARKDOWN STRUCTURE

## 3.1 Document Skeleton

Every FastLab markdown file MUST follow this structure:

```markdown
# [Title from PowerPoint - Slightly Modified for Action]

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: [X] minutes

## FastLab Introduction

[Brief intro: what you'll do, why it matters, what you'll learn - UNDER 50 WORDS]

[One more sentence describing the specific scenario from the PowerPoint]

### Prerequisites

- An Oracle Autonomous AI Database
  - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](...)

## Task 1: Launch SQL Worksheet
[Standard task]

## Task 2: Create Tables for [Scenario] Data
[1-2 sentence explanation]
[SQL blocks]

## Task 3: Insert Sample Data
[1-2 sentence explanation]
[SQL blocks]

## Task 4: Create a [Feature]
[1-2 sentence explanation - introduce key terms HERE with concrete examples]
[SQL block]

## Task 5: Query [Feature] to [Business Outcome]
[1-2 sentence explanation]
[Progressive SQL examples: simple → advanced in same task]

## Signature Workshop
👉 [Link]

## Learn More
* [Links]

## Acknowledgements
```

## 3.2 Title Section

Use the PowerPoint's title or subtitle, modified slightly for action orientation.

| PowerPoint Title | FastLab Title |
|------------------|---------------|
| "Oracle AI Database Graph" | "Oracle AI Database Graph: Uncover Insights from Relationships" |
| "Deliver Enterprise JSON" | "How to use JSON Data Type, JSON Collections, and JSON Duality Views" |

## 3.3 Welcome Paragraph (EXACT - Do Not Modify)

```markdown
Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: [X] minutes
```

## 3.4 FastLab Introduction (Concise Version)

```markdown
## FastLab Introduction

This workshop focuses on [feature] in Oracle AI Database. You will [concrete action 1] and [concrete action 2]. You will then [key capability] to [business outcome].

In this [X]-minute FastLab, you'll [specific deliverable] using [specific scenario from PowerPoint].
```

**Example:**
> This workshop focuses on working with property graphs in Oracle AI Database. You will create a graph from two tables, one containing bank account information, and another containing bank transactions information. You will then run graph pattern queries in SQL on this graph.
>
> In this 15-minute FastLab, you'll create a property graph from sample banking data and use SQL to query transfer paths, uncovering hidden connections like suspicious transaction chains.

## 3.5 Prerequisites Section

```markdown
### Prerequisites

- An Oracle Autonomous AI Database

  - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4276)
```

## 3.6 Task Sections

### Task Title Format
```markdown
## Task N: [Verb] [Object] for [Context]
```

**Examples:**
- `## Task 2: Create Tables for Banking Data`
- `## Task 4: Create a Property Graph`
- `## Task 5: Query the Graph to Uncover Connections`

### Task Body Format
```markdown
## Task N: [Title]

[1-2 sentence explanation. If introducing new terms, define them with concrete examples here.]

1. [Action description]

   ```sql
   <copy>
   -- Task N: Brief comment
   SQL CODE
   </copy>
   ```

2. [Next action or validation]
```

## 3.7 SQL Code Blocks

**CRITICAL**: All SQL code MUST be wrapped with `<copy>` tags:

```markdown
   ```sql
   <copy>
   -- Task N: Description
   SQL CODE HERE
   </copy>
   ```
```

**Formatting Rules:**
- Indent code block 3 spaces under step number
- `<copy>` on first line, `</copy>` on last line
- Brief comment at top

## 3.8 Signature Workshop Section

```markdown
## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 [Workshop Title](URL)
```

## 3.9 Learn More Section

```markdown
## Learn More

* [Documentation Title](https://docs.oracle.com/...)
* [SQL Reference](https://docs.oracle.com/...)
* [Product Page](https://www.oracle.com/...)
* [Free Trial](https://www.oracle.com/.../free-trial/)
```

## 3.10 Acknowledgements Section

```markdown
## Acknowledgements
* **Author** - [Name], [Title]
* **Last Updated By/Date** - [Name], [Month Year]
```

---

# PART 4: CONTENT EXTRACTION FROM POWERPOINT

## 4.1 What to Extract and USE

| PowerPoint Element | FastLab Usage | Priority |
|-------------------|---------------|----------|
| Specific names (Russell Rivera) | USE in sample data | **CRITICAL** |
| Specific scenario (fraud detection) | USE as framing | **CRITICAL** |
| Use case slide example | USE as Task 5 query | **HIGH** |
| SQL code snippets | USE as query templates | **HIGH** |
| Benefits/value props | Mention in intro | Medium |
| Technical architecture | Skip (too detailed) | Low |

## 4.2 Sample Data Guidelines

**Use the PowerPoint's scenario** to create sample data:

| PowerPoint Scenario | Sample Data |
|--------------------|-------------|
| Bank fraud (Russell Rivera) | bank_accounts, bank_transfers with Russell Rivera |
| Product recommendations | products, customers, purchases |
| Supply chain | suppliers, parts, shipments |

**Keep sample data minimal**: 4-5 rows in each table is enough to demonstrate the feature.

---

# PART 5: SQL PATTERNS BY FEATURE

## 5.1 Property Graph SQL Pattern

```sql
<copy>
-- Create Property Graph
CREATE PROPERTY GRAPH [graph_name]
  VERTEX TABLES (
    [table_name]
    KEY ([primary_key])
    PROPERTIES ([col1], [col2], [col3])
  )
  EDGE TABLES (
    [table_name]
    KEY ([primary_key])
    SOURCE KEY ([fk_col]) REFERENCES [vertex_table] ([pk])
    DESTINATION KEY ([fk_col]) REFERENCES [vertex_table] ([pk])
    PROPERTIES ([col1], [col2])
  );

-- Simple graph query
SELECT *
FROM GRAPH_TABLE ([graph_name]
  MATCH (src) -[edge]-> (dest)
  COLUMNS (
    src.[property] AS source_name,
    dest.[property] AS dest_name,
    edge.[property] AS edge_value
  )
);

-- Multi-hop query (1-3 hops)
SELECT source_id, dest_id
FROM GRAPH_TABLE ([graph_name]
  MATCH (v1) -[e]->{1,3} (v2)
  WHERE v1.[property] = 'value'
  COLUMNS (
    v1.[key] AS source_id,
    v2.[key] AS dest_id
  )
);
</copy>
```

## 5.2 Vector Search SQL Pattern

```sql
<copy>
-- Create table with VECTOR column
CREATE TABLE [table_name] (
    id NUMBER,
    name VARCHAR2(200),
    embedding VECTOR
);

-- Generate embeddings and insert
INSERT INTO [table_name] (id, name, embedding)
VALUES (
    1,
    'Item Name',
    dbms_vector_chain.utl_to_embedding(
        'Text to embed',
        JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
    )
);

-- Similarity search
SELECT id, name,
    VECTOR_DISTANCE(embedding, 
        dbms_vector_chain.utl_to_embedding('search text',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')),
        COSINE) AS distance
FROM [table_name]
ORDER BY distance;
</copy>
```

## 5.3 JSON SQL Pattern

```sql
<copy>
-- Create table with JSON column
CREATE TABLE [table_name] (
    id NUMBER PRIMARY KEY,
    data JSON
);

-- Insert JSON document
INSERT INTO [table_name] VALUES (
    1,
    JSON('{"name": "value", "nested": {"field": "value"}}')
);

-- Query with dot notation
SELECT id, t.data.name, t.data.nested.field
FROM [table_name] t
WHERE t.data.category = 'value';
</copy>
```

---

# PART 6: QUALITY CHECKLIST

## Critical (Must Pass)
- [ ] Uses PowerPoint's scenario/names (not generic alternatives)
- [ ] Introduction under 50 words
- [ ] 5 tasks or fewer
- [ ] Technical terms introduced contextually (not in intro)
- [ ] All SQL has `<copy>` tags

## Structure
- [ ] Welcome paragraph exact boilerplate
- [ ] Estimated Time specified
- [ ] Prerequisites with ADB link
- [ ] Signature Workshop with 👉 and link
- [ ] Learn More with 3+ links
- [ ] Acknowledgements complete

## Content
- [ ] Task explanations 1-2 sentences each
- [ ] No unnecessary verification steps
- [ ] Related queries consolidated in one task
- [ ] Progressive complexity (simple → advanced)

---

# PART 7: NAMING CONVENTIONS

## Directory Names
- Use lowercase with hyphens: `graph`, `vector`, `json-duality`

## Markdown File Names
- Match feature: `graph.md`, `vector.md`, `selectai.md`

## Image File Names
- Lowercase with hyphens
- Prefix with feature: `graph-query.png`, `vector-results.png`
