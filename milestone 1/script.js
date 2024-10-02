document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills'); // Added null for safety
    var skills = document.getElementById('Skills'); // Added null for safety
    // Check if both elements are defined
    if (toggleButton && skills) {
        toggleButton.addEventListener('click', function () {
            if (skills.style.display === 'none' || skills.style.display === '') {
                skills.style.display = 'block'; // Show skills
            }
            else {
                skills.style.display = 'none'; // Hide skills
            }
        });
    }
    else {
        console.error('Toggle button or skills section not found.');
    }
});
