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
let storageJSON = {};
let express = require('express');
let app = express();
let port = 1488;

// Use express.json() to automatically parse JSON bodies
app.use(express.json());

// This object will store the last saved JSON
let savedJson = {};

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
