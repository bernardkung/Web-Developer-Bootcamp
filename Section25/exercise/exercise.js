// Import libraries
var express = require("express");

// Initialize express
var app = express();


// Set Routes

// Index
app.get("/", function (req, res) {
  console.log("Test")
  res.send("Hi there, welcome to my assignment!");
});

// Speak
app.get("/speak/:animal", function(req, res){
  
  // Define sound dictionary
  let animals = {
    pig: "'Oink'",
    cow: "'Moo'",
    dog: "'Woof'",
  }
  
  // Capture request params
  let requestAnimal = req.params.animal.toLowerCase();
  let requestSound = animals[requestAnimal];
  
  // Set response string
  let resString;
  
  // Check if the animal has a sound in the dictionary
  if (requestSound) {
    resString = `The ${requestAnimal} says ${requestSound}`;
  }
  else {
    resString = `Who knows what the ${requestAnimal} says?`;
  }
  
  // Return result
  res.send(resString);
});

// Repeat
app.get("/repeat/:str/:num", function(req, res) {
  // Capture request params
  let str = req.params.str;
  let num = req.params.num;
  // Compose response string
  let resString = "";
  for (var n = 0; n < num; n++) {
    resString += str + " ";
  }
  // Return response
  res.send(resString);
});

// Catchall
app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?!");
});


// Start server
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Exercise server has started!!!");
});