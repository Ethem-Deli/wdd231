// Sample business data for Qatar
const businesses = [
    {
        name: "Qatar Airways",
        description: "Leading global airline from Qatar.",
        logo: "images/qatarair.png",
        detailsLink: "https://www.qatarairways.com"
    },
    {
        name: "Qatar National Bank",
        description: "Largest bank in Qatar.",
        logo: "images/qnb.png",
        detailsLink: "https://www.qnb.com"
    },
    {
        name: "Ooredoo Qatar",
        description: "Telecommunications company.",
        logo: "images/ooredoo.png",
        detailsLink: "https://www.ooredoo.qa"
    },
    {
        name: "Al Jazeera",
        description: "International news network.",
        logo: "images/aljazeera.png",
        detailsLink: "https://www.aljazeera.com"
    },
    {
        name: "Vodafone Qatar",
        description: "Telecommunication provider.",
        logo: "images/vodafone-qatar.png",
        detailsLink: "https://www.vodafone.qa"
    },
    {
        name: "Aspire Zone",
        description: "Sports development company.",
        logo: "images/aspire.png",
        detailsLink: "https://www.aspirezone.qa"
    },
    {
        name: "Qatar Petroleum",
        description: "National oil company of Qatar.",
        logo: "images/qatar-petroleum.png",
        detailsLink: "https://www.qp.com.qa"
    },
    {
        name: "Doha Bank",
        description: "Commercial bank in Qatar.",
        logo: "images/doha-bank.png",
        detailsLink: "https://www.dohabank.com.qa"
    },
    {
        name: "Katara",
        description: "Cultural village in Doha.",
        logo: "images/katara.jpeg",
        detailsLink: "https://www.katara.net"
    }
];
async function loadBusinessCards(viewType) {
    const directory = document.getElementById('business-directory');
    directory.innerHTML = ''; // Clear existing content

    try {
        const response = await fetch('members.json');
        const businesses = await response.json();

        businesses.forEach(business => {
            const card = document.createElement('div');
            card.classList.add('business-card');
            card.innerHTML = `
                <img src="images/${business.image}" alt="${business.name} logo">
                <h2>${business.name}</h2>
                <p>${business.tagline}</p>
                <p>${business.address}</p>
                <p>${business.phone}</p>
                <a href="${business.website}" target="_blank">Learn More</a>
            `;
            directory.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to load business cards
function loadBusinessCards(viewType) {
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
