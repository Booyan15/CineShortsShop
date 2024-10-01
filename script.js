// script.js

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
}



document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor links with hashes
    const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using window.scrollTo to animate scroll
            if (hash) {
                // Scroll to the specific section
                window.scrollTo({
                    top: document.querySelector(hash).offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
