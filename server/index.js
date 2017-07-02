const express = require('express');
const app = express()
const path = require('path');
const database = "ab-website"

const mongoScheme = "mongodb"
const mongoUser = "alexanderbollbach"
const mongopassword = "rhapsody"
const mongoDomain = "ds135669.mlab.com"
const mongoPort = "35669"
const mongoPath = "ab-website"
const mongoURL = `${mongoScheme}://${mongoUser}:${mongopassword}@${mongoDomain}:${mongoPort}/${mongoPath}`

var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var db;

// test

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())

//Establish Connection
console.log(mongoURL);

MongoClient.connect(mongoURL, function (err, database) {
   if (err)
   	throw err
   else {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(80);
   }});




// Serve static assets
app.use(express.static(path.resolve(__dirname, '../frontend/', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/projects', (req, res) => {

  db.collection('projects').find().limit(100).toArray(function(err, results) {

      console.log(results)

      res.send(results);
  });
});



app.post('/newProject', function(req, res) {
      // Insert JSON straight into MongoDB
      db.collection('projects').insert(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});
