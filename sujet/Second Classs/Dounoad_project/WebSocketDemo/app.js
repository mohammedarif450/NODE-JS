var express = require('express');
var home = require('./routes/home');
var d3demo = require('./routes/d3demo');
var PersonProvider = require('./public/javascripts/personProvider').PersonProvider;
var personProvider = new PersonProvider('localhost', 27017);
var LinkProvider = require('./public/javascripts/linkProvider').LinkProvider;
var linkProvider = new LinkProvider('localhost', 27017);
var CommonHelper = require('./public/javascripts/commonHelper').CommonHelper;
var commonHelper = new CommonHelper();

var http = require('http');
var path = require('path');
var app = express();

//=============================================================================
//    EXPRESS SETUP
//=============================================================================
app.configure(function(){
  app.set('port', process.env.PORT || 2000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});


//=============================================================================
//    ROUTING
//=============================================================================
app.get('/home', function (req, res) {
    home.homeGet(req, res, commonHelper, personProvider, linkProvider);
});

app.post('/home', function (req, res) {
    home.homePost(req, res, personProvider);
});

app.get('/d3demo', function (req, res) {
    d3demo.d3demoGet(req, res, commonHelper, personProvider, linkProvider);
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});



//=============================================================================
//    SOCKETS CREATION
//=============================================================================
io.sockets.on('connection', function (socket) {

    socket.on('addNewPersonMessage', function (data) {
        console.log("addNewPersonMessage recieved person (email:'" + data.email + "')");

        personProvider.save({
            email: data.email
        }, function (error, docs) {
            if(error == null) {
                console.log('Sucessfully saved new person');
                console.log(docs[0]);
                io.sockets.emit('newPersonCallback', { _id: docs[0]._id, email: docs[0].email });
            } 
        });
    });

    socket.on('addNewLinkMessage', function (data) {
        console.log("addNewLinkMessage recieved link (source:'" + data.source + "', target:'" + data.target + "')");
        linkProvider.save({
            source: data.source,
            target: data.target
         }, function (error, docs) {
            if(error == null) {
                console.log('Sucessfully saved new link');
                console.log(docs[0]);
                io.sockets.emit('newLinkCallback', { _id: docs[0]._id, source: docs[0].source, target: docs[0].target });
            } 
        });
    });
});

