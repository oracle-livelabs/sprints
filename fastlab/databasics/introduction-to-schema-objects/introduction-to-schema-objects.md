# LiveLabs Sprint: Mastering Schema Objects in Oracle Database 23ai

## 🏁 Objective
In this 5-minute sprint, you will learn how to create and use core schema objects in Oracle Database 23ai, including **Tables, Views, Indexes, Sequences, Synonyms, and JSON Collections**.  
By the end, you’ll see how these objects organize your data, speed up performance, and add flexibility for modern apps.

---

## 🚀 Steps

### 1. Create a Table
Let’s start with a simple `employees` table.

```sql
CREATE TABLE employees (
  id NUMBER,
  name VARCHAR2(50)
);
```

### 2. Create a View
Use a view to simplify access to just the names.

```sql
CREATE VIEW emp_names AS 
SELECT name FROM employees;
```

### 3. Add an Index
Indexes make searches faster. Create one on the `name` column.

```sql
CREATE INDEX emp_idx ON employees(name);
```

### 4. Use a Sequence
Sequences generate unique numbers automatically.

```sql
CREATE SEQUENCE emp_seq 
  START WITH 1 
  INCREMENT BY 1;
```

### 5. Create a Synonym
Use a synonym as a shortcut for object names.

```sql
CREATE SYNONYM emp FOR employees;
```

### 6. Create a Table with JSON Column
Mix relational with JSON by adding a JSON column for product details.

```sql
CREATE TABLE products (
  id NUMBER,
  specs JSON
);
```

### 7. Create a JSON Collection
Store and query JSON documents directly with a native collection.

```sql
CREATE JSON COLLECTION orders;
```

---

## 🎯 What You Learned
- **Tables** store structured data  
- **Views** simplify access  
- **Indexes** accelerate queries  
- **Sequences** generate unique IDs  
- **Synonyms** provide shortcuts  
- **JSON columns and collections** give you the flexibility of semi-structured data alongside relational  

---

## ✅ Next Steps
Schema objects are the foundation of Oracle Database 23ai.  
Explore how they work together in the full **Oracle Databasics video** and continue your journey from **Zero to Sixty**.

---
