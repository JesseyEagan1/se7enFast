// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/se7enfast');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

// Routes \\

app.get('/', function(req, res){
    res.sendFile('/html/main.html', {root: './Public'});
});

//app.get('/main', function(req, res){
//    res.sendFile('/html/main.html', {root: './Public'});
//});

app.post('/submit', function(req, res) {
   console.log(req.body)
});

// Creating Server and Listening for Connections \\
//var port = 3000;
var port    =   process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Server running on port ' + port);

});