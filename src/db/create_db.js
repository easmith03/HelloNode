var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.99.100:27017/MYdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});