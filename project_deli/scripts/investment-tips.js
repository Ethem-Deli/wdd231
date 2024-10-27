async function getInvestmentData() {
    try {
        const response = await fetch('data/investment-tips.json');  // Path to your local JSON file
        const data = await response.json();

        const investmentDataDiv = document.getElementById('investment-data');
        if (investmentDataDiv) {
            data.tips.forEach(tip => {
                const p = document.createElement('p');
                p.textContent = tip;
                investmentDataDiv.appendChild(p);
            });
        }
    } catch (error) {
        console.error('Error fetching investment data:', error);
        const investmentDataDiv = document.getElementById('investment-data');
        if (investmentDataDiv) {
            investmentDataDiv.textContent = "Failed to load investment tips.";
        }
    }
}

// Function to load tips and display 10 randomly
async function displayRandomTips() {
    try {
        const response = await fetch('data/investment-tips.json');
        const data = await response.json();

        const tips = data.tips;
        const randomTips = tips.sort(() => 0.5 - Math.random()).slice(0, 10);

        const tipsContainer = document.getElementById('tipsContainer');
        if (tipsContainer) {
            tipsContainer.innerHTML = '';
            randomTips.forEach((tip, index) => {
                const tipElement = document.createElement('p');
                tipElement.textContent = `${index + 1}. ${tip}`;
                tipsContainer.appendChild(tipElement);
            });
        }
    } catch (error) {
        console.error('Error loading tips:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getInvestmentData();
    displayRandomTips();

    // Assuming you have input fields with these IDs
    const income = document.getElementById('income')?.value || "";
    const expenses = document.getElementById('expenses')?.value || "";
    const savingsGoal = document.getElementById('savingsGoal')?.value || "";
    const name = document.getElementById('name')?.value || "";
    const height = document.getElementById('height')?.value || "";
    const weight = document.getElementById('weight')?.value || "";
    const age = document.getElementById('age')?.value || "";
    const caloriesNeeded = document.getElementById('caloriesNeeded')?.value || "";

    // Save budget data
    fetch('/save-budget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ income, expenses, savingsGoal, timestamp: new Date().toLocaleString() })
    });

    // Save meal data
    fetch('/save-meal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, height, weight, age, caloriesNeeded, timestamp: new Date().toLocaleString() })
    });
});
