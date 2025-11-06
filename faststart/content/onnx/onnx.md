# LiveLabs FastStart - Load a pre-built ONNX embedding generation model

Welcome to this **LiveLabs FastStart** workshop.

LiveLabs FastStart workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 5 minutes

## Introduction

This LiveLabs FastStart hows you load a pre-built ONNX embedding generation model into an Autonomous AI Database.


### What is ONNX?
ONNX (Open Neural Network Exchange) is an open standard format for machine learning models. It defines a shared set of operators (the core components of machine learning and deep learning models) and a common file format. This allows AI developers to use models across different frameworks, tools, runtimes, and compilers.

You can deploy ONNX models directly into the database and use them for various tasks, for example to create embeddings, which are essential for AI Vector Search, also known as similarity search.

### Prerequisites

- Oracle Autonomous AI Database

Check this LiveLabs FastStart to learn how to provision an Autonomous AI Database:

### Video Walkthrough

[ONNX Model](videohub:1_rl1otmla)

## Task 1: Login to SQL | Database Actions

1. In the ADB Console, click Database Actions and select SQL

    ![OCI](./images/sql.png " ")

## Task 2: Deploy the ONNX model

1. Copy and paste the following PL/SQL script into the SQL worksheet:

    ```sql
    <copy>
    DECLARE 
        ONNX_MOD_FILE VARCHAR2(100) := 'all_MiniLM_L12_v2.onnx';
        MODNAME VARCHAR2(500);
        LOCATION_URI VARCHAR2(200) := 'https://adwc4pm.objectstorage.us-ashburn-1.oci.customer-oci.com/p/eLddQappgBJ7jNi6Guz9m9LOtYe2u8LWY19GfgU8flFK4N9YgP4kTlrE9Px3pE12/n/adwc4pm/b/OML-Resources/o/';

    BEGIN
        DBMS_OUTPUT.PUT_LINE('ONNX model file name in Object Storage is: '||ONNX_MOD_FILE); 
    --------------------------------------------
    -- Define a model name for the loaded model
    --------------------------------------------
        SELECT UPPER(REGEXP_SUBSTR(ONNX_MOD_FILE, '[^.]+')) INTO MODNAME from dual;
        DBMS_OUTPUT.PUT_LINE('Model will be loaded and saved with name: '||MODNAME);

    -----------------------------------------------------
    -- Read the ONNX model file from Object Storage into 
    -- the Autonomous Database data pump directory
    -----------------------------------------------------

    BEGIN DBMS_DATA_MINING.DROP_MODEL(model_name => MODNAME);
    EXCEPTION WHEN OTHERS THEN NULL; END;

        DBMS_CLOUD.GET_OBJECT(                            
            credential_name => NULL,
            directory_name => 'DATA_PUMP_DIR',
            object_uri => LOCATION_URI||ONNX_MOD_FILE);

    -----------------------------------------
    -- Load the ONNX model to the database
    -----------------------------------------                   

        DBMS_VECTOR.LOAD_ONNX_MODEL(
            directory => 'DATA_PUMP_DIR',
            file_name => ONNX_MOD_FILE,
            model_name => MODNAME);

        DBMS_OUTPUT.PUT_LINE('New model successfully loaded with name: '||MODNAME);
    END;
    </copy>
    ```

## Task 3: Validate the imported model

1. Execute the following query in the SQL worksheet:

    ```sql
    <copy>
    select model_name, algorithm, mining_function from user_mining_models where  model_name='ALL_MINILM_L12_V2';
    </copy>
    ```

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 Click here to start our signature workshop: [Use Autonomous Database 15 Minute Quick Start](https://livelabs.oracle.com/pls/apex/f?p=133:180:4579534958655::::wid:928)

## Learn More

* [Now Available! Pre-built Embedding Generation model for Oracle AI Database](https://blogs.oracle.com/machinelearning/use-our-prebuilt-onnx-model-now-available-for-embedding-generation-in-oracle-database-23ai)

* [OML4Py: Leveraging ONNX and Hugging Face for AI Vector Search](https://blogs.oracle.com/machinelearning/oml4py-leveraging-onnx-and-hugging-face-for-advanced-ai-vector-search)


## Acknowledgements
* **Author** -Kevin Lazarz, Database Product Management
* **Last Updated By/Date** - Kevin Lazarz, November 2025
