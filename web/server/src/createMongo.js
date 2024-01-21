var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://Admin:Password@cluster0.96m35uk.mongodb.net/';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});