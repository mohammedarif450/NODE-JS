var express = require('express');
var app = express();
app.get('/', function( req, res){
    res.send("Hello Guys, I am at ROOT '/'");
});
app.get('/Customer', function (req, res) {
    res.send("Hello Guys, Now, I am at Customer '/Customer'");
});
app.get('/Admin', function (req, res) {
    res.send("Hello Guys, I am at Admin '/Admin'");
});
app.get('/', function (req, res) {
    res.send("Hello Guys, I am at ROOT '/'");
});
app.listen(8084);
console.log('Server is running on Port 8084');