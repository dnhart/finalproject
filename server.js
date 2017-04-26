// Include Server Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
// var Job = require("./server/model");
//comment out var data when going live ++++++++
var data = require('./jobs.json');
// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});



// -------------------------------------------------
//Route to get users agent and IP 
// app.post("/logger",function(req, res, next) {

//       userdata = JSON.parse(localStorage.profile),
//     user ={
//             agent: userdata.agent,
//             ip: userdata.ip
//           },
//   // var user = {
//   //   agent: req.headers['user-agent'], // User Agent we get from headers
//   //   referrer: req.headers['referrer'], //  Likewise for referrer
//   //   ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress, // Get IP - allow for proxy
//   //   screen: { // Get screen info that we passed in url post data
//   //     width: req.param('width'),
//   //     height: req.param('height')
//   //   }
//   // };
//   // Store the user in your database
//   // User.create(user)...
//     res.send(user);
// });


//comment out this when going live ++++++++++
// app.get("/logger", function(req, res) {
//   res.send(data);
// });



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
  res.sendFile(__dirname + "./dist/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
