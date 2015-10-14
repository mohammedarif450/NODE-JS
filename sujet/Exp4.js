//Create/Read/Write File using File Server: Node.js

var fs = require("fs");


var html = fs.readFileSync("index.html", "UTF-8");

//fs.writeFileSync("test.html", html);

//console.log(html);

/*fs.mkdir("tests");

console.log("file created !!!");
*/
fs.unlink("test.html");
console.log("file deleted!!!");

//fs.rmdir("tests");
//console.log("Folder Deleted!!!");