// Function to handle content changes in editable sections
function handleContentChange(event: Event): void {
    const target = event.target as HTMLElement;
    console.log(`${target.id} updated: `, target.innerHTML);
    // Optional: Save the updated content to localStorage or send to server
}

// Assign event listeners to resume sections
function addEditableListeners(): void {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.addEventListener('input', handleContentChange);
    });
}

// Initialize event listeners on page load
window.addEventListener('DOMContentLoaded', () => {
    addEditableListeners();
});
