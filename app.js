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
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res){
    res.sendFile('/html/main.html', {root: './public'});
});

app.get('/main', function(req, res){
    res.sendFile('/html/main.html', {root: './public'});
});

app.post('/submit', function(req, res) {
   console.log(req.body)
});

//Contact Us submit form
//app.post('/api/contact', function(req, res){
//    var contactForm = {
//        contactName: req.body.contactName,
//        contactEmail: req.body.contactEmail,
//        contactMessage: req.body.contactMessage
//    }
//});
//
//sendgrid.send({
//    to:       'j.robert.eagan@gmail.com',
//    from:     req.body.,
//    subject:  'Contact from Se7enFast',
//    text:     'My first email through SendGrid.'
//}, function(err, json) {
//    if (err) { return console.error(err); }
//    console.log(json);
//});
// Creating Server and Listening for Connections \\
//var port = 3000;
var port    =   process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Server running on port ' + port);

});