'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var dotenv = require('dotenv');

var app = express();
var router = express.Router();
var port = process.env.port || 3001;

// Configure env
dotenv.config();

// Allow parsing of data thru json and form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// Route for angular request
app.get('*', (req, res) => {
  res.sendfile('./public/views/index.html');
});

app.route(router);

app.listen(port, (err) => {
  console.log(`Port started on ${port}`);
});