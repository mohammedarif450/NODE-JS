var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TutorialSchema   = new Schema({
	
	title:{
		type    : String,
		require : true
		},
	Id:{
		type:String,
		require:true
		},
	Image:{
		type:String
		},
	Desc:{
		type:String,
		require:true
		},
	Outline:[
	         {
		Id:{type:String,require:true},
		label:{type:String,require:true},
		 vLink:{type:String}
		 }
	        ],
	modified:{
		type:Date,
		default:Date.now
			}
});
module.exports = mongoose.model('Tutorial', TutorialSchema);
