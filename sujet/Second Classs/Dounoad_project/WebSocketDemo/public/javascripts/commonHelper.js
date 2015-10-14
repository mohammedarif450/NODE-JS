CommonHelper = function () {
};

CommonHelper.prototype.getPersistedDataCount = function (provider, callback) {
    provider.findAll(function (error, docs) {
        var data = 0;
        if (error == null) {
            callback(docs.length);
        }
        else {
            callback(data);
        }
    });
}


CommonHelper.prototype.seedData = function (personProvider, linkProvider, callback) {
    personProvider.findAll(function (error, docs) {
        var data = 0;
        if (error == null) {
            if (docs.length == 0) {
                seedPeople(personProvider, function () {
                    seedLinks(linkProvider, callback);
                });
            } else {
                callback();
            }
        }
        else {
            callback();
        }
    });
}


function seedPeople(personProvider, callback) {
    console.log('No existing users were found so seeding people data');
    personProvider.save(
        [
            { "email": "andy.monks@gmail.com" },
            { "email": "ryanW@gmail.com" },
            { "email": "sarah2008@gmail.com" },
            { "email": "sarahb@hotmail.com" },
            { "email": "sachabarber@gmail.co.uk" }
        ]
        , function (error, docs) {
            if (error != null) {
                console.log("There was an error seeding the data, bugger all can be done....ooops");
            }
            else {
                console.log('There are now ' + docs.length + ' users');
            }
            callback();
        });
}

function seedLinks(linkProvider, callback) {
    console.log('No existing links were found so seeding link data');
    linkProvider.save(
        [
            { "source": "andy.monks@gmail.com", "target": "ryanW@gmail.com" },
            { "source": "andy.monks@gmail.com", "target": "sarah2008@gmail.com" },
            { "source": "andy.monks@gmail.com", "target": "sachabarber@gmail.co.uk" }
        ]
        , function (error, docs) {
            if (error != null) {
                console.log("There was an error seeding the data, bugger all can be done....ooops");
            }
            else {
                console.log('There are now ' + docs.length + ' links');
            }
            callback();
        });
}

    exports.CommonHelper = CommonHelper;