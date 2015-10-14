// Server Up or Down: Node.js

var http = require("http");
 
http.get({host: "www.google.com"}, function(res){
   	 if( res.statusCode == 200 )
	   console.log("This site is up and running!");
	 else
	   console.log("This site might be down "+res.statusCode);
   });

/*var http = require("http");
http.get({host: "www.futurousit.org"}, function(res){
   	 if( res.statusCode == 200 || res.statusCode == 301 )
	   console.log("Website Up and Running ..")
	 else
	  console.log("Website down");
 
	console.log(http.STATUS_CODES[res.statusCode]);
   });*/