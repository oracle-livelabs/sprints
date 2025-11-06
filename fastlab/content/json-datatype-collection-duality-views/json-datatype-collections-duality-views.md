# How to use JSON Data Type, JSON Collections, and JSON Duality Views in Oracle AI Database

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 15 minutes

## FastLab Introduction

In the fast-paced world of application development, the need to handle dynamic, hierarchical data is more important than ever. Relational databases, with their rigid tables, often struggle to capture the nuance of such data.
Enter **JSON** (JavaScript Object Notation): the perfect solution for developers dealing with data that doesn’t fit neatly into a table.

**JSON** is the go-to format for modern data exchange.
It’s lightweight, human-readable, and works seamlessly across virtually every programming language. But why is it so popular?  The answer lies in it's simplicity and flexibility. JSON has become the backbone of APIs, configurations, and semi-structured data in today's applications, offering an ideal way to manage complex data in a simple, organized manner.

But what if you could combine the reliability and performance of relational databases with the flexibility of JSON? That’s exactly what the **JSON Relational Duality View** feature of the **Oracle AI Database** delivers.

In this FastLab lab, we will introduce you to JSON concepts, demonstrates basic operations, and shows practical usage examples.
This FastLab provides hands-on code snippets to quickly get you started with using the **JSON data type**, **JSON Collections**, and **JSON Relational Duality Views** in ***Oracle AI Database***.

### Prerequisites

- An Oracle Autonomous AI Database

  - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4276)

<!-- ### Video Walkthrough -->

<!-- [JSON](videohub:1_5vxvrznb) -->

## Task 1: Launch SQL Worksheet

Click the SQL option in Database Actions

![OCI Console – Open SQL Worksheet from Database Actions Launchpad](./images/open-sql-worksheet-from-database-actions-launchpad.png =30%x*)

## Task 2: Create a table to store Relational and JSON documents side by side in native formats

This example creates a product catalog table for a manufacturing company with product_data column as a flexible JSON field.

```sql
<copy>
DROP TABLE IF EXISTS products ;
CREATE TABLE products (
    id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_data JSON);
</copy>
```

## Task 3: Insert JSON Documents into table

1. Insert a document that represents a manufacturing product with nested specifications.  

    ```sql
    <copy>
    INSERT INTO products (product_data) VALUES (
        JSON('{
            "name": "Industrial Pump Model X1",
            "category": "Pumps",
            "manufacturer": "Acme Manufacturing",
            "specifications": {
                "power": "5HP",
                "voltage": "480V",
                "flow_rate": "100 GPM",
                "materials": ["stainless steel", "cast iron"]
            },
            "inventory": {
                "quantity": 150,
                "location": "Warehouse A",
                "reorder_point": 50
            },
            "pricing": {
                "list_price": 2500.00,
                "discount_eligible": true
            }
        }')
    );
    </copy>
    ```

    ![Navigate to Directory](./images/json-run-insert1.png =30%x*)

2. Insert another document that represents manufacturing product with nested specifications.  

    >Note how the attributes in the specifications are different from the 1st document we loaded.  

    ```sql
    <copy>
    INSERT INTO products (product_data) VALUES (
        JSON('{
            "name": "Conveyor Belt System C2",
            "category": "Conveyors",
            "manufacturer": "TechConvey Inc",
            "specifications": {
                "length": "50ft",
                "width": "24in",
                "belt_type": "modular plastic",
                "speed": "200 ft/min"
            },
            "inventory": {
                "quantity": 25,
                "location": "Warehouse B",
                "reorder_point": 10
            },
            "pricing": {
                "list_price": 15000.00,
                "discount_eligible": false
            }
        }')
    );
    </copy>
    ```

## Task 4: Query JSON Data using Dot Notation

Use Dot Notation to find all of the Pumps in the products table

```sql
<copy>
-- Find all pumps
SELECT p.product_data.name, p.product_data.specifications.power
FROM products p
WHERE p.product_data.category = 'Pumps';
</copy>
```

![Navigate to Directory](./images/json-select2.png =30%x*)


## Task 5: Use SQL/JSON operator JSON_VALUE to extract nested values from JSON Documents

Extract the product name, list price, and location from the JSON Documents


```sql
<copy>
-- Extract nested values
SELECT p.product_data.name,
    JSON_VALUE(p.product_data, '$.pricing.list_price') as price,
    JSON_VALUE(p.product_data, '$.inventory.location') as location
FROM products p;
</copy>
```

![Navigate to Directory](./images/json-select3.png =30%x*)

## Task 6: Work with JSON Collections

JSON Collections are similar to tables, except instead of containing rows, they contain documents that are stored in a dedicated JSON data type column.  
Each document in a collection is uniquely identified by a key, that is stored in a hidden **_id** column.  
Oracle will automatically generate a unique _id for the document if one is not provided.
With Collections, you can use SQL/JSON functions and conditions to work with the JSON Collection just as we have been doing for data stored in the native JSON data type.

1. Let's create our products table as a JSON Collection Table.

    ```sql
    <copy>
    CREATE JSON COLLECTION TABLE PRODUCTS_COLLECTION;
    </copy>
    ```


2. Now let's insert a JSON Document into the collection table that represents a manufacturing product with nested specifications.  

    ```sql
    <copy>
    INSERT INTO products_collection (DATA) VALUES (
        JSON('{
            "name": "Industrial Pump Model X1",
            "category": "Pumps",
            "manufacturer": "Acme Manufacturing",
            "specifications": {
                "power": "5HP",
                "voltage": "480V",
                "flow_rate": "100 GPM",
                "materials": ["stainless steel", "cast iron"]
            },
            "inventory": {
                "quantity": 150,
                "location": "Warehouse A",
                "reorder_point": 50
            },
            "pricing": {
                "list_price": 2500.00,
                "discount_eligible": true
            }
        }')
    );
    </copy>
    ```

3. Now let's query the JSON Collection Table to extract the product name, list price, and inventory location from the JSON Documents

    ```sql
    <copy>
    -- Extract nested values
    SELECT JSON_VALUE(p.data, '$.name') as product_name,
        JSON_VALUE(p.data, '$.pricing.list_price') as price,
        JSON_VALUE(p.data, '$.inventory.location') as product_location
    FROM products_collection p;
    </copy>
    ```

Congratulations!!!  
You have now worked with JSON as a data type in a relational table and in a JSON Collection Table.
This has been fun but there is more. With Oracle AI Database we can also work with relational data as JSON.
Let's check this out in our next task.

## Task 7: Create a Duality View that allows you to work with relational data using JSON format.

1. Create relational tables for **orders** and **order\_items**

    ```sql
    <copy>
        CREATE TABLE orders (
        order_id NUMBER PRIMARY KEY,
        customer_name VARCHAR2(50),
        status VARCHAR2(20)
        );
    </copy>
    ```

    ```sql
    <copy>
        CREATE Table order_items (
        order_id NUMBER,
        item_name VARCHAR2(100),
        qty NUMBER,
        price NUMBER,
        CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(order_id),
        CONSTRAINT t_pk primary key (order_id, item_name) 
        );
    </copy>
    ```

2. Insert Sample Data into Orders and Order_Items tables

    Insert 4 orders for use in our examples

    ```sql
    <copy>
    INSERT INTO orders (order_id, customer_name, status)
    VALUES (101, 'Alpha Company', 'Open'),
           (102, 'Beta Company', 'Shipped'),
           (103, 'Charlie Company', 'Open'),
           (104, 'Delta Company', 'Shipped');
    </copy>
    ```

   Insert Order Items for each Customers Order

    ```sql
    <copy>
     INSERT INTO order_items (order_id, item_name, qty, price)
     VALUES (101, 'Conveyor Belt', 1, 1299),
            (101, 'Industrial Pump', 1, 3790),
            (102, 'Bearing', 10, 7.25),
            (102, 'Conveyor Belt', 2, 1299),
            (103, 'Industrial Pump', 2, 3790),
            (103, 'Bearing', 20, 7.25),
            (104, 'Conveyor Belt', 4, 1299);
    </copy>
    ```

3. Create a JSON Duality View on top of the orders and order_items tables (like a JSON window into both tables) using SQL Syntax

    ```sql
    <copy>
    -- Create DV via SQL
    CREATE or REPLACE JSON RELATIONAL DUALITY VIEW orders_dv AS
    SELECT JSON {'_id'          : o.order_id,
                 'customer'     : o.customer_name,
                 'status'       : o.status,
                 'items'      :
                 [ SELECT JSON {'Order_ID' : i.order_id,
                                'ItemName' : i.item_name,
                                'Qty'      : i.qty,
                                'Price'    : i.price}
                   FROM order_items i WITH UPDATE INSERT DELETE
                   WHERE i.order_id = o.order_id
                 ]}
    FROM orders o WITH UPDATE INSERT DELETE;
    </copy>
    ```

    ***Alternatively***, you can also create the Duality View via GraphQL Syntax

    ```sql
    <copy>
    --Create DV via GraphQL
    CREATE OR REPLACE JSON RELATIONAL DUALITY VIEW orders_dv
    AS orders @INSERT @UPDATE @DELETE
    {
     _id      : order_id,
     customer : customer_name,
     status   : status,
     items    : order_items @INSERT @UPDATE @DELETE
            [ {
                Order_ID : order_id,
                ItemName : item_name,
                Qty      : qty,
                Price    : price
                }
            ]
    };
    </copy>
    ```

## Task 8: Query the JSON Duality View

1. Access all customer orders from JSON Duality View

    ```sql
    <copy>
    -- Select all orders from Duality View
    SELECT * FROM orders_dv;
    </copy>
    ```
    
    >Note that this query returns the JSON data formatted as a flat string


2. Now let's return the orders data in a more human readable format

    ```sql
    <copy>
    -- Select all orders from Duality View with formatted output
    SELECT json_serialize(data PRETTY) FROM orders_dv;
    </copy>
    ```

    >Note how the query uses the Oracle database function **json_serialize** to access the JSON data stored in the database and return it as text, and uses the **PRETTY** keyword to format the JSON data output with indentation for better readability;


3. Now lets filter the order data to return just the orders that have **Shipped**

    ```sql
    <copy>
    -- Find orders that have 'Shipped'
    SELECT json_serialize(data PRETTY) FROM orders_dv dv WHERE dv.data.status ='Shipped';
    </copy>
    ```

    >Note that based on our sample data, this returns the expected 2 rows that shipped


## Task 9:  Update Data via Duality View

1. Update the Status to **Shipped** for **Alpha Company** Order through Duality View

    ```sql
    <copy>
    UPDATE orders_dv
    SET data = JSON_TRANSFORM(data, SET '$.status' = 'Shipped')
    WHERE JSON_VALUE(data, '$.customer') = 'Alpha Company';
    </copy>
    ```

    >Note that you could also use Dot Notation for the WHERE clause like this --> WHERE dv.data.customer = 'Alpha Company';

2. Validate Update via Duality View

    ```sql
    <copy>
    SELECT count(*) FROM orders_dv dv WHERE dv.data.status ='Shipped';
    </copy>
    ```

    >Returns the expected Count of 3 orders shipped

3. Validate Update via Relational Table

    ```sql
    <copy>
    Select Count(*) FROM orders WHERE status = 'Shipped';
    </copy>
    ```

    >Returns the expected Count of 3 orders shipped

## Task 10: Insert a JSON Document via Duality View and watch it split into underlying relational tables

1. Insert a JSON Document via Duality View

    ```sql
    <copy>
    INSERT INTO orders_dv (data) 
    VALUES ('
     {"_id"     : 105,
     "customer" : "Echo Company",
     "status"   : "Open",
     "items"    : [
                    {"Order_ID" : 105, "ItemName": "Conveyor Belt", "Qty": 3, "Price": 1299},
                    {"Order_ID" : 105, "ItemName": "Bearing", "Qty": 30, "Price": 7.25}
                  ]
     }');
    </copy>
    ```

2. Validate that you see the data from **Duality View**

    ```sql
    <copy>
    SELECT json_serialize(data PRETTY) FROM orders_dv dv WHERE dv.data."_id" = 105; 
    </copy>
    ```

3. Validate that you see the data from **Relational Tables**

    ```sql
    <copy>
    SELECT * FROM orders where order_id = 105;
    SELECT * FROM order_items where order_id = 105;
    </copy>
    ```

***Congratulations***, you have successfully completed the FastLab on working with JSON in Oracle AI Database!


## Signature Workshop

👉 Click here to [Start the Advanced JSON Workshop](https://apexapps.oracle.com/pls/apex/f?p=133:180:16090110673701::::wid:3635)

This workshop contains labs that dive deeper into how to work with JSON in Oracle AI Database.

## Learn More

* [JSON Developer’s Guide](https://docs.oracle.com/en/database/oracle/oracle-database/23/adjsn/)
* [JSON Relational Duality Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/jsnvu/)
* [Oracle Database 23ai JSON Features](https://www.oracle.com/database/json/)
* [LiveLabs JSON Workshop](https://apexapps.oracle.com/pls/apex/f?p=133:180:16090110673701::::wid:3635)


## Acknowledgements
* **Author** - Eddie Ambler, Linda Foinding
* **Contributors** - Kevin Lazarz, Pat Sheppard
* **Last Updated By/Date** - Eddie Ambler, October 2025
