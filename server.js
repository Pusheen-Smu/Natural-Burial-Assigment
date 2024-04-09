/* The is server.js file  which contains the code for creating a 
http server and handling client requests
Author(Group): 
    Abhishek Abhishek-(A00480219) (Group Leader)
    Madhur Sharma-(A00477319)
    Mariam Nasir-(A00460192)
    Preksha Joon-(A00469476)
    Ziyang Xia-(A00475502)
*/
// Object to store JSON data
let storageJSON = {};
// Importing express module
let express = require('express');
let app = express();
// Port number
let port = 1488;

// Use express.json() to automatically parse JSON bodies
app.use(express.json());

// This object will store the last saved JSON
let savedJson = { fullName: "John Doe",
birthDate: "",
contactPhone: "",
contactEmail: "",
contactAddress: "",
burialAddress: "",
relationDeceased: "family", // Defaulting to the first option
burialCemeterie: "Hybrid grounds", // Defaulting to the first option
burialMethod: "Shrouds", // Defaulting to the first option
burialMarker: "", // set a default value here if needed
message: "",
initials: ""};

app.post('/save', (req, res) => {
  // Save the JSON from the request body
  savedJson = req.body;
  res.send('JSON saved');
});

app.get('/download', (req, res) => {
  // Send the saved JSON back to the client
  res.json(savedJson);
  // Optionally clear savedJson if you need to free it after sending
  savedJson = {};
});
// Server listening on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});