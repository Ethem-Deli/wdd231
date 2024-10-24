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
