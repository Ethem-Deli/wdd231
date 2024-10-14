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

        if (weatherData.list && weatherData.list.length > 0) {
            // Extract current weather data
            const currentWeather = weatherData.list[0];
            const temperature = Math.round(currentWeather.main.temp); // Round temperature to 0 decimal places
            const weatherEvent = currentWeather.weather[0]; // Only focus on the first weather event
            const weatherDescription = capitalizeEachWord(weatherEvent.description); // Get weather description
            const weatherIcon = weatherEvent.icon; // Get weather icon code
            const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`; // Construct icon URL using OpenWeatherMap's base URLs

            // Extract 3-day forecast
            const forecast = weatherData.list.slice(1, 4).map((day, index) => {
                const dayTemp = Math.round(day.main.temp); // Round forecast temperature
                return `<p>Day ${index + 1}: ${dayTemp}°C</p>`;
            }).join("");

            // Display weather data on the page
            document.getElementById('current-temp').textContent = `${temperature}°C`;
            document.getElementById('weather-desc').textContent = weatherDescription;
            document.getElementById('weather-icon').src = iconUrl; // Display the weather icon
            document.getElementById('weather-forecast').innerHTML = forecast;
        } else {
            document.getElementById('weather-section').innerHTML = '<p>No weather data available.</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-section').innerHTML = '<p>Weather data unavailable.</p>';
    }
}

// Capitalize each word in the weather description
function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Toggle between Grid and List views
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

if (gridViewBtn && listViewBtn) {
    gridViewBtn.addEventListener('click', () => {
        document.body.classList.remove('list-view');
        document.body.classList.add('grid-view');
        loadBusinessCards('grid');
    });

    listViewBtn.addEventListener('click', () => {
        document.body.classList.remove('grid-view');
        document.body.classList.add('list-view');
        loadBusinessCards('list');
    });
}

// Load random spotlight businesses from member.json
async function loadSpotlightBusinesses() {
    const spotlights = document.getElementById('spotlights');
    spotlights.innerHTML = ''; // Clear existing content

    try {
        const response = await fetch('member.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const businesses = await response.json();

        // Filter businesses with Gold or Silver membership
        const qualifiedBusinesses = businesses.filter(business =>
            business.membership === 'Gold' || business.membership === 'Silver'
        );

        // Check if there are qualified businesses
        if (qualifiedBusinesses.length === 0) {
            spotlights.innerHTML = '<p>No spotlight businesses available.</p>'; // Notify if no businesses are found
            return;
        }

        // Shuffle the businesses and select 3 randomly
        const shuffledBusinesses = qualifiedBusinesses.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Generate and display spotlight businesses
        const spotlightCards = shuffledBusinesses.map(business => `
            <div class="spotlight-card">
                <img src="${business.image}" alt="${business.name} logo">
                <h2>${business.name}</h2>
                <p>${business.tagline}</p>
                <p>${business.address}</p>
                <p>Phone: ${business.phone}</p>
                <p>Email: <a href="mailto:${business.email}">${business.email}</a></p>
                <p>Membership Level: ${business.membership}</p>
                <a href="${business.website}" target="_blank">Visit Website</a>
            </div>
        `).join(""); // Create all spotlight cards as a single HTML string

        spotlights.innerHTML = spotlightCards; // Update the innerHTML of the spotlight div
    } catch (error) {
        console.error('Error loading spotlight businesses:', error);
        spotlights.innerHTML = '<p>Error loading spotlight businesses.</p>'; // Notify if there is an error
    }
}

// Call the weather function and spotlight function on page load
window.onload = () => {
    getWeatherData();
    loadSpotlightBusinesses();
};

// Function to load business cards from member.json file
async function loadBusinessCards(viewType) {
    const directory = document.getElementById('business-directory');
    directory.innerHTML = ''; // Clear existing content

    try {
        const response = await fetch('member.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const businesses = await response.json();

        businesses.forEach(business => {
            const card = document.createElement('div');
            card.classList.add('business-card');
            card.innerHTML = `
                <img src="${business.image}" alt="${business.name} logo">
                <h2>${business.name}</h2>
                <p>${business.tagline}</p>
                <p>${business.address}</p>
                <p>Phone: ${business.phone}</p>
                <p>Email: <a href="mailto:${business.email}">${business.email}</a></p>
                <a href="${business.website}" target="_blank">Visit Website</a>
                <p>Membership: ${business.membership}</p>
            `;
            directory.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading business cards:', error);
    }
}

// Load grid view by default
loadBusinessCards('grid');
