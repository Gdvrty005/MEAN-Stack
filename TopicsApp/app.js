var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./models/index');
var topics = require('./models/topics');

var port = 3000;

var app = express();

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',topics);

app.listen(port,function(){
    console.log('Server started at port '+port);
});