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
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS package
const app = express();
const port = 1488;

// Use CORS middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// default value
let storedData = {
    fullName: 'John Doe',
    birthDate: '',
    contactPhone: '',
    contactEmail: '',
    contactAddress: '',
    burialAddress: '',
    relationDeceased: 'family',
    burialCemeterie: 'hybrid_grounds',
    burialMethod: 'shrouds',
    burialMarker: 'gps Location',
    message: '',
    initials: ''
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
    console.log('Data sent:', storedData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
