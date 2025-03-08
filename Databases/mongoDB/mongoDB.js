// 1. What is MongoDB?
//  It is a NoSQL database that stores data in JSON-like documents

// 2. What is Mongoose?
// It is a Object data Modelling(ODM) library for MongoDB and Nodejs.It provides a structured way to interact with MongoDB by defining schemas and using models to perform CRUD operations.
// >Think of it like this:
// . MongoDB is a NoSQL database (stores JSON-like data)
// . Mongoose helps you define a structure (schema) for that data and interact with it in an organized way.

//3. what is schema?
// A Schema defines the structure of documents within a collection
// MongoDB is a schema-less, meaning documents in a collection can have different fields and structure

// 4. What is model?
// A Model is a interface that allows you to interact with a specific collection in the database.It provides built in methods to perform CRUD Operations.

// 5 What is MongoDB Compass?
// MongoDB Compass is a GUI (Graphical User Interface) tool provided by MongoDB to visually interact with your database. It allows users to explore, query, and manage MongoDB data without using the command line.


// 5. what is Collection in MongoDB>?
// In MongoDB, a collection is a group of documents (records) that are stored together. It is similar to a table in relational databases, but unlike tables, collections do not enforce a strict schema. This means documents within the same collection can have different structures.

//5. what is NoSQL and SQL database and what is the difference between them?

// SQL(Structed Query Language) databases are relational and uses table to store data with predefined schemas
// NoSQL(Not only SQL) databases are non-relational, offering flexible schemas and stores data in JSON-like document

// 1.Data Model
// > SQL database stores data in tables(row & columns)
// > NoSQL databases store data in documents(JSON-like), key-value PerformanceObserverEntryList

// 2. Schema
// > SQL databases have a fixed schema(you must define tables and columns before inserting data).
// > NoSQL databases are schema-less(each document can have different fields).

// 3. Scalability
// > SQL - Vertical Scaling(Increase CPU,RAM,SSD on a single server).
// > NoSQL - Horizontal Scaling(Distribute data across multiple servers, making it highly scalable)

// Example:
// A banking system (SQL) may need strong consistency(transactions must be accurate)|
// A social media app(NoSQL) needs fast performance and scalability (handling millions of users posting images)

// 4. Performance and Querying 
// SQL is optimized for complex queries (JOIN, GROUP BY, HAVING).
// NoSQL is optimized for fast read & write operations.

// 5️⃣ Transactions & Consistency
// SQL databases use ACID (Atomicity, Consistency, Isolation, Durability) → Ensures strong consistency.
// NoSQL databases use BASE (Basically Available, Soft state, Eventually consistent) → Optimized for speed, slight delay in consistency.
// 📌 Example:

// SQL is better for Banking (accurate transactions needed)
// NoSQL is better for Social Media (speed is more important than strict accuracy)

// Which One to Choose?
// ✔ Choose SQL if:
// ✅ You need structured data (Banking, ERP, CRM)
// ✅ You require strong transactions (Financial systems)
// ✅ You perform complex queries & joins

// ✔ Choose NoSQL if:
// ✅ You have unstructured or semi-structured data
// ✅ You need high scalability (Social Media, Big Data, IoT)
// ✅ You work with rapidly changing requirements (Startups, Dynamic Apps)

// 6. Advanced Queries

// > Querying with Operators

// MongoDB provides powerfull query operators for advanced filtering
// Comparison operators
// > $gt (greater than), $lt(less than), $gte(greater than or equal), $lte(less than or equal)
// > $ne (not equal), $in (matches any value in an array), $nin(not in)
