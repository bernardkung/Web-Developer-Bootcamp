const request = require('request');

let url = "https://api.covid19api.com/summary"

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var parsedData = JSON.parse(body);
    console.log(parsedData);
  };
});
