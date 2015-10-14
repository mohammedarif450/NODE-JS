
var http = require('http');
 fs = require('fs');
 
 var app = http.createServer(function (request, response) {
    fs.readFile("index.html", 'utf-8', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}).listen(1337);

var io = require('socket.io').listen(app);
var clients=[];
var mongo = require('mongodb');
 
var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('chatApplication', server);
 
db.open(function(err, db) {
if(!err) {
console.log("Connected to 'myproject' database");
db.collection('userAccounts', {strict:true}, function(err, collection) {
if (err) {
console.log("The 'userAccounts' collection doesn't exist. Creating it with sample data...");
}
});
}
});




io.sockets.on('connection', function(socket) {

    //==========================================================
	io.sockets.emit("client_socketid",{ socketid:socket.id});  
	//==========================================================
    socket.on('message_to_server', function(data) {
	var obj={username:data["username"],message:data["message"]};
	    db.collection('globalChatCollection', function(err, collection){
		  // insert message into database
			collection.insert(obj, {safe:true}, function(err, result){
			
			});
		});
        io.sockets.emit("message_to_client",{ message: data["message"],username:data["username"] });
    });
	//=============================================================
	socket.on('loginORregister', function(data) {
        
		db.collection('userAccounts', function(err, collection) {
		collection.findOne({'email':data["email"]}, function(err, item) {
		   if(!err)
		   {
				if(item)
				{
						if(item.email==data["email"])
						{
						       // update user details after login
								collection.update({"email":data["email"]}, {$set:{"socketid":data["socketid"],"status":true}}, {safe:true}, function(err, result) {
								if (err) 
								{
								        console.log('Error updating wine: ' + err);
								} 
								else 
								{
										db.collection('userAccounts', function(err, collection) {
										collection.find().toArray(function(err, items) {
										io.sockets.emit("users_data",{ usersdata:items,thisuserid:item._id,messages:item.messages});
										io.sockets.emit("users_message",{messages:item.messages});
										});
										});
								}
							});
						}
				}
				else
				{
				       // insert new user into database
						collection.insert(data, {safe:true}, function(err, result){
						      if (err) 
						      {
						           res.send({'error':'An error has occurred'});
						      } 
						     else 
						      {
						        	db.collection('userAccounts', function(err, collection) {
						        	collection.find().toArray(function(err, items) {
						        	io.sockets.emit("users_data",{ usersdata:items});
						       	 	});
						       	 	});
							   }
							});
										
				}
		   }
         });
		});
		
    });
	
	//=================================================================
	   socket.on('disconnect', function(){
		db.collection('userAccounts', function(err, collection) {
		collection.update({"socketid":socket.id}, {$set:{"socketid":'',"status":false}}, {safe:true}, function(err, result) {
								if (err) 
								{
								       console.log('Error updating wine: ' + err);
								} 
								else 
								{
									
										db.collection('userAccounts', function(err, collection) {
										collection.find().toArray(function(err, items) {
										io.sockets.emit("users_data",{ usersdata:items});
										});
										});
								}
							});
		});

		});
	//=================================================================
	socket.on('logoutuser', function(data){
		db.collection('userAccounts', function(err, collection) {
		collection.update({"email":data["email"]}, {$set:{"socketid":'',"status":false}}, {safe:true}, function(err, result) {
								if (err) 
								{
								       console.log('Error updating wine: ' + err);
								} 
								else 
								{
									
										db.collection('userAccounts', function(err, collection) {
										collection.find().toArray(function(err, items) {
										io.sockets.emit("users_data",{ usersdata:items});
										});
										});
								}
							});
		});

		});
   //==================================================================
	socket.on('publicMessage_from_server', function(data){
				db.collection('globalChatCollection', function(err, collection){
					 collection.find().toArray(function(err, items) {
						 io.sockets.emit("publicMessage",{ public_message:items});
					  });
				});
		
		});
   //==================================================================
   socket.on('saveMessageToDB', function(data){
  
				   var messagedata ={$push:{"messages":{"from_id":data["from_id"],"from_name":data["from_name"],"message":data["message"],"readstatus":data["readStatus"]}}};
				   db.collection('userAccounts', function(err, collection){
						   collection.update({"email":data["to_email"]}, messagedata, {safe:true}, function(err, result){
						  
						        if(!err)
								{
								  if(result==1)
								  {
								     collection.findOne({"email":data["to_email"]}, function(err, item) {
									   if(item)
									   {
									   
											if(item.status==true && item.socketid)
											{
											
											  io.sockets.socket(item.socketid).emit('privatemessage', {"from_id":data["from_id"],username:data["from_name"],message:data["message"],"to_id":data["to_id"],"to_name":data["to_name"]});
											}
									   }
									 
									 });
								   
								 }
								}
						   });
					
					 });
		
		  });
   
   
   
});





