async function getInvestmentData() {
    try {
        const response = await fetch('data/investment-tips.json');  // Path to your local JSON file
        const data = await response.json();

        const investmentDataDiv = document.getElementById('investment-data');
        data.tips.forEach(tip => {
            const p = document.createElement('p');
            p.textContent = tip;
            investmentDataDiv.appendChild(p);
        });
    } catch (error) {
        console.error('Error fetching investment data:', error);
        const investmentDataDiv = document.getElementById('investment-data');
        investmentDataDiv.textContent = "Failed to load investment tips.";
    }
}

getInvestmentData();
// Function to load tips and display 10 randomly
async function displayRandomTips() {
    try {
        // Fetch the JSON file
        const response = await fetch('data/investment-tips.json');
        const data = await response.json();

        // Get all tips from JSON
        const tips = data.tips;

        // Shuffle the tips and select the first 10
        const randomTips = tips.sort(() => 0.5 - Math.random()).slice(0, 10);

        // Get the container for tips display
        const tipsContainer = document.getElementById('tipsContainer');
        tipsContainer.innerHTML = '';  // Clear any previous tips

        // Display each selected tip
        randomTips.forEach((tip, index) => {
            const tipElement = document.createElement('p');
            tipElement.textContent = `${index + 1}. ${tip}`;
            tipsContainer.appendChild(tipElement);
        });
    } catch (error) {
        console.error('Error loading tips:', error);
    }
}

// Call the function when the page loads
window.onload = displayRandomTips;


//option 2
//async function getInvestmentData() {
//    try {
//        const response = await fetch('https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=your_api_key');
//        const data = await response.json();

//        const investmentDataDiv = document.getElementById('investment-data');
//        data.forEach(stock => {
//            const p = document.createElement('p');
//            p.textContent = `Company: ${stock.name}, Price: ${stock.price}`;
//            investmentDataDiv.appendChild(p);
//        });
//    } catch (error) {
//        console.error('Error fetching investment data:', error);
//    }
//}

//getInvestmentData();
// Send data to server to save in file
fetch('/save-budget', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ income, expenses, savingsGoal, timestamp: new Date().toLocaleString() })
  });
  // Send data to server to save in file
fetch('/save-meal', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, height, weight, age, caloriesNeeded, timestamp: new Date().toLocaleString() })
  });