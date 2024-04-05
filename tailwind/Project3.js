function submitToServer() {
        serverUrl = 'http://mapp79@ugdev.cs.smu.ca:1488';
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

function downloadFromServer() {
    serverUrl = 'http://mapp79@ugdev.cs.smu.ca:1488';
    // Final Store JSON object in local browser storage;
    fetch(`${serverUrl}/download`)
    .then(response => response.json())
    .then(data => console.log(data));
    //console log the data
    window.localStorage.setItem('downloadedJson', JSON.stringify(data));
}
