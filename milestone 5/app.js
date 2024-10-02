// Helper function to update the URL and show the resume link
function updateURL(username) {
    var currentUrl = window.location.href.split('?')[0]; // Base URL without query parameters
    var newUrl = "".concat(currentUrl, "?user=").concat(username); // Add username as query param
    window.history.pushState({}, '', newUrl); // Update the URL without reloading the page
    var resumeLink = document.getElementById('resumeLink');
    resumeLink.href = newUrl; // Set the new URL in the link
    resumeLink.textContent = newUrl; // Display the URL
}
// Function to generate a unique resume link based on username
function generateResume() {
    var usernameInput = document.getElementById('username');
    var username = usernameInput.value.trim(); // Get the username input
    if (username) {
        document.getElementById('resumeSection').style.display = 'block'; // Show the resume section
        document.getElementById('resumeName').textContent = "Resume of ".concat(username); // Update resume name
        updateURL(username); // Update the URL with the username
    }
    else {
        alert('Please enter a username.'); // Error if no username entered
    }
}
// Function to copy the resume link to the clipboard
function copyLink() {
    var resumeLink = document.getElementById('resumeLink').href; // Get the link
    navigator.clipboard.writeText(resumeLink).then(function () {
        alert('Resume link copied to clipboard!'); // Notify the user
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
}
// Function to download the resume as a PDF (simulated as a text file in this case for simplicity)
function downloadResumeAsPDF() {
    var resumeSection = document.getElementById('resumeSection');
    var resumeContent = resumeSection.innerText; // Get the visible text of the resume section
    var blob = new Blob([resumeContent], { type: 'text/plain' }); // Create a text file blob (can be extended for PDF)
    var link = document.createElement('a'); // Create a temporary link element
    link.href = window.URL.createObjectURL(blob); // Set the blob as the download link
    link.download = 'resume.txt'; // Specify the file name (can be changed to .pdf with proper PDF conversion)
    link.click(); // Trigger download
}
// Add Event Listeners for buttons
document.getElementById('generateResumeBtn').addEventListener('click', generateResume); // On resume generation
document.getElementById('copyLinkBtn').addEventListener('click', copyLink); // On copy link button
document.getElementById('downloadPdfBtn').addEventListener('click', downloadResumeAsPDF); // On download button
// On page load, check if the URL has a pre-filled username
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search); // Get URL query parameters
    var username = urlParams.get('user'); // Check if 'user' param exists
    if (username) {
        document.getElementById('username').value = username; // Pre-fill the username input
        generateResume(); // Auto-generate the resume for the user
    }
});