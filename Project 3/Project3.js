/* The program contains functions for handling user input, storing
data in local storage.
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/

function submitToServer() {
    let serverUrl = 'http://ugdev.cs.smu.ca:1488';
    let finalData = getInfo(); // Assuming getInfo() returns the data to be sent

    // Sending the data to the server
    fetch(`${serverUrl}/submit`, { // Assuming the endpoint is /submit
        method: 'POST', // Method is POST for sending data
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(finalData) // Stringify the finalData object to send as the request body
    })
    .then(response => response.text()) // Assuming the server response is not in JSON format
    .then(result => {
        document.getElementById("submitResponse").innerHTML= "YOUR RESPONSE HAS BEEN SUBMITTED";
        document.getElementById("submitBn").classList.add('bg-green-400', 'text-black');
    })
    .catch(error => console.error('Error:', error));

    // Assuming submitResponse is a function you have defined for handling something after submission
    // The timing might need adjustment based on your needs
    setTimeout(submitResponse, 20000);
}

function downloadFromServer() {
    const serverUrl = 'http://ugdev.cs.smu.ca:1488';

    // Fetch JSON object from the server
    fetch(`${serverUrl}/download`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Store the fetched data in localStorage
        window.localStorage.setItem('downloadedData', JSON.stringify(data));
        window.localStorage.setItem('formmData', JSON.stringify(data));
        window.localStorage.setItem('submitmitData', JSON.stringify(data));
        console.log(data); // Log the downloaded data
         // Assuming populateFormFields() will use the fetched data
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
    populateFormFields();
}
