var express = require("express");

var app = express();

// "/" -> "Hi There!"
app.get("/", function(req, res) {
    res.send("Hi There!"); 
});

// "/dog" -> "WOOF!"
app.get("/dog", function(req, res) {
    res.send("WOOF!");
    console.log("SOMEONE MADE A REQUEST TO DOG!");
});



// "/bye" -> "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// Listens for a pattern of /r/ followed by a string
app.get("/r/:subredditName", function(req, res) {
    console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " PAGE!");
})

// More complicated pattern route
app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    console.log(req.params);
    res.send("WELCOME TO A COMMENTS PAGE");
})

// Catchall route
app.get("*", function(req, res) {
    res.send("You are a star!");
});

// Tell express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});