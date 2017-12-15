var express = require('express');
var path  = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swig = require('swig');

var routes = require('./routes/index.js');

var app = express();
var port = 6969;
var db = 'mongodb://localhost/notes';

mongoose.connect(db);

//setup view engine (SWIG)
app.engine('html',swig.renderFile);

//if u dont use view engines
// app.use(express.static(path.join(__dirname,'views')));

app.set('views',path.join(__dirname,'views')); //in views we will have our layouts
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public'))); //look in public folder for resources


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/',routes);

app.listen(port,function(){
  console.log('App is running on ' + port);
});
