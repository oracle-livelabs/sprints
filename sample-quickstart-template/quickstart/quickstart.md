# QuickStart Demo

## Try AI Vector Search in Oracle Database 23ai

This QuickStart provides hands-on code snippets to get you started with AI Vector Search. You can copy and run these SQL commands in your Oracle Database 23ai environment.

### Step 1: Create a Table with a Vector Column

First, create a table to store vectors. The VECTOR datatype is new in Oracle Database 23ai.

```sql
CREATE TABLE my_vectors (
    id NUMBER,
    text_content VARCHAR2(4000),
    embedding VECTOR
);
```

### Step 2: Generate Embeddings

Use the built-in embedding function to convert text into vectors. You'll need an ONNX model loaded in the database.

```sql
<copy>
-- Assuming a model named 'demo_model' is loaded
INSERT INTO my_vectors (id, text_content, embedding)
VALUES (
    1,
    'Oracle Database 23ai introduces AI Vector Search',
    dbms_vector_chain.utl_to_embedding(
        'Oracle Database 23ai introduces AI Vector Search',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);
</copy>
```

### Step 3: Perform Similarity Search

Find similar content using vector distance functions.

```sql
-- Search for similar content
SELECT id, text_content,
       VECTOR_DISTANCE(
           embedding,
           dbms_vector_chain.utl_to_embedding(
               'What is new in Oracle 23ai?',
               JSON('{"provider":"database", "model":"demo_model"}')
           ),
           COSINE
       ) AS distance
FROM my_vectors
ORDER BY distance
FETCH FIRST 5 ROWS ONLY;
```


These snippets demonstrate the core concepts. For production use, consider security, error handling, and performance tuning.

## Walkthrough

(placeholder for walkthrough video)
[](youtube:REPLACE_WITH_VIDEO_ID)

## Acknowledgements
* **Author** - Kevin Lazarz, Database Product Management
* **Contributors** -  William Masdon, Linda Foinding, Pat Sheppard, Francis Regalado,
* **Last Updated By/Date** - Kevin Lazarz, September 2025
