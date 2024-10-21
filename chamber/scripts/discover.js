// JavaScript function to dynamically load the calendar
document.addEventListener('DOMContentLoaded', function() {
    // Define the calendar element
    const calendarElement = document.querySelector('.calendar table');

    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0 = January, 11 = December
    const currentYear = currentDate.getFullYear();

    // Function to generate a calendar
    function generateCalendar(month, year) {
        // Clear any previous calendar rows (except for the table header)
        const rows = calendarElement.querySelectorAll('tr');
        rows.forEach((row, index) => {
            if (index > 0) row.remove(); // Keep the first row (header with days of the week)
        });

        // Get the first day of the month
        const firstDay = new Date(year, month).getDay(); // Day of the week (0 = Sunday, 6 = Saturday)
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the current month

        // Create a new row for the calendar
        let row = document.createElement('tr');

        // Fill the empty slots before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }

        // Fill the calendar with days
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('td');
            cell.textContent = day;
            row.appendChild(cell);

            // If it's Saturday, create a new row for the next week
            if ((day + firstDay) % 7 === 0) {
                calendarElement.appendChild(row);
                row = document.createElement('tr');
            }
        }

        // Append the last row (if any days are remaining)
        if (row.children.length > 0) {
            calendarElement.appendChild(row);
        }
    }

    // Generate the calendar for the current month and year
    generateCalendar(currentMonth, currentYear);
});
// Lazy loading images using IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    const lazyloadImages = document.querySelectorAll('.lazyload');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazyload');
                observer.unobserve(img);
            }
        });
    });

    lazyloadImages.forEach(image => {
        observer.observe(image);
    });
});
// Last visit message using localStorage
function getLastVisitMessage() {
    const lastVisitKey = 'lastVisit';
    const currentVisitTime = Date.now();
    const lastVisitTime = localStorage.getItem(lastVisitKey);
    const messageElement = document.createElement('p');
    
    if (lastVisitTime) {
        const lastVisitDate = new Date(parseInt(lastVisitTime));
        const timeDiff = currentVisitTime - lastVisitDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time difference to days
            if (daysDiff < 1) {
                messageElement.textContent = "Back so soon! Awesome!";
            } else if (daysDiff === 1) {
                messageElement.textContent = "You last visited 1 day ago.";
            } else {
                messageElement.textContent = `You last visited ${daysDiff} days ago.`;
            }
        } else {
            messageElement.textContent = "Welcome! Let us know if you have any questions.";
        }
        
        // Update localStorage with the current visit time
        localStorage.setItem(lastVisitKey, currentVisitTime);
        
        // Append the message to the sidebar or any appropriate area
        const sidebar = document.querySelector('.sidebar .about');
        sidebar.appendChild(messageElement);
    }