# Select AI in Oracle Autonomous AI Database

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with Oracle Autonomous AI Database. You move from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction

With Select Al in Oracle Autonomous Al Database, you can interact with your database using natural language, whether to query your data by natural language - not by SQL syntax - or text documents to help your Al model produce more relevant responses on your own documents. Other select Al features include direct chat with your LLM, synthetic data generation, text translation and summarization, and Al agents. In this session, you'll focus on what we call "natural language to SOL generation" or NL2SQL.

In many teams, data is locked behind the SQL skills of a few specialists, which slows down everyday questions and decisions.

Select Al uses generative Al to turn natural language questions into SQL based on your specific database tables and views. You can view the generated SQL, have Select Al run that SOL against your database and returns the results, explain the SQL query step-by-step, or have narrated (textual) response of the query results.

In this FastLab, you will use a small sample dataset to ask questions in plain English, see the SQL that Select Al generates, and run it yourself. It's worth noting that depending on the capabilities of your large language model (LLM), you can also ask questions in languages other than English. Give it a try!

### Objectives: 

* Use Select AI to query data using natural language 
* Use the Select AI demo application to chat with your data in your own language
* See and understand the SQL that Select AI generates

### Prerequisites

You will need the following before you start:

**Select AI already configured** for your lab user:
    - If you do not have one yet, see Labs 1 and 2:  
      [Chat with Your Data in Autonomous AI Database Using Select AI](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?clear=RR,180&wid=3831&session=937205042399)
    - Your user should have `EXECUTE` on `DBMS_CLOUD_AI`
    - An **AI profile** that:
        - Uses an LLM provider available in your environment (for example, OCI Generative AI or OpenAI)
          - Note this is already prepopulated for you by folowing the step in Lab 3 task 3 of the aforementioned workshop: [Chat with Your Data in Autonomous AI Database Using Select AI](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?clear=RR,180&wid=3831&session=937205042399)


## Task 1. Ask natural language questions!
You can ask questions using SELECT AI. AI is a special keyword in the select statement that tells Autonomous Database that the subsequent text will be either or an action or the natural language question.

Here are the actions:

    1. chat - general AI chat
    2. runsql - [default] ask a question and get a structured result
    3. narrate - ask a question and get a conversational result
    4. showsql - SQL used to produce the result
    5. explainsql - an explanation of the SQL used to produce the result

## Task 2: Oracle MovieStream Business Scenario
The workshop's business scenario is based on Oracle MovieStream - a fictitious movie streaming service that is similar to services to which you currently subscribe. You'll be able to ask questions about movies, customers who watch movies, and the movies they decide to watch.

Here are the numerous tables included as part of the AI profile:

    movies
    streams
    customer_extension
    customer_contact
    customer_segment
    pizza_shop
    genre
    actors


## Task 3: Access Select AI (Chat or OML)

  >Note, you will need to complete the prerequisites stated above to perform the perform the following tasks. 

1. From the Autonomous AI Database details page, click **Database Actions**.

2. On the launchpad, choose one of these options (both work for this lab):

   * **Option A – `SELECT AI` APEX chat UI**
     * Sign in with your database user if prompted.

   * **Option B – `SELECT AI` in OML**

     * Select the Database Actions entry and choose **Machine Learning**.
     * You will be able to run natural language queries inside `SELECT AI` statements such as:

       ```
       <copy>
       select ai runsql what are our total sales
       select ai showsql what are our total sales
       </copy>
       ```

3. Pick one approach to use as you go through the examples:

   * Use **narrate** if you want a conversational experience.
   * Use **explain** if you want to see the generated SQL.
   * Use **database** for all queries that relate to the moviestream dataset

Behind the scenes, Select AI uses your **AI profile** to know which tables and columns it can query.

## Task 4: Ask Healthcare Questions with Select AI

Some things to notice when you check out the generated SQL:

* Finds tables to join
* Determines columns to query - even when the columns aren't mentioned in the query

> Your SQL may not match the examples below exactly. It should be logically equivalent and return the same kind of result.

For each case:

* If you use **chat**, type the question into the Select AI prompt and run it.
* If you use **OML**, run:

  ```sql
  <copy>
  SELECT AI runsql 'your question here';
  </copy>
  ```

  and optionally:

  ```sql
  <copy>
  SELECT AI showsql 'your question here';
  </copy>
  ```

  to see the SQL.

### Case 1: Elderly patients with diabetes

**Business question**

Identify elderly patients with diabetes for follow-up care.

**Ask Select AI**

> `select ai what are our total sales by movie with best movies first`

**Example SQL generated by Select AI**

```sql
<copy>
select ai showsql what are our total sales by movie with best movies first;
</copy>
```

**Result**

You should see **John Doe** and **Alice Brown**. These patients match the criteria “over 60 with diabetes” and could be targeted for follow-up programs.

### Case 2: Heart disease admissions in 2024

**Business question**

Understand how many patients with heart disease were admitted during 2024.

**Ask Select AI**

> `select ai what are our top 5 selling movies for the latest month?`

**Example SQL generated by Select AI**

```sql
<copy>
select ai showsql what are our top  5 selling movies for the latest month;
</copy>
```

**Result**

You should see a count of **2** (Jane Smith and Charlie Wilson). This simple metric can feed capacity and resource planning for cardiology services.

### Case 3: Gender and condition distribution

**Business question**

See how many patients you have by condition and gender.

**Ask Select AI**

> `select ai what are our sales for movies starring Harrison Ford broken out by movie`

**Example SQL generated by Select AI**

```sql
<copy>
select ai showsql select ai what are our sales for movies starring Harrison Ford broken out by movie;
</copy>
```

**Result**

You see a small matrix of conditions versus gender counts. This type of breakdown helps with demographic analysis (for example, understanding whether certain conditions skew by gender).

### Case 4: Recent admissions in 2024

**Business question**

Review the most recent admissions to see who arrived later in the year.

**Ask Select AI**

> `List patients admitted after April 1, 2024, sorted by admission date.`

**Example SQL generated by Select AI**

```sql
<copy>
SELECT *
FROM   patients
WHERE  admission_date > DATE '2024-04-01'
ORDER  BY admission_date;
</copy>
```

**Result**

You should see patients admitted after 1 April 2024, ordered from earliest to latest admission date. This helps you quickly scan recent cases.

## Task 6: Ask Your Own Questions

You learn Select AI best by asking your own questions. In this task, you practice using natural language to explore the `PATIENTS` table without any prompts.

Ask Select AI at least **three** of your own questions.

Here are some ideas:

* `select ai runsql what are sales by customer segment`
* `select ai chat what are considered the best movies produced in the past 20 years`
* `How many female patients were admitted in February 2024?`
* `List all patients ordered from oldest to youngest.`
* `Show the number of patients admitted each month in 2024.`


## Next Steps

You have now seen how Select AI turns natural language into SQL on a simple healthcare dataset. To build on this FastLab, consider:

* **Use Select AI on your own schema**
  Point an AI profile at a real application schema and try similar questions.

* **Combine Select AI with applications**
  Call `SELECT AI` from APEX, ORDS, or a microservice to let business users ask questions through a web UI.

* **Explore other AI capabilities in Oracle Autonomous AI Database**

  * **AI Vector Search** for semantic search on documents and embeddings
  * **Select AI `explainsql` and `narrate` actions** to help users understand complex SQL

If you are following a LiveLabs path, your next recommended workshop is the **Select AI Signature Workshop**, where you build a richer end-to-end scenario.


Congratulations!
You have successfully completed the Select AI FastLab. 

You can now ask natural language questions against a real Oracle database, see the SQL that Select AI generates, and start turning ad hoc questions into reusable SQL for your own projects.

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Select AI Signature Workshop](https://livelabs.oracle.com/pls/apex/f?p=133:180:4579534958655::::wid:selectai-sig)

## Learn More

* [Introducing Natural Language to SQL Generation on Autonomous Database](https://blogs.oracle.com/machinelearning/introducing-natural-language-to-sql-generation-on-autonomous-database)
* [How to Use Oracle Select AI: A Step-by-Step Guide](https://blogs.oracle.com/datawarehousing/how-to-use-oracle-select-ai-a-stepbystep-guide-generative-ai)


## Acknowledgements
* **Author** - Linda Foinding, Database Product Management
* **Last Updated By/Date** - Linda Foinding, December 2025
