/* The program contains functions for handling user input, storing
data in local storage..
Also this program handles the upload data to server and download 
data from server and populate the webpage
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/
// Function to get user input data
function getInfo() {

    //function to get value from radio button
    function checkRadio(radio){
        let variable;
    if(radio != null) {
       variable= radio.id
    } else {
        variable = "None";
    }
    return variable;
    }
    
    //finding if radio button is checked
    let relation = document.querySelector(
        'input[name="relationDeceased"]:checked');
    let cemeterie = document.querySelector(
         'input[name="burialCemeterie"]:checked');
    let method = document.querySelector(
            'input[name="burialMethod"]:checked');
    let marker = document.querySelector(
            'input[name="marker"]:checked');

    // Create JSON object with user input data
    const formData = {
        fullName: document.getElementById("fullName").value,
        birthDate: document.getElementById("birthDate").value,
        contactPhone: document.getElementById("contactPhone").value,
        contactEmail: document.getElementById("emailAddress").value,
        contactAddress: document.getElementById("contactAddress").value,
        burialAddress: document.getElementById("burialAddress").value,
        relationDeceased: checkRadio(relation),
        burialCemeterie: checkRadio(cemeterie),
        burialMethod: checkRadio(method),
        burialMarker: checkRadio(marker),
        message: document.getElementById("message").value,
        initials: document.getElementById("initials").value
    };
    return formData;

}

// Function to autosave info in local storage is regular intervals 
function autoSave() {
    const saveData = getInfo();
    // Store JSON object in local browser storage
    if (typeof Storage !== "undefined") {
        window.localStorage.setItem("formmData", JSON.stringify(saveData));
    } else {
        console.log("Local storage is not available.");
    }
}

setInterval(autoSave, 6000); // autoSave every 1 minutes


// Function to retrieve user data from local browser storage and populate the webpage
function populateFormFields() {
    switchDark();
    switchDark();
    // Retrieve JSON object from local storage
    let storedFormData;
    if (typeof Storage !== "undefined") {
        storedFormData = JSON.parse(localStorage.getItem("formmData"));
        console.log(JSON.parse(window.localStorage.getItem("formmData")));
    } else {
        console.log("Local storage is not available.");
    }

    // Check if there's data stored
    if (storedFormData) {
        // Populate input fields with stored data
        document.getElementById("fullName").value = storedFormData.fullName;
        document.getElementById("birthDate").value = storedFormData.birthDate;
        document.getElementById("contactPhone").value = storedFormData.contactPhone;
        document.getElementById("emailAddress").value = storedFormData.contactEmail;
        document.getElementById("contactAddress").value = storedFormData.contactAddress;
        document.getElementById("burialAddress").value = storedFormData.burialAddress;
        document.getElementById("message").value = storedFormData.message;
        document.getElementById("initials").value = storedFormData.initials;
        // Check the radio buttons based on stored data
         
        if( !(storedFormData.relationDeceased=="None")){
            document.getElementById(storedFormData.relationDeceased).checked=true;
        }
        
        if(!(storedFormData.burialCemeterie=="None")){
            document.getElementById(storedFormData.burialCemeterie).checked=true;
        }
        
        if(!(storedFormData.burialMethod=="None")){
            document.getElementById(storedFormData.burialMethod).checked=true;
        }
        
        if(!(storedFormData. burialMarker=="None")){
            document.getElementById(storedFormData. burialMarker).checked=true;
        }
        
    }
}

//Function to make final submission
function submit() {
    
        const finalData = getInfo();
        // Final Store JSON object in local browser storage
        if (typeof Storage !== "undefined") {
            window.localStorage.setItem('submitmitData', JSON.stringify(finalData));
           
        } else {
            console.log("Local storage is not available.");
        }
        document.getElementById("submitResponse").innerHTML= "YOUR RESPONSE HAS BEEN SUBMITTED";
        document.getElementById("submitBn").classList.add('bg-green-400', 'text-black');
// the timer to show that data is submitted and message will be there for
// 20 seconds and changes the color of button to green
        setTimeout(submitResponse,20000);
}
//function to help confirm submission
function submitResponse() {
    document.getElementById("submitResponse").innerHTML="";
    document.getElementById("submitBn").classList.add('bg-rose-500', 'text-black');
}
// Functions for upload and download the data
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


    window.localStorage.setItem('downloadedData', JSON.stringify(finalData));
    window.localStorage.setItem("formmData", JSON.stringify(finalData));
    window.localStorage.setItem('submitmitData', JSON.stringify(finalData));
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
    populateFormFields();
}
