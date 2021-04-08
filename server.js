// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



//1. I can get IP address, preferred languages (from header Accept-Language) and system infos (from header user=Agent) from my device.

//Example Usage:
//[base url]/api/whoami

// your first API endpoint... 
newObject = {};
app.get("/api/whoami/", function (req, res) {
// true use rIP address - security issues !!
//app.enable('trust proxy')
// const ipaddress = req.header('ip')

const language = req.header('Accept-Language')
const software = req.header('User-Agent')
const ipaddress = "127.0.0.1"
//  newObject.userAgent = req.headers('User-Agent')
res.json({
  ipaddress,
  language,
  software,
})
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
