// Fetch business data from members.json
async function fetchMembers() {
    try {
        const response = await fetch('members.json');
        const members = await response.json();
        return members;
    } catch (error) {
        console.error('Error fetching members:', error);
        return [];
    }
}

// Function to load business cards
async function loadBusinessCards(viewType) {
    const members = await fetchMembers(); // Fetch the data from the JSON file
    const directory = document.getElementById('business-directory');
    directory.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h2>${member.name}</h2>
            <p>${member.tagline || ''}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Learn More</a>
        `;
        directory.appendChild(card);
    });
}

// Toggle between Grid and List views
document.getElementById('grid-view').addEventListener('click', () => {
    document.body.classList.remove('list-view');
    document.body.classList.add('grid-view');
    loadBusinessCards('grid');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.body.classList.remove('grid-view');
    document.body.classList.add('list-view');
    loadBusinessCards('list');
});

// Load grid view by default
loadBusinessCards('grid');

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
