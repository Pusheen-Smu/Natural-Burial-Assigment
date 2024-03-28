//
let darkMode = false;

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

        // Tailwind CSS Light mode class changes for other elements if necessary
        document.querySelectorAll("button").forEach(button => {
            button.classList.remove('bg-gray-800', 'text-white'); // Removing dark mode classes
            button.classList.add('bg-gray-200', 'text-black'); // Example classes for light mode
        });
    }
}