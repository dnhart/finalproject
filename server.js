// Include Server Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
var Profile = require("./models/profiles");
//comment out var data when going live ++++++++
var data = require('./jobs.json');
// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener
var mongoURL = process.env.MONGO_URL;
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("/dist"));

// -------------------------------------------------
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// MongoDB Configuration configuration
mongoose.connect(mongoURL  || 'mongodb://localhost:27017/jobtool');
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Route to get a User 

app.get("http://localhost:3001/api/Users", function(req, res){
  console.log("hello");
  
  // var request = req.body.email;

  res.json({test: "hello"});
  // console.log("request from get: "+request)
  // Profiles.find({email:request}).exec(function(err, doc) {

  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //       res.send(doc);
  //     }
  //   });
});

app.post("http://localhost:3001/api/Users", function(req, res){
  var newUser = new Profile(req.body);
  console.log("new profile data: "+req.body);
  newUser.save(function(er, doc){
    if (err){
      console.log(err);
    } else{
      res.send(doc);
    }
  });

});

// // Route to get all saved articles
// app.get("/api/saved", function(req, res) {

//   Job.find({})
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// // Route to add an article to saved list
// app.post("/api/saved", function(req, res) {
//   var newJob = new Job(req.body);

//   console.log(req.body);

//   newJob.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// // Route to delete an article from saved list
// app.delete("/api/saved/", function(req, res) {

//   var url = req.param("url");

//   Job.find({ url: url }).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });
// });

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
