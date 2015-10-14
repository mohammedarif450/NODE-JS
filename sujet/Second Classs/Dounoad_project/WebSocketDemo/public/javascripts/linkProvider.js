var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

LinkProvider = function (host, port) {
    this.db = new Db('node-mongo-socketDemo', new Server(host, port, { safe: true, auto_reconnect: true }, {}));
    this.db.open(function () { });
};

LinkProvider.prototype.getCollectionSafe = function (callback) {
    this.db.collection('links', { safe: true }, function (error, link_collection) {
        if (error) callback(error);
        else callback(null, link_collection);
    });
};


LinkProvider.prototype.getCollection = function (callback) {
    this.db.collection('links', function (error, link_collection) {
        if (error) callback(error);
        else callback(null, link_collection);
    });
};

LinkProvider.prototype.findAll = function (callback) {
    this.getCollection(function (error, link_collection) {
        if (error) callback(error)
        else {
            link_collection.find().toArray(function (error, results) {
                if (error) callback(error)
                else callback(null, results)
            });
        }
    });
};


LinkProvider.prototype.findById = function (id, callback) {
    this.getCollection(function (error, link_collection) {
        if (error) callback(error)
        else {
            link_collection.findOne({ _id: link_collection.db.bson_serializer.ObjectID.createFromHexString(id) }, 
                function (error, result) {
                    if (error) callback(error)
                    else callback(null, result)
            });
        }
    });
};

LinkProvider.prototype.save = function (links, callback) {
    this.getCollection(function (error, link_collection) {
        if (error) callback(error)
        else {
            if (typeof (links.length) == "undefined")
                links = [links];

            link_collection.insert(links, function () {
                callback(null, links);
            });
        }
    });
};

exports.LinkProvider = LinkProvider;