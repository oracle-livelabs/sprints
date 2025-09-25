# QuickStart Demo

## Try AI Vector Search in Oracle Database 23ai

This QuickStart provides hands-on code snippets to get you started with AI Vector Search. You can copy and run these SQL commands in your Oracle Database 23ai environment.

### Business Case Example

#### Retail: Product Recommendations and Customer Insights

Retailers can enhance product discovery by finding similar items or understanding customer preferences through vector search on product descriptions and reviews. The following steps will show you show!

### Step 1: Load ONNX Model

First, load an ONNX embedding model into the database. This model will be used to generate vector embeddings.

```sql
<copy>
-- Load an ONNX model for text embeddings
-- Note: Replace 'model_path' with the actual path to your ONNX model file
BEGIN
    DBMS_VECTOR.LOAD_ONNX_MODEL(
        model_name => 'demo_model',
        model_data => BFILENAME('MODEL_DIR', 'your_embedding_model.onnx'),
        metadata => JSON('{"description": "Text embedding model for AI Vector Search"}')
    );
END;
/
<copy>
```

### Step 2: Create a Table with a Vector Column
Create a table to store vectors. The VECTOR datatype is new in Oracle Database 23ai.

```sql
<copy>
-- Create table for product embeddings
CREATE TABLE product_vectors (
    product_id NUMBER,
    name VARCHAR2(200),
    category VARCHAR2(100),
    embedding VECTOR
);
</copy>
```

### Step 3: Generate Embeddings
Use the built-in embedding function to convert text into vectors. Now that the model is loaded, you can generate embeddings.


```sql
<copy>
-- Insert initial product
INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    1,
    'Wireless Bluetooth Headphones',
    'Electronics',
    dbms_vector_chain.utl_to_embedding(
        'Wireless Bluetooth Headphones with noise cancellation',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

-- Insert 10 additional products
INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    2,
    'Smartphone Case',
    'Accessories',
    dbms_vector_chain.utl_to_embedding(
        'Protective smartphone case with screen protector',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    3,
    'Running Shoes',
    'Footwear',
    dbms_vector_chain.utl_to_embedding(
        'Comfortable running shoes with cushioning',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    4,
    'Coffee Maker',
    'Appliances',
    dbms_vector_chain.utl_to_embedding(
        'Automatic coffee maker with programmable timer',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    5,
    'LED Desk Lamp',
    'Lighting',
    dbms_vector_chain.utl_to_embedding(
        'Adjustable LED desk lamp with USB charging port',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    6,
    'Yoga Mat',
    'Sports',
    dbms_vector_chain.utl_to_embedding(
        'Non-slip yoga mat with carrying strap',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    7,
    'Wireless Mouse',
    'Electronics',
    dbms_vector_chain.utl_to_embedding(
        'Ergonomic wireless mouse with long battery life',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    8,
    'Backpack',
    'Bags',
    dbms_vector_chain.utl_to_embedding(
        'Waterproof backpack with multiple compartments',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    9,
    'Blender',
    'Appliances',
    dbms_vector_chain.utl_to_embedding(
        'High-speed blender for smoothies and soups',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    10,
    'Sunglasses',
    'Accessories',
    dbms_vector_chain.utl_to_embedding(
        'Polarized sunglasses with UV protection',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);

INSERT INTO product_vectors (product_id, name, category, embedding)
VALUES (
    11,
    'Notebook',
    'Stationery',
    dbms_vector_chain.utl_to_embedding(
        'Lined notebook with hardcover and elastic closure',
        JSON('{"provider":"database", "model":"demo_model"}')
    )
);
<copy>
```

### Step 4: Perform Similarity Search
Find similar content using vector distance functions.

```sql
<copy>
-- Find similar products for recommendations
SELECT product_id, name, category,
       VECTOR_DISTANCE(
           embedding,
           dbms_vector_chain.utl_to_embedding(
               'Portable music headphones with good sound quality',
               JSON('{"provider":"database", "model":"demo_model"}')
           ),
           COSINE
       ) AS similarity_score
FROM product_vectors
ORDER BY similarity_score
FETCH FIRST 5 ROWS ONLY;
<copy>
```

These snippets demonstrate the core concepts and practical applications. For production use, consider security, error handling, and performance tuning.

## Walkthrough

(placeholder for walkthrough video)
[](youtube:REPLACE_WITH_VIDEO_ID)

## Acknowledgements
* **Author** - Linda Foinding, Database Product Management
* **Contributors** - Kevin Lazarz, William Masdon, Pat Sheppard, Francis Regalado
* **Last Updated By/Date** - Linda Foinding, September 2025
