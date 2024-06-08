// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the first element with the class name "layoutContainer homepage"
    var targetDiv = document.querySelector('.layoutContainer.homepage');
    
    // Check if the element exists to avoid errors
    if (targetDiv) {
        // Change the content of the div
        targetDiv.innerHTML = 'This is mine now.';
    } else {
        console.log('Element not found.');
    }
});
