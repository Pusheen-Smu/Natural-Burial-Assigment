/* The program contains functions for handling user input, storing
data in local storage.
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/
// Function to submit user input data
function submitFormData() {
    // Create JSON object with user input data
    let formData = {
        fullName: document.getElementById("fullName").value,
        birthDate: document.getElementById("birthDate").value,
        contactPhone: document.getElementById("contactPhone").value,
        contactAddress: document.getElementById("contactAddress").value,
        burialAddress: document.getElementById("burialAddress").value,
        relationDeceased: document.querySelector('input[name="relationDeceased"]:checked').value,
        burialCemeterie: document.querySelector('input[name="burialCemeterie"]:checked').value,
        burialMethod: document.querySelector('input[name="burialMethod"]:checked').value,
        marker: document.querySelector('input[name="marker"]:checked').value,
        message: document.getElementById("message").value,
        initials: document.getElementById("initials").value
    };

    // Store JSON object in local browser storage
    if (typeof Storage !== "undefined") {
        window.localStorage.setItem('formData', JSON.stringify(formData));
    } else {
        console.log("Local storage is not available.");
    }
    // Reset form fields after submission
    document.getElementById("burialForm").reset();
}

// Function to retrieve user data from local browser storage and populate the webpage
function populateFormFields() {
    // Retrieve JSON object from local storage
    let storedFormData;
    if (typeof Storage !== "undefined") {
        storedFormData = JSON.parse(localStorage.getItem('formData'));
    } else {
        console.log("Local storage is not available.");
    }

    // Check if there's data stored
    if (storedFormData) {
        // Populate input fields with stored data
        document.getElementById("fullName").value = storedFormData.fullName;
        document.getElementById("birthDate").value = storedFormData.birthDate;
        document.getElementById("contactPhone").value = storedFormData.contactPhone;
        document.getElementById("contactAddress").value = storedFormData.contactAddress;
        document.getElementById("burialAddress").value = storedFormData.burialAddress;
        document.getElementById("message").value = storedFormData.message;
        document.getElementById("initials").value = storedFormData.initials;
        // Check the radio buttons based on stored data
        document.getElementById(storedFormData.relationDeceased).checked = true;
        document.getElementById(storedFormData.burialCemeterie).checked = true;
        document.getElementById(storedFormData.burialMethod).checked = true;
        document.getElementById(storedFormData.marker).checked = true;


    }
}
