// Function to handle content changes in editable sections
function handleContentChange(event) {
    var target = event.target;
    console.log("".concat(target.id, " updated: "), target.innerHTML);
    // Optional: Save the updated content to localStorage or send to server
}
// Assign event listeners to resume sections
function addEditableListeners() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.addEventListener('input', handleContentChange);
    });
}
// Initialize event listeners on page load
window.addEventListener('DOMContentLoaded', function () {
    addEditableListeners();
});
