var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var genres = require('./models/genres');
var books = require('./models/books');
var index = require('./models/index');

var port = 3000;

var app = express();

/*/view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);*/

// set static folder
app.use(express.static(path.join(__dirname,'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',books);
app.use('/api',genres);

app.listen(port,function(){
    console.log('Server started at '+port);
});