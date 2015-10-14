//Example 1
//Error handling
//var n = 2;
//var d = 0;
//try {
//    var c = n / d;
//    if (c == Infinity)
//    {
//        throw new Error("This error is caused by invalid operation...");
//    }
//}
//catch (err)
//{
//    console.log(err);

//}


//Example 2
//Error Logging
//Install log4js
//var log4js = require('log4js');
//var logger = log4js.getLogger();
//logger.info('Application is Running...');
//logger.warn('Module can not be loaded...');
//logger.error('Saved data was error...');
//logger.fatal('Server could not process...');
//logger.debug('some debug Message...');


//Example 3
//Log file

//var log4js = require('log4js');
//log4js.loadAppender('file');
//log4js.addAppender(log4js.appenders.file('h:\Node JS APP\ErrorHandling\ErrorHandling.log'), 'ErrorHandling');

//var logger = log4js.getLogger('ErrorHandling');
//logger.info('Application is Running...');
//logger.warn('Module can not be loaded...');
//logger.error('Saved data was error...');
//logger.fatal('Server could not process...');
//logger.debug('some debug Message...');


//Example 4
//var EventEmitter = require('events').EventEmitter; 
//var myEmitter = new EventEmitter;
//var connection = function(id){
//    // do something
//    console.log('client id: ' + id);
//};
//myEmitter.on('connection', connection);//If you use the on() method, it means this event listener will listen for the event forever until the application closes.
//myEmitter.on('message', function(msg){
//    // do something
//    console.log('message: ' + msg);
//});


//myEmitter.emit('connection', 6);
//myEmitter.emit('connection', 8);
//myEmitter.emit('message', 'this is the first message');
//myEmitter.emit('message', 'this is the second message');
//myEmitter.emit('message', 'welcome to nodejs');

//Example 5
//If you plan to listen for the event once, you can use the once() method.
//var EventEmitter = require('events').EventEmitter;
//var myEmitter = new EventEmitter;
//myEmitter.once('message', function(msg){
//    // do something
//    console.log('message: ' + msg);
//});


//myEmitter.emit('message', 'this is the first message');
//myEmitter.emit('message', 'this is the second message');
//myEmitter.emit('message', 'welcome to nodejs');

//Example 6
//Remove Events
//To remove the event listener, call removeListener(). This function needs an event name and a function variable for parameters.
//Here is a sample code for how to remove the 'connection' event.

//var EventEmitter = require('events').EventEmitter;
//var myEmitter = new EventEmitter;
//// functions
//var connection = function(id){
//    // do something
//    console.log('client id: ' + id);
//};

//var message = function(msg){
//    // do something
//    console.log('message: ' + msg);
//};

//// waiting event
//myEmitter.on('connection', connection);
//myEmitter.on('message', message);

//// send message
////myEmitter.emit('connection', 6);
////myEmitter.emit('message', 'welcome to nodejs for client 6');
//// remove event
//myEmitter.removeListener('connection', connection);
//myEmitter.removeListener('message', message);

//// test to send message
//myEmitter.emit('connection', 10);
//myEmitter.emit('message', 'welcome to nodejs for client 10');
