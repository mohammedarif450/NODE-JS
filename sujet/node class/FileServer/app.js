var http = require("http");
var fs= require("fs");
var path=require("path");
var url=require("url");
var rootDir = __dirname + "/Public";
var fileLocation;


var httpServer = http.createServer(function (req, resp){
   var pathname = url.parse(req.url).pathname;
    fileLocation = path.join(rootDir, pathname);

    var readStream  = fs.createReadStream(fileLocation);
    readStream.pipe(resp);
});

httpServer.listen(8111);
