// script.js
// Example of toggling dropdown on click, useful for mobile views
document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.addEventListener('click', function(event) {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});// JavaScript Document