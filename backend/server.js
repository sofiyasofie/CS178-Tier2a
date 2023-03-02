// Help from chatgpt setting up MongoDB database for storing names and time data
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5069;

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(process.env.DB_URI)
var jsonParser = bodyParser.json()

// Example call to MongoDB
// app.post('/api/getList', jsonParser, async (req, res) => {
//   await client.connect();
//   try {
//     const database = client.db("todoge");
//     const lists = database.collection("lists");
//     const query = { name: req.body.name };
//     const options = {
//     };
//     const list = await lists.findOne(query, options);
//     if (list) {
//       if (list.pin !== req.body.pin) {
//         res.send({
//           success: false,
//           data: null
//         });
//         return;
//       }
//     }
//     // since this method returns the matched document, not a cursor, print it directly
//     console.log(list);
//     res.send({
//       success: true,
//       data: list
//     });
//   } catch (err) {
//     console.log(err.stack);
//   }
// });

// This must come last in this file
app.listen(port, () => { 
  console.log(`Listening on port ${port}`);
});