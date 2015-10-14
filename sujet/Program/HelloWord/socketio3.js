var http = require('http');
var net = require('net');
var path = require('path');
var fs = require('fs');

var port = 9088;
//Create http Server
var srv = http.createServer(function (req, res) {
    console.log('Request Starting...');

    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = './RealtimeResponse.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    path.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    res.writeHead(500);
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type' : contentType
                    });
                    res.end(content, 'utf-8');
                }
            });
        } else {
            res.writeHead(404);
            res.end();
        }
    });

});

gw_srv = require('socket.io').listen(srv);
srv.listen(port);
console.log('Server Started');
gw_srv.sockets.on('connection', function (socket) {
    var dataPusher = setInterval(function () {
        socket.volatile.emit('data', Math.random() * 100);
    }, 1000);

    socket.on('disconnect', function () {
        console.log('closing');
        srv.close();
    });
});