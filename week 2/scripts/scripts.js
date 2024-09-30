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

// Function to create a business card
function createBusinessCard(business) {
    return `
        <div class="business-card">
            <img src="${business.logo}" alt="${business.name} Logo" width="100" height="100">
            <h3>${business.name}</h3>
            <p>${business.description}</p>
            <a href="${business.detailsLink}" target="_blank">Learn More</a>
        </div>
    `;
}

// Insert business cards into the directory
const businessDirectory = document.getElementById('business-directory');
businessDirectory.innerHTML = businesses.map(createBusinessCard).join('');

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('open');
});

// Display current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
