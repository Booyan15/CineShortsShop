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


document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const crossedPriceElem = card.querySelector('.crossed-price');
        const discountedPriceElem = card.querySelector('.discounted-price');
        
        if (crossedPriceElem && discountedPriceElem) {
            const originalPrice = parseFloat(crossedPriceElem.textContent.replace('$', ''));
            const discountedPrice = parseFloat(discountedPriceElem.textContent.replace('$', ''));

            const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

            const discountDiv = document.createElement('div');
            discountDiv.classList.add('discount');
            discountDiv.textContent = `-${discountPercentage}%`;

            card.appendChild(discountDiv);
        }
    });
});
