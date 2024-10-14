// Function to format the date and time for the footer section
document.addEventListener('DOMContentLoaded', (event) => {
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }

    // Set the footer's last modification date
    const footer = document.querySelector('footer p:nth-child(2)');
    const now = new Date();
    footer.innerHTML = `Modification: ${formatDate(now)}`;

    // Set the current year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = now.getFullYear();
    }
});


// Product data for the dropdown list
const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avgRating: 5.0
    }
];

// Populate the product dropdown and manage review submission count
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');
    
    // Populate the product dropdown with product names
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        // Increment the review counter on form submission
        const form = document.querySelector('form');
        form.addEventListener('submit', () => {
            let reviewCount = localStorage.getItem('reviewCount') || 0;
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);
        });
    }

    // Display the total review count
    const reviewCountSpan = document.getElementById('review-count');
    if (reviewCountSpan) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountSpan.textContent = reviewCount;
    }
});
