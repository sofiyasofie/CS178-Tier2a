const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

const port = process.env.PORT || 4200;

// This allows requests from non 4200 port origins
app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.DB_URI)
var jsonParser = bodyParser.json()

// Example call to MongoDB
app.post('/api/login', jsonParser, async (req, res) => {
  await client.connect();
  try {
    const database = client.db("cs178-cal");
    const user = database.collection("users");
    const doc = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      startTime: Date(),
      endTime: 0,
      totalTime: 0
    }
    const result = await user.insertOne(doc);
    res.send({
      success: true,
      data: result
    });
  } catch (err) {
    console.log(err.stack);
  }
});

app.post('/api/submit', jsonParser, async (req, res) => {
  await client.connect();
  try {
    const database = client.db("cs178-cal");
    const users = database.collection("users");
    const filter = { firstName: req.body.firstName, lastName: req.body.lastName };

    // Find user in db
    let options = { /* default options */ };
    const user = await users.findOne(filter, options);
    
    // Quit running if user doesn't exist
    if (user === null) {
      res.send({
        success: false,
        data: 'user does not exist'
      });
      return;
    }

    let endTime = Date();
    // Calculate total time
    let startTime = user.startTime
    const date1 = new Date(startTime);
    const date2 = new Date(endTime);
    
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInSeconds = diffInMilliseconds / 1000;

    console.log(diffInSeconds)

    console.log("user:", user, "date1", date1, "date2", date2)

    options = { upsert: true };
    const updateDoc = {
      $set: { // Set
        endTime: endTime,
        totalTime: diffInSeconds
      },
    };
    const result = await users.updateOne(filter, updateDoc, options); // Filter
    console.log("Done, result:", result)
    res.send({
      success: true,
      data: "complete"
    })
  } catch (err) {
    console.log(err.stack);
  }
})

// This must come last in this file
app.listen(port, () => { 
  console.log(`Listening on port ${port}`);
});