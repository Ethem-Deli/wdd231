// Fetch Investment Tips from Finance API
async function getInvestmentData() {
    try {
        const response = await fetch('https://api.example.com/investment-tips');
        const data = await response.json();
        
        const investmentDataDiv = document.getElementById('investment-data');
        data.tips.forEach(tip => {
            const p = document.createElement('p');
            p.textContent = tip;
            investmentDataDiv.appendChild(p);
        });
    } catch (error) {
        console.error('Error fetching investment data:', error);
    }
}

getInvestmentData();