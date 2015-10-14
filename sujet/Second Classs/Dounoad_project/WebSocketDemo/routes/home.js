
/*
 * GET home page : Seed the MongoDB data on 1st GET request
 */

exports.homeGet = function(req, res, commonHelper, personProvider, linkProvider){
        commonHelper.seedData(personProvider, linkProvider, function() {
        res.render('home');
    });
};

/*
 * POSTED home page : Saved its state in MongodDB
 */

exports.homePost = function (req, res, personProvider) {

    var newUserEmail = req.body.email;
    console.log("/Home posted Email :" + newUserEmail);

    personProvider.save({
        email: newUserEmail,
    }, function (error, docs) {
        if(error == null) {
            res.redirect('/d3demo');
        } else {
            res.render('home');
        }
    });

};