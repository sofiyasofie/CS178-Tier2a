// Help from chatgpt for setting up MongoDB server

const MongoClient = require('mongodb').MongoClient;

// Replace the connection string with your own.
const uri = "mongodb+srv://sofiyalysenko:aaa159357@cluster0.ccjhbsw.mongodb.net/test";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  await client.connect();
  const db = client.db("mydatabase");
  return db;
}

async function insertData(data) {
  const db = await connect();
  const collection = db.collection("mycollection");
  await collection.insertOne(data);
  console.log("Data saved to database.");
}

module.exports = {
  connect,
  insertData,
};
