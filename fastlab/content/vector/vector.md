# LiveLabs FastLab - AI Vector Search

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 10 minutes

## FastLab Introduction

*Search by meaning, not just words*

AI vector search finds concepts, not just keywords. It converts data into vectors (mathematical maps of meaning) so you can pull what matters across documents, images, audio, and more.

Why it matters: If you manage product search, customer support, or internal knowledge, your data is likely messy and unstructured. Traditional search misses nuance. Vector search closes that gap. It matches ideas, even when the words do not align.

**Real Business Wins**

- **E-commerce:** "Breathable running shoes" finds "mesh trainers."
- **Support:** "Credit card failed" points to a fix listed under "billing—locked account."
- **Multilingual:** "Portable charger" matches "batterie externe" and "power bank."

**Why Teams Choose Vector Search**

- **Better results:** Match meaning, not just words.
- **Cross-format search:** Work across text, images, audio, and more.
- **AI-powered:** Fuel systems like RAG, recommendations, and anomaly detection.

One Example:
Retailers can boost discovery by matching products to customer intent even across languages and phrasing. Use vector search to scan descriptions, reviews, and more.

This LiveLabs FastLab shows you how.

### Prerequisites

>Note: The following instructions will work only on an Oracle AI Database hosted in OCI, Azure, GoogleCloud, or AWS.

- An Oracle Autonomous AI Database

    - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4276)

- An Oracle AI Database environment with a trained `all-MiniLM-L12-v2 model` in ONNX (Open Neural Network Exchange) format.

    - Check our [LiveLabs FastLab - Load a pre-built ONNX embedding generation model](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4277) to see how to load an ONNX model into ADB and to get a quick primer on ONNX.

### Video Walkthrough

[Create ADB](videohub:1_5vxvrznb)

## Task 1: Login to SQL | Database Actions

1. In the ADB Console, click Database Actions and select SQL

    ![OCI](./images/sql.png " ")


## Task 2: Check Model Existence and Perform Example Search

1. Check if the ONNX model called `ALL_MINILM_L12_V2` exists.
    
    ```sql
    <copy>
    DECLARE
        model_count INT;
    BEGIN
        -- Check if the ALL_MINILM_L12_V2 exists
        SELECT count(*) INTO model_count
        FROM all_mining_models
        WHERE model_name = 'ALL_MINILM_L12_V2';

        -- If the model exists, output a message
        IF (model_count > 0) THEN
            DBMS_OUTPUT.PUT_LINE('ALL_MINILM_L12_V2 exists, proceed to the next Task for using it.');
        ELSE
            DBMS_OUTPUT.PUT_LINE('ALL_MINILM_L12_V2 does not exist, please load the model.');
        END IF;
    END;
    /
    <copy>
    ```
2. ALL\_MINILM\_L12_V2 exists, proceed to the next Task for using it

    ![Navigate to Directory](./images/aivector-load.png " ")

## Task 3: Create a Table with a Vector Column


1. Create a table to store vectors. The VECTOR datatype is new in Oracle AI Database.
    ```sql
    <copy>
    -- Create table for product embeddings
    CREATE TABLE product_vectors (
        product_id NUMBER,
        name VARCHAR2(200),
        category VARCHAR2(100),
        embedding VECTOR
    );
    <copy>
    ```        
2. Validate the results

    ![Navigate to Directory](./images/vector-table.png " ")

## Task 4: Generate Embeddings

1. Use the built-in embedding function to convert text into vectors. Now that the model is loaded, you can generate embeddings.
    ```sql
    <copy>
    -- Insert product data with embeddings
    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        1,
        'Wireless Bluetooth Headphones',
        'Electronics',
        dbms_vector_chain.utl_to_embedding(
            'Wireless Bluetooth Headphones with noise cancellation',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );
    <copy>
    ```
    ![Navigate to Directory](./images/vector-one-row.png " ")

2. Insert 10 additional rows into the product_vector table
    ```sql
    <copy>
    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        2,
        'Smartphone Case',
        'Accessories',
        dbms_vector_chain.utl_to_embedding(
            'Protective smartphone case with screen protector',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        3,
        'Running Shoes',
        'Footwear',
        dbms_vector_chain.utl_to_embedding(
            'Comfortable running shoes with cushioning',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        4,
        'Coffee Maker',
        'Appliances',
        dbms_vector_chain.utl_to_embedding(
            'Automatic coffee maker with programmable timer',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        5,
        'LED Desk Lamp',
        'Lighting',
        dbms_vector_chain.utl_to_embedding(
            'Adjustable LED desk lamp with USB charging port',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        6,
        'Yoga Mat',
        'Sports',
        dbms_vector_chain.utl_to_embedding(
            'Non-slip yoga mat with carrying strap',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        7,
        'Wireless Mouse',
        'Electronics',
        dbms_vector_chain.utl_to_embedding(
            'Ergonomic wireless mouse with long battery life',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        8,
        'Backpack',
        'Bags',
        dbms_vector_chain.utl_to_embedding(
            'Waterproof backpack with multiple compartments',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        9,
        'Blender',
        'Appliances',
        dbms_vector_chain.utl_to_embedding(
            'High-speed blender for smoothies and soups',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        10,
        'Sunglasses',
        'Accessories',
        dbms_vector_chain.utl_to_embedding(
            'Polarized sunglasses with UV protection',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );

    INSERT INTO product_vectors (product_id, name, category, embedding)
    VALUES (
        11,
        'Notebook',
        'Stationery',
        dbms_vector_chain.utl_to_embedding(
            'Lined notebook with hardcover and elastic closure',
            JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
        )
    );
    <copy>
    ```
    ![Navigate to Directory](./images/vector-ten-rows.png " ")

## Task 5: Perform a similarity search

1. Execute the vector search query using VECTOR_DISTANCE for product recommendations based on the embeddings
    ```sql
    <copy>
        SELECT product_id, name, category,
        VECTOR_DISTANCE(
            embedding,
            dbms_vector_chain.utl_to_embedding(
                'Portable music headphones with good sound quality',
                JSON('{"provider":"database","model":"ALL_MINILM_L12_V2","dimensions":384}')
            ),
            COSINE
        ) AS VECTOR_DISTANCE
        FROM product_vectors
        ORDER BY VECTOR_DISTANCE;
    <copy>
    ```
2. The table lists products sorted by vector distance. A lower number means the product is more similar to the query. In this example, Wireless Bluetooth Headphones are the closest match. The next result, Running Shoes, suggests a semantic connection: if you are looking for portable headphones, you might also be interested in running shoes. After all, when does portable audio make more sense than when you are out for a run?

    ![Navigate to Directory](./images/vector-results.png " ")


## Signature Workshop

Ready to go deeper? These workshops let you move from demo to hands-on practice.

What you'll do:

- Add the new vector datatype.

- Verify ONNX embedding models.

- Create embeddings for text and images.

- Run exact and approximate similarity searches with indexes.

- Combine similarity search with relational queries.

- Apply everything in a pre-built APEX app.

👉 Click here to [Start the Signature Workshop](https://livelabs.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=4166&clear=RR,180&session=13771097537930)


## Learn More

* [AI Vector Search Docs](https://docs.oracle.com/en/database/oracle/oracle-database/23/vecse/)
* [AI Vector Search Product Page](https://www.oracle.com/database/ai-vector-search/)
* [LiveLabs Workshop](https://livelabs.oracle.com/pls/apex/f?p=133:180:114898719666832::::wid:4166)


## Acknowledgements
* **Author** - Linda Foinding, Database Product Management
* **Contributors** - Patrick Shepherd
* **Last Updated By/Date** - Linda Foinding, October 2025
