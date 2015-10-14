var express = require("express");
var multer = require('multer');
var path = require("path");
var fs = require("fs");
var app = express();
var done = false;

app.use(multer({
    dest: './uploads/',
    rename: function(fieldname, filename) {
        return filename + Date.now();
    },
    onFileUploadStart: function(file) {
       // console.log(file.originalname + ' is starting ...')
    },
    onFileUploadData: function(file, data) {
        //console.log(data.length + ' of ' + file.fieldname + ' arrived');
    },
    onFileUploadComplete: function(file) {
       // console.log(file.fieldname + ' uploaded to  ' + file.path)
        done = true;
    }
}));

app.get('/', function(req, res) {
    res.sendfile("index.html");
});
app.get('/filelist', function(req, res) {

    var fileArray = [];
    fs.readdir('./uploads/', function(err, files) {
        if (err) {
            throw err;
        }

        files.map(function(file) {
            return path.join('./uploads/', file);
        }).filter(function(file) {
            return fs.statSync(file).isFile();
        }).forEach(function(file) {
            //console.log("%s (%s)", file, path.extname(file));
            //fileArray.push(file);
            fileArray.push(path.basename(file));
        });
        res.send({
            filesName: fileArray
        });
    });

});

app.get('/download/:file(*)', function(req, res, next) {
    var file = req.params.file
    var path = __dirname + '/uploads/' + file;
    //console.log(path);
    res.download(path);
});

app.post('/api/photo', function(req, res) {
    if (done == true) {
       // console.log(req.files);
        var fileArray = [];
        fs.readdir('./uploads/', function(err, files) {
            if (err) {
                throw err;
            }

            files.map(function(file) {
                return path.join('./uploads/', file);
            }).filter(function(file) {
                return fs.statSync(file).isFile();
            }).forEach(function(file) {
                //console.log("%s (%s)", file, path.extname(file));
                //fileArray.push(file);
                fileArray.push(path.basename(file));
            });
            res.send({
                filesName: fileArray
            });
        });


    }
});

app.listen(3000, function() {
    console.log("Working on port 3000");
});
