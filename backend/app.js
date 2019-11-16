var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;


const dbUrl = 'mongodb+srv://Herta:PKC5ZLoLNcg2zEez@kangoonet-entqn.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dbName = "KangooNet";


MongoClient.connect(dbUrl, function(err, client) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    client.close();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/200', function (req, res) {
    res.send('jo!');
})

app.get('/conference', function (req, res) {
    res.send('jo!');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

