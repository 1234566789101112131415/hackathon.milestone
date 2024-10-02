document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null; // Added null for safety
    const skills = document.getElementById('Skills') as HTMLElement | null; // Added null for safety

    // Check if both elements are defined
    if (toggleButton && skills) {
        toggleButton.addEventListener('click', () => {
            if (skills.style.display === 'none' || skills.style.display === '') {
                skills.style.display = 'block'; // Show skills
            } else {
                skills.style.display = 'none'; // Hide skills
            }
        });
    } else {
        console.error('Toggle button or skills section not found.');
    }
});
