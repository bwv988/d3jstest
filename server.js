// Fire up small nodejs server.

var express = require("express");

var app = express();

app.use(express.static("public"));

app.listen(8080);

console.log("Listening on port 8080: http://localhost:8080")