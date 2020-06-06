const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("search");
});


app.get("/results", (req, res) => {
  let search = req.query.search;
  let url = `https://www.omdbapi.com/?s=${search}&apikey=thewdb`;
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // Convert string to JSON
      let data = JSON.parse(body)
      
      res.render("results", {data: data});
    }
  })
})


// request('https://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(error, respon))

app.listen(process.env.PORT, process.env.IP, () => {
  console.log("Movie app server started!!!");
});