					//Network I/O Is Unpredictable:

//Node Server (Request, busy(NaN), Responding)
	//1. tsys.com
	//2. tcs.com
	//3. hcl.com
	//4. google.com
// Here we will try to learn request/ping for information from 4 different servers and look at its response time.
// Each time we'll send a request, we'll get different response time depending upon how busy the server is, its bandwidth etc.


var http = require("http");
urls = [ "www.tsys.com", "www.tcs.com", "www.hcl.com", "www.google.com" ];

for (var i = 0; i < urls.length; i++) {
	ping(urls[i]);
}

function ping(url)
{
	var start = new Date();

	http.get({ host: url }, function(res){
		console.log("URL :"+url);
		console.log("Response Time :"+ (new Date() - start)+"ms");
	});
}