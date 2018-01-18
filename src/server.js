var express = require('express');
var app = express();

//Mongo CRUD functions
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";
let dbConnection;
let dbase;

console.log("MongoDB URL:", process.env.MONGO_URL);

app.get('/', function (req, res) {
	saveEcho(req.query.echo, req, res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//api
function saveEcho(echo, req, res) {
	let rec = {
		echo: echo,
		time: new Date()
	};
	
	dbinit()
	.then(() => dbinsertOne(rec))
	.then((result) => successCallback(res, result))
	.then(() => dbclose())
	.catch((err) => errorCallback(res, err));
}

//callbacks
function successCallback(res, result) {
    console.log(result);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json(result);   
}

function errorCallback(res, err) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400);
    res.send(err);   
}

//DB
dbinsertOne = function (document) {
    return dbase.collection("thing").insertOne(document);    
}

dbinit = function () {
    return MongoClient.connect(url)
    .then((db) => {
        console.log("DB Connection");
        dbase = db.db("mydb");
        dbConnection = db;
        return true;
    })
    .catch((err) => {
        console.log("DB Connection error", err);
        throw err;
    });
}

dbclose = function () {
    return dbConnection.close();
}

module.exports.insertOne = function (document) {
    return dbase.collection("thing").insertOne(document);    
}

