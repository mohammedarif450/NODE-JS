var Tutorial = require('./app/models/tutorialModel');

var tutorialCtrl=(function(){

this.getTutorialsAvailable=function(req,res){

Tutorial.find({},{'title':1,'Id':1,'Image':1,'Desc':1} , function(err, data) {
			if (err)
				res.send(err);
			res.send(data);
		});

}

this.addTutorialNew=function(req,res){

if(req.body.Id)
{
return Tutorial.findOne({"Id":req.body.Id},function( err, tutorials) {
			if( !err ) 
			{
			 var tutorial = new Tutorial();	
			tutorial.title= req.body.title;
			tutorial.Id= req.body.Id;
			tutorial.Image= req.body.Image;
			tutorial.Desc= req.body.Desc;
			tutorial.Outline= req.body.Outline;
       
			if(!tutorials)
			{
			tutorial.save(function(err,data) {
			if (err){
				res.send(err);
				}
				else{
				var obj={message:"tutorial successful saved",title:data.title,Id:data.Id,Image:data.Image,Desc:data.Desc,Outline:data.Outline,modified:data.modified}																	
				return res.send(obj);
				}
														
				});
			}
			 else
			{
			var obj={message:"tutorial already exist"};
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

this.getTutorialOutlines=function(req,res){
	if(req.params.Id)
		{
		 return Tutorial.findOne({"Id":req.params.Id},function( err,tutorials) {
				
			if(err ) 
			{
			 return res.send(err);
			}
			else
			{
			if(tutorials)
			  {
			 return res.send(tutorials);
			 }
			 else
			 {
			  return res.send({message:"no data available"});
			  }
			}
			});
								
		}
}

this.deleteTutorial=function(req,res){
		if(req.params.Id)
		{
		return Tutorial.remove({"Id":req.params.Id},function( err,tutorials) {
				  
		if(err ) 
		{
		return res.send(err);
		}
		else
		{
		    if(tutorials==0)
			{
			  return res.send({ message: 'Already deleted' });
			}
			else
			{
			return res.send({ message: 'Successfully deleted' });
			}
		}
		});
								
		}
}



return this;
}());
module.exports=tutorialCtrl;
