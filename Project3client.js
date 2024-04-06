// define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:3026";

// Declare obj object with default values
let obj = { name: "John Doe", relationDeceased: "family", burialCemeterie: "Hybrid grounds", burialMethod: "Shrouds", marker: "markerGPS", message: "", initials: "" };

// Function to upload data to the server
function post() {
    const obj = JSON.parse(localStorage.getItem("formData"));
    if (obj) {
      $.post(SERVER_URL + "/myPost", obj, function(response) {
        console.log(response);
      }).fail(function(error) {
        console.error(error);
      });
    } else {
      console.error("No data to upload");
    }
  }
  
  // Function to download data from the server and populate the webpage
  function get() {
    $.get(SERVER_URL + "/myGet", function(data) {
      console.log(data);
      if (data) {
        // Populate the webpage with downloaded data
        populateWebpage(data);
      } else {
        console.error("No data available to download");
      }
    }).fail(function(error) {
      console.error(error);
    });
  }
  
  // Function to populate the webpage with downloaded data
  function populateWebpage(data) {
    // Populate the form fields with the downloaded data
  }
