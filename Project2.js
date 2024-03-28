/* The program contains functions for handling user input, storing
data in local storage.
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/


let darkMode = false;

function load() {
    try {
        loadMainTheme();
    }
    catch (e) {
        console.error(error);
    }
}

function loadMainTheme() {
    document.body.style.backgroundImage = "url('audioPackage/day.jpg')";
    let container = document.getElementById("flexContainer");
    container.style.fontSize = "16pt";
    container.style.fontFamily = "Times New Roman, serif";
    container.style.fontFamily = "Times New Roman, serif";

    // Select all buttons in the document
    let buttons = document.querySelectorAll("button");

    // Loop through each button and apply the styles
    buttons.forEach(function (button) {
        button.style.fontSize = "16pt";
        button.style.fontFamily = "Times New Roman, serif";
    });
}

function switchDark() {
    // Toggles the darkMode variable
    darkMode = !darkMode;

    // Select the body element
    let body = document.body;

    // Check if darkMode is true, apply dark theme classes; otherwise, apply light theme classes
    if (darkMode) {
        body.classList.add('dark'); // Enable dark mode
        body.style.backgroundColor = 'black'; // Set background color to black
        body.style.color = 'white'; // Set text color to white

        // Optionally, change the background image to a dark-themed one
        body.style.backgroundImage = "url('audioPackage/dark.jpg')";

        // Tailwind CSS Dark mode class changes for other elements if necessary
        // For example, changing button background and text color
        document.querySelectorAll("button").forEach(button => {
            button.classList.add('bg-gray-800', 'text-white'); // Example classes for dark mode
            button.classList.remove('bg-gray-200', 'text-black'); // Removing light mode classes
        });
    } else {
        body.classList.remove('dark'); // Disable dark mode
        body.style.backgroundColor = 'white'; // Set background color to white
        body.style.color = 'black'; // Set text color to black

        // Optionally, change the background image back to a light-themed one
        body.style.backgroundImage = "url('audioPackage/day.jpg')";

        // Tailwind CSS Light mode class changes for other elements if necessary
        document.querySelectorAll("button").forEach(button => {
            button.classList.remove('bg-gray-800', 'text-white'); // Removing dark mode classes
            button.classList.add('bg-gray-200', 'text-black'); // Example classes for light mode
        });
    }
}

function saveData() {
    // Object to hold form data
    let formData = {};

    // Function to safely add field values if they're not empty
    function addFieldIfNotEmpty(fieldName, elementId) {
        const value = document.getElementById(elementId).value;
        if (value.trim() !== "") { // Check if the field is not just empty spaces
            formData[fieldName] = value;
        }
    }

    // Add fields only if they are filled
    addFieldIfNotEmpty("fullName", "fullName");
    addFieldIfNotEmpty("birthDate", "birthDate");
    addFieldIfNotEmpty("contactPhone", "contactPhone");
    addFieldIfNotEmpty("emailAddress", "emailAddress");
    addFieldIfNotEmpty("contactAddress", "contactAddress");
    addFieldIfNotEmpty("burialAddress", "burialAddress");
    addFieldIfNotEmpty("message", "message");
    addFieldIfNotEmpty("initials", "initials");

    // Initialize arrays for checkboxes
    formData.relationDeceased = [];
    formData.burialCemeterie = [];
    formData.burialMethod = [];
    formData.marker = [];

    // Capture checkboxes
    document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
        if (checkbox.checked) {
            if (checkbox.name === "relationDeceased[]") {
                formData.relationDeceased.push(checkbox.value);
            } else if (checkbox.name === "burialCemeterie[]") {
                formData.burialCemeterie.push(checkbox.value);
            } else if (checkbox.name === "burialMethod[]") {
                formData.burialMethod.push(checkbox.value);
            } else if (checkbox.name === "marker[]") {
                formData.marker.push(checkbox.value);
            }
        }
    });

    // Save formData to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved successfully!");

    // Function to clear all form inputs and checkboxes
    function clearFormInputs() {
        document.querySelectorAll('.inputField').forEach((input) => {
            input.value = ''; // Clear text inputs
        });
        document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
            checkbox.checked = false; // Uncheck checkboxes
        });
    }

    // Call the clear function to reset form fields
    clearFormInputs();
}

function loadData() {
    // Retrieve the stored data
    let storedData = localStorage.getItem("formData");

    if (storedData) {
        let formData = JSON.parse(storedData);

        // Populate form fields
        document.getElementById("fullName").value = formData.fullName;
        document.getElementById("birthDate").value = formData.birthDate;
        document.getElementById("contactPhone").value = formData.contactPhone;
        document.getElementById("emailAddress").value = formData.emailAddress;
        document.getElementById("contactAddress").value = formData.contactAddress;
        document.getElementById("burialAddress").value = formData.burialAddress;
        document.getElementById("message").value = formData.message;
        document.getElementById("initials").value = formData.initials;

        // Populate checkboxes
        formData.relationDeceased.forEach(value => {
            document.querySelector(`input[name="relationDeceased[]"][value="${value}"]`).checked = true;
        });
        formData.burialCemeterie.forEach(value => {
            document.querySelector(`input[name="burialCemeterie[]"][value="${value}"]`).checked = true;
        });
        formData.burialMethod.forEach(value => {
            document.querySelector(`input[name="burialMethod[]"][value="${value}"]`).checked = true;
        });
        formData.marker.forEach(value => {
            document.querySelector(`input[name="marker[]"][value="${value}"]`).checked = true;
        });

        alert("Form data loaded successfully!");
    } else {
        alert("No saved data found!");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('testLoad').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default button action
        loadData(); // Call your loadData function
    });
});



