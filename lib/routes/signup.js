var http = require('http');
const express = require('express');
var app = express();
var signup_router = express.Router();

app.use('/signup', signup_router);
signup_router.post('/', function (req, res){


    
})