/* The purpose of this file is to provide functions to our toggle switch button 
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/
let darkMode = false;

function switchDark() {
    // Toggles the darkMode variable
    darkMode = !darkMode;

    // Select the body element
    let body = document.body;

    // Check if darkMode is true, apply dark theme classes; otherwise, apply light theme classes
    if (darkMode) {
        body.classList.add('dark'); // Enable dark mode

        // Tailwind CSS Dark mode class changes for other elements 
        // changing audio button background and text color
        document.querySelectorAll('.videoHelperBtn').forEach(button => {
            button.classList.add('bg-sky-500', 'text-black', 'text-2xl', 'rounded-full','border-amber-200','border-4','mb-4'); // Example classes for dark mode
            button.classList.remove('bg-pink-300', 'text-black', 'text-2xl', 'rounded-full','border-pink-500','border-4','mb-4'); // Removing light mode classes
        });
    } else {
        body.classList.remove('dark'); // Disable dark mode

        // Tailwind CSS Light mode class changes for other elements
        // changing audio button background and text color
        document.querySelectorAll('.videoHelperBtn').forEach(button => {
            button.classList.remove('bg-sky-500', 'text-black', 'text-5xl', 'rounded-full','border-amber-200','border-4','mb-4'); // Removing dark mode classes
            button.classList.add('bg-pink-300', 'text-black', 'text-5xl', 'rounded-full','border-pink-500','border-4','mb-4'); // Example classes for light mode
        });
    }
    document.querySelectorAll('input').forEach(input => {
        input.style.color = 'black'; // Set text color to black in dark mode
    });
}