const express = require("express");
const server = express();
const port = 3026;

// Declare obj object with default values
let obj = { name: "John Doe", relationDeceased: "family", burialCemeterie: "Hybrid grounds", burialMethod: "Shrouds", marker: "markerGPS", message: "", initials: "" };

// Enable JSON parsing middleware
server.use(express.json());

// Enable URL-encoded parsing middleware
server.use(express.urlencoded({ extended: true }));

// Allow cross-domain requests
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

server.use(allowCrossDomain);

// POST endpoint to receive uploaded data
server.post("/myPost", function(req, res) {
  // log the "value" in the "name":"value" pair received
  console.log("req.body.name:" + req.body.name);
  // define a new JSON object to be returned
  let obj = { name: "John Doe", relationDeceased: "family",
   burialCemeterie: "Hybrid grounds", burialMethod: "Shrouds",
    marker: "markerGPS", message: "", initials: "" };
    return res.status(200).send(obj);
});

// GET endpoint to send stored data to the client
server.get("/myGet", function(req, res) {
    return res.status(200).send(obj);
});

server.listen(port, function() {
  console.log("Listening on port 3026");
});
