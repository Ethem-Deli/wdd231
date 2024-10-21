document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    // Hamburger menu functionality
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active'); // Toggle animation for the hamburger icon
        navMenu.classList.toggle('open'); // Slide in the menu
    });

    // Set current year and last modified date in the footer
    const year = new Date().getFullYear();
    if (document.getElementById('year')) {
        document.getElementById('year').textContent = year;
    }

    const lastModified = new Date(document.lastModified);
    if (document.getElementById('last-modified')) {
        document.getElementById('last-modified').textContent = lastModified.toLocaleString();
    }

    // Function to open a modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "flex";
    }

    // Function to close a modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Attach event listeners to membership modal links (outside the closeModal function)
    document.querySelectorAll('.membership-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('href').substring(1);
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Set the current timestamp when the form loads (only for join.html)
    if (document.getElementById('timestamp')) {
        document.getElementById('timestamp').value = new Date().toISOString();
    }

    // FOR THANK YOU PAGE - Retrieving and displaying form data
    if (window.location.pathname.includes('thankyou.html')) {
        const urlParams = new URLSearchParams(window.location.search);

        // Check if thank-you elements exist to avoid TypeErrors
        if (document.getElementById('first-name')) {
            document.getElementById('first-name').textContent = urlParams.get('first-name') || 'N/A';
        }
        if (document.getElementById('last-name')) {
            document.getElementById('last-name').textContent = urlParams.get('last-name') || 'N/A';
        }
        if (document.getElementById('email')) {
            document.getElementById('email').textContent = urlParams.get('email') || 'N/A';
        }
        if (document.getElementById('mobile')) {
            document.getElementById('mobile').textContent = urlParams.get('phone') || 'N/A';
        }
        if (document.getElementById('organization')) {
            document.getElementById('organization').textContent = urlParams.get('organization') || 'N/A';
        }
        if (document.getElementById('timestamp')) {
            document.getElementById('timestamp').textContent = urlParams.get('timestamp') || 'N/A';
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('last-visit');
    const currentVisit = Date.now();
    
    if (lastVisit) {
        const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween < 1) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else if (daysBetween === 1) {
            visitMessage.textContent = 'You last visited 1 day ago.';
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    }
    
    localStorage.setItem('last-visit', currentVisit);
});
