var User     = require('./app/models/userModel');

var userCtrl=(function(){

// registration  function
this.userRegistration=function(req, res) {
	
		
		if(req.body.email)
		{
		 return User.find({"email":req.body.email},function( err, users ) {
			if( !err ) 
			{
			var user = new User();	
			user.name = req.body.name; 
			user.email = req.body.email;
			user.password = req.body.password;
			user.loginstatus=true;
			 if(!users)
			{
			 user.save(function(err,data) {
				if (err){
					res.send(err);
					}
					else{
					var obj={message:"registration successful",id:data.id,loginstatus:data.loginstatus,email:data.email,name:data.name,modified:data.modified}																	
					return res.send(obj);
					}
				});
				  }
				 else{
					var obj={message:"email already exist"};
					return res.send(obj);
					 }
			} 
			else 
			{
			return res.send(err);
			}
			});
		}
			
	}

// login function

this.userLogin=function(req, res) {
		if(req.body.email)
		{
		 return User.findOne({"email":req.body.email},function( err, users) {
								if( !err ) 
								{
								console.log(users);
								 if(users)
								 {
								if(users.email==req.body.email && users.password==req.body.password)
								{
								users.loginstatus=true;
								users.save(function(err,data) {
									if (err){
										res.send(err);
									}
									else{	
										var obj={message:"login successful",id:data.id,loginstatus:data.loginstatus,email:data.email,name:data.name,modified:data.modified}																	
										return res.send(obj);
										}
									});
								}										
								}
							 else
							{
							 var obj={message:"email does not exist"};
							 return res.send(obj);
							 }
							} 
							else 
							{
							return res.send(err);
						}
			});
		}
			
	}

// logout function

this.userLogout=function(req, res) {
		if(req.body.email)
		{
		 return User.findOne({"email":req.body.email},function( err, users) {
			if( !err ) 
			{
			 if(users)
			  {
			if(users.email==req.body.email)
			{
			users.loginstatus=false;
			users.save(function(err,data) {
				if (err){
					res.send(err);
					}
				else{	
					var obj={message:"user successfully logout",loginstatus:data.loginstatus,modified:data.modified}																	
						return res.send(obj);
					}
				});
			}										
		 }
		 else
		{
		 var obj={message:"email does not exist"};
		 return res.send(obj);
		}
	} 
	else 
	{
	return res.send(err);
	}
});
		}
			
	}
	
return this;
}());

module.exports=userCtrl;
