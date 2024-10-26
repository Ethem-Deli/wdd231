const apiKey = 'WGEI3SNC1210MMJH'; // Replace with your (Alpha Vantage) API key
const symbol = 'AAPL'; // Stock symbol for Apple

fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle and display the data on your page
    })
    .catch(error => console.error('Error fetching data:', error));

    