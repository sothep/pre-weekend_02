//REQUIREMENTS FOR THE APP
var express = require('express');
var app = express();
var path = require('path');

//SOME DATA WE WILL WORK WITH
var cats = require('./public/data/cats');

//WHAT PORT ARE WE GOING TO BE ON? 5000? OR WHATEVER HEROKU DECIDES ON?
app.set("port", process.env.PORT || 5000);

//OUR DATA ROUTE
app.get('/data', function(req, res){
    res.send(cats);
});

//OUR CATCHALL ROUTE, HELPS US SERVE FILES
app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

//TURN THE DARN SERVER ON AND LISTEN FOR FOLKS TRYING TO CONNECT TO IT
app.listen(app.get("port"), function(){
    console.log("Listening on port: " , app.get("port"));
});

