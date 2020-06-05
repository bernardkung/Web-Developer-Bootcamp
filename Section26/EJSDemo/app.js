const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  // res.send("You fell in love with " + thing);
  res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res) {
  var posts= [
    {title: "Post 1", author: "Jamie"},
    {title: "Post 2", author: "Quinn"},
    {title: "Post 3", author: "Riley"},
    ];
    
    res.render("posts", {posts: posts});
})

// Start server
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server is listening!!!");
});