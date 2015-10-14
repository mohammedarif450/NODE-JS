// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port     = process.env.PORT || 3000; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test'); // connect to our "test" database 

var UserCtrl     = require('./app/controller/userController');
var TutorialCtrl     = require('./app/controller/tutorialController');

// create our router
var router = express.Router();
// middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});
// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});
router.get('/doc/index.html', function(req, res) {
	res.render('index.html');
});
// -------------------------------------------------------------------------
router.route('/credentials/registration').post(UserCtrl.userRegistration);
router.route('/credentials/login').put(UserCtrl.userLogin);
router.route('/credentials/logout').put(UserCtrl.userLogout);
//--------------------------------------------------------------------------
router.route('/tutorials/available').get(TutorialCtrl.getTutorialsAvailable);
router.route('/tutorials/new').post(TutorialCtrl.addTutorialNew);
router.route('/tutorials/outlines/:Id').get(TutorialCtrl.getTutorialOutlines);
router.route('/tutorials/delete/:Id').delete(TutorialCtrl.deleteTutorial);

app.use('/api', router);
app.listen(port);
console.log('running on port ' + port);
