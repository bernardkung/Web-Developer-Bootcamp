// Load libraries
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Initialize library requirements
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// Set global variables
var friends = ["Jamie", "Riley", "Blaine"];


// Set Routes
app.get("/", function(req, res) {
  res.render("home");
})

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
})


app.post("/addFriend", function(req, res) {
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
})


// Start Server
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started!");
})