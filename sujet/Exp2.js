//URL Redirection Using Node.js

//Q: how to redirect with a 301 status code 

var http	= require("http");
       http.createServer(function(req, res){
   	  res.writeHead(301, {
	 	"location" : "http://google.com"
	 });
	 res.end();
   }).listen(3000, "127.0.0.1");
 
 console.log("server redirects from localhost to technotip.org");