// Define default data structure for storing form data
let defaultJSON = {
    "fullName": "",
    "initials": "",
    "dateOfBirth": "",
    "relationWithDeceased": "",
    "address": "",
    "phoneNumber": "",
    "email": "",
    "burialLocation": "",
    "naturalBurialCemeterie": "",
    "burialMethod": "",
    "markerOptions": "",
    "personalMessage": ""
};

// Save the default structure to localStorage on page load
window.localStorage.setItem("autoSave", JSON.stringify(defaultJSON));

// Function to collect information from form and construct JSON object
function collectInfo() {
    let infoJSON = {
        "fullName": document.getElementById("fullName").value,
        "initials": document.getElementById("initials").value,
        "dateOfBirth": document.getElementById("birthDate").value,
        "relationWithDeceased": document.querySelector('input[name="relationDeceased"]:checked')?.value,
        "address": document.getElementById("contactAddress").value,
        "phoneNumber": document.getElementById("contactPhone").value,
        "email": document.getElementById("emailAddress").value,
        "burialLocation": document.getElementById("burialAddress").value,
        "naturalBurialCemeterie": document.querySelector('input[name="burialCemeterie"]:checked')?.value,
        "burialMethod": document.querySelector('input[name="burialMethod"]:checked')?.value,
        "markerOptions": document.querySelector('input[name="marker"]:checked')?.value,
        "personalMessage": document.getElementById("message").value
    };
    return infoJSON; // Ensure you return the constructed object
}

// Function to automatically save form data every 10 minutes
function autoSaveInfo() {
    try {
        let autoSaveJSON = collectInfo();
        window.localStorage.setItem("autoSave", JSON.stringify(autoSaveJSON));
    } catch (e) {
        console.error("Error saving autoSave data:", e);
    }
}

// Correct usage of setInterval to periodically call autoSaveInfo
setInterval(autoSaveInfo, 600000); // autoSave every 10 minutes

// Function to load auto-saved data from localStorage and populate the form
function loadAutoSave() {
    let autoSaveJSON = window.localStorage.getItem("autoSave"); // No need to parse here yet
    if (autoSaveJSON != null) {
        try {
            let autoSave = JSON.parse(autoSaveJSON); // Correct place to parse

            // Populate form fields with auto-saved data
            document.getElementById("fullName").value = autoSave.fullName || '';
            document.getElementById("initials").value = autoSave.initials || '';
            document.getElementById("birthDate").value = autoSave.dateOfBirth || '';
            document.getElementById("contactAddress").value = autoSave.address || '';
            document.getElementById("contactPhone").value = autoSave.phoneNumber || '';
            document.getElementById("emailAddress").value = autoSave.email || '';
            document.getElementById("burialAddress").value = autoSave.burialLocation || '';
            document.getElementById("message").value = autoSave.personalMessage || '';

            // Populate radio buttons with auto-saved selections
            if (autoSave.relationWithDeceased) {
                let relationRadio = document.querySelector(`input[name="relationDeceased"][value="${autoSave.relationWithDeceased}"]`);
                if (relationRadio) relationRadio.checked = true;
            }
            if (autoSave.naturalBurialCemeterie) {
                let cemeteryRadio = document.querySelector(`input[name="burialCemeterie"][value="${autoSave.naturalBurialCemeterie}"]`);
                if (cemeteryRadio) cemeteryRadio.checked = true;
            }
            if (autoSave.burialMethod) {
                let methodRadio = document.querySelector(`input[name="burialMethod"][value="${autoSave.burialMethod}"]`);
                if (methodRadio) methodRadio.checked = true;
            }
            if (autoSave.markerOptions) {
                let markerRadio = document.querySelector(`input[name="marker"][value="${autoSave.markerOptions}"]`);
                if (markerRadio) markerRadio.checked = true;
            }
        } catch (e) {
            console.log("Error parsing autoSave data:", e);
        }
    }
}

function submit() {
    // send to server --> we dont do server things in phase 2
    submitSuc();
}
