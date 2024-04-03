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
        setTimeout(submitResponse,20000)
   
}
//function to help confirm submission
function submitResponse() {
    document.getElementById("submitResponse").innerHTML="";
    document.getElementById("submitBn").classList.add('bg-rose-500', 'text-black');
}
