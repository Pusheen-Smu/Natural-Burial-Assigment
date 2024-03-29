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
function getInfo() {
    // Create JSON object with user input data
    let relation;
    let checkRadio1 = document.querySelector(
        'input[name="relationDeceased"]:checked');
    if(checkRadio1 != null) {
       relation= checkRadio1.id
    } else {
        relation = "None";
    }
    let cemeterie;
    let checkRadio2 = document.querySelector(
        'input[name="burialCemeterie"]:checked');
    if(checkRadio2 != null) {
       cemeterie= checkRadio2.id
    } else {
        cemeterie = "None";
    }
    let method;
    let checkRadio3 = document.querySelector(
        'input[name="burialMethod"]:checked');
    if(checkRadio3 != null) {
       method= checkRadio3.id
    } else {
        method = "None";
    }
    let marker;
    let checkRadio4 = document.querySelector(
        'input[name="marker"]:checked');
    if(checkRadio4 != null) {
       marker= checkRadio4.id
    } else {
        marker = "None";
    }

    
    const formData = {
        fullName: document.getElementById("fullName").value,
        birthDate: document.getElementById("birthDate").value,
        contactPhone: document.getElementById("contactPhone").value,
        contactEmail: document.getElementById("emailAddress").value,
        contactAddress: document.getElementById("contactAddress").value,
        burialAddress: document.getElementById("burialAddress").value,
        relationDeceased: relation,
        burialCemeterie: cemeterie,
        burialMethod: method,
        burialMarker: marker,
        message: document.getElementById("message").value,
        initials: document.getElementById("initials").value
    };
    return formData;

}

// Function to autosave info in local storage r regular intervals
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
            console.log(JSON.parse(window.localStorage.getItem("submitData")));
        } else {
            console.log("Local storage is not available.");
        }
   
}
