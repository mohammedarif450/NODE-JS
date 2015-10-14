var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	
	name:{
		type:String,
		require:true
		},
	email:{
		type:String,
		require:true
		},
	password:{
		type:String,
		require:true
		},
	loginstatus:{
		type:Boolean,
		require:true
		},
	modified:{
		type:Date,
		default:Date.now
			}
});
module.exports = mongoose.model('User', UserSchema);