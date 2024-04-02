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
        
        

        // Optionally, change the background image to a dark-themed one

        // Tailwind CSS Dark mode class changes for other elements if necessary
        // For example, changing button background and text color
        document.querySelectorAll('.videoHelperBtn').forEach(button => {
            button.classList.add('bg-sky-500', 'text-black', 'text-2xl', 'rounded-full','border-amber-200','border-4'); // Example classes for dark mode
            button.classList.remove('bg-pink-300', 'text-white', 'text-2xl', 'rounded-full','border-pink-500','border-4'); // Removing light mode classes
        });
    } else {
        body.classList.remove('dark'); // Disable dark mode
       
        

        // Optionally, change the background image back to a light-themed one

        // Tailwind CSS Light mode class changes for other elements if necessary
        document.querySelectorAll('.videoHelperBtn').forEach(button => {
            button.classList.remove('bg-sky-500', 'text-black', 'text-2xl', 'rounded-full','border-amber-200','border-4'); // Removing dark mode classes
            button.classList.add('bg-pink-300', 'text-white', 'text-2xl', 'rounded-full','border-pink-500','border-4'); // Example classes for light mode
        });
    }
        document.querySelectorAll('input').forEach(input => {
        input.style.color = 'black'; // Set text color to black in dark mode
    });
}

