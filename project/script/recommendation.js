document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const reason = urlParams.get('reason');
    const budget = urlParams.get('budget');
    const distance = urlParams.get('distance');
    const terrain = urlParams.get('terrain');
    const portability = urlParams.get('portability');

    const recommendations = [];

    
    // Example recommendations logic
    if (reason === 'Commute') {
        recommendations.push({
            name: 'Commuter Pro',
            description: 'A perfect scooter for daily commuting with great battery life and speed.'
        });
    } else if (reason === 'Recreation') {
        recommendations.push({
            name: 'Fun Rider',
            description: 'Ideal for recreational use with an emphasis on fun and comfort.'
        });
    }


    if (budget === 'Below $500') {
        recommendations.push({
            name: 'Budget Beater',
            description: 'Affordable and reliable, perfect for short trips and casual use.'
        });
    } else if (budget === 'Above $1500') {
        recommendations.push({
            name: 'Luxury Cruiser',
            description: 'Top of the line with all the features and the best performance.'
        });
    }

    // Add more recommendation logic based on other quiz answers...

    const recommendationsDiv = document.getElementById('recommendations');
    recommendations.forEach(rec => {
        const recDiv = document.createElement('div');
        recDiv.className = 'recommendation';
        recDiv.innerHTML = `<h2>${rec.name}</h2><p>${rec.description}</p>`;
        recommendationsDiv.appendChild(recDiv);
    });
});
        document.getElementById('year').textContent = new Date().getFullYear();
        document.getElementById('lastModified').textContent = document.lastModified;