const express = require('express');
const app = express()

const database = "ab-website"
const mongoUser = "alexanderbollbach"
const mongopassword = "rhapsody"

// var cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var DB;

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../frontend/', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});






// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect(`mongodb://${mongoUser}:${mongopassword}@ds135669.mlab.com:35669/ab-website`, function(err, db) {
  if (!err) {
    console.log("We are connected");
    DB = db;
  } else {
    console.log(err)
  }
});
app.get('/', (req, res) => {




// res.setHeader('Content-Type', 'application/json');
//  var collection = DB.collection('projects');
//
//   collection.find().toArray(function(err, items) {
//
//
// res.send(items);
//
//   });
//


})
app.listen(8080, () => console.log('Server running on port 3000'))
