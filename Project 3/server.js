/* The program contains functions for handling user input, storing
data in local storage.
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/
// Function to get user input data
// how to use
// 1. put it to your server
// 2. node server.js
// 3. you can use client
// 4. kill terminal and port on server as server port wont refresh
// 5. restart server.js
let express = require('express');
let app = express();
let port = 1488;

// Use express.json() to automatically parse JSON bodies
app.use(express.json());

// This object will store the last saved JSON
let savedJson = const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS package
const app = express();
const port = 1488;

// Use CORS middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for simplicity. added some value to prevent null
let storedData = {
    fullName: "Saint Mary's University",
    birthDate: '01/01/1802',
    contactPhone: '9024205400',
    contactEmail: 'welcome@smu.ca',
    contactAddress: '923 Robie Halifax',
    burialAddress: '923 Robie Halifax',
    relationDeceased: 'others',
    burialCemeterie: 'hybrid_grounds',
    burialMethod: 'treePod',
    burialMarker: 'wooden Plank',
    message: "Our Campus is based on Mi'kma'ki, the ancestral and uncoded territory of the Mi'kmaq",
    initials: 'SMU'
  };

app.post('/submit', (req, res) => {
    // Store the incoming JSON in memory
    storedData = req.body;
    console.log('Data received:', storedData);
    // Respond to the client to acknowledge receipt
    res.send('Data has been received and stored.');
});

app.get('/download', (req, res) => {
    // Send the stored JSON back to the client
    if (Object.keys(storedData).length) {
        res.json(storedData);
    } else {
        res.status(404).send('No data found');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});;

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
