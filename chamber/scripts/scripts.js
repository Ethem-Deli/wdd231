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

// Replace with your OpenWeatherMap API key
const apiKey = '9673e3fb2f7305d4d0e662ad5b8ab3c4';
const city = 'Doha';

// Fetch weather data from OpenWeatherMap API
async function getWeatherData() {
    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(weatherURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();

        // Extract current weather data
        const currentWeather = weatherData.list[0];
        const temperature = Math.round(currentWeather.main.temp); // Round temperature to 0 decimal places
        const weatherDescriptions = currentWeather.weather.map(w => capitalizeEachWord(w.description)).join(", ");

        // Extract 3-day forecast
        const forecast = weatherData.list.slice(1, 4).map((day, index) => {
            const dayTemp = Math.round(day.main.temp); // Round forecast temperature
            return `<p>Day ${index + 1}: ${dayTemp}°C</p>`;
        }).join("");


        // Display weather data on the page
        document.getElementById('current-temp').textContent = `${temperature}°C`;
        document.getElementById('weather-desc').textContent = weatherDescriptions;
        document.getElementById('weather-forecast').innerHTML = forecast;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-section').innerHTML = '<p>Weather data unavailable.</p>';
    }
}

// Capitalize each word in the weather description
function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Load random spotlight businesses
function loadSpotlightBusinesses() {
    const spotlightSection = document.getElementById('spotlight-section');
    spotlightSection.innerHTML = ''; // Clear existing content

    // Filter businesses with Gold or Silver membership (Add membership data to the business objects)
    const qualifiedBusinesses = businesses.filter(business =>
        business.membershipLevel === 'Gold' || business.membershipLevel === 'Silver'
    );

    // Shuffle the businesses and select 2-3 randomly
    const shuffledBusinesses = qualifiedBusinesses.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Generate and display spotlight businesses
    shuffledBusinesses.forEach(business => {
        const spotlight = `
            <div class="spotlight-card">
                <img src="${business.logo}" alt="${business.name} logo">
                <h2>${business.name}</h2>
                <p>${business.description}</p>
                <p>Phone: ${business.phone}</p>
                <p>Address: ${business.address}</p>
                <p>Membership Level: ${business.membershipLevel}</p>
                <a href="${business.website}" target="_blank">Visit Website</a>
            </div>
        `;
        spotlightSection.innerHTML += spotlight;
    });
}

// Call the weather function and spotlight function on page load
window.onload = () => {
    getWeatherData();
    loadSpotlightBusinesses();
};

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
// Hamburger menu functionality Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active'); // Toggle animation for the hamburger icon
        navMenu.classList.toggle('open'); // Slide in the menu
    });

    // Set current year and last modified date
    // Update the year and last modified date in the footer
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();
});
