// Sample business data for Qatar
const businesses = [
    {
        name: "Qatar Airways",
        description: "Leading global airline from Qatar.",
        logo: "images/qatarair.png",
        detailsLink: "https://www.qatarairways.com"
    },
    // ... other businesses
];

// Load business cards based on view type
async function loadBusinessCards(viewType) {
    const directory = document.getElementById('business-directory');
    directory.innerHTML = ''; // Clear existing content

    businesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${business.logo}" alt="${business.name} logo">
            <h2>${business.name}</h2>
            <p>${business.description}</p>
            <a href="${business.detailsLink}" target="_blank">Learn More</a>
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

// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
