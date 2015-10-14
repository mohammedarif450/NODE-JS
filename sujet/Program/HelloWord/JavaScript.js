var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test'); // connect to our "test" database 
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    modified: {
        type: Date,
        default: Date.now
    }
});
var User = mongoose.model('abctest', UserSchema);


function userRegistration() {


    var user = new User();
    user.name = "saurabh123";
    user.email = "abc@gmail.com";
    user.password = "99999";

    if (user) {
        user.save(function (err, data) {
            console.log(data);
        });
    }
    else {
        console.log("some error");
    }


}
userRegistration();
