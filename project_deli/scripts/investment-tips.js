// Function to fetch and display investment data
async function getInvestmentData() {
    try {
        const response = await fetch('data/investment-tips.json'); // Path to your local JSON file
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

// Function to load and display 10 random investment tips
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

// Function to save budget data
async function saveBudgetData() {
    const income = document.getElementById('income')?.value || "";
    const expenses = document.getElementById('expenses')?.value || "";
    const savingsGoal = document.getElementById('savingsGoal')?.value || "";

    try {
        const response = await fetch('/save-budget', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ income, expenses, savingsGoal, timestamp: new Date().toLocaleString() })
        });

        if (response.ok) {
            console.log('Budget data saved successfully.');
        } else {
            console.error('Failed to save budget data.');
        }
    } catch (error) {
        console.error('Error saving budget data:', error);
    }
}

// Function to save meal data
async function saveMealData() {
    const name = document.getElementById('name')?.value || "";
    const height = document.getElementById('height')?.value || "";
    const weight = document.getElementById('weight')?.value || "";
    const age = document.getElementById('age')?.value || "";
    const caloriesNeeded = document.getElementById('caloriesNeeded')?.value || "";

    try {
        const response = await fetch('/save-meal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, height, weight, age, caloriesNeeded, timestamp: new Date().toLocaleString() })
        });

        if (response.ok) {
            console.log('Meal data saved successfully.');
        } else {
            console.error('Failed to save meal data.');
        }
    } catch (error) {
        console.error('Error saving meal data:', error);
    }
}

// Run investment data and tips functions on page load
document.addEventListener('DOMContentLoaded', () => {
    getInvestmentData();
    displayRandomTips();

    // Event listener for saving budget data on form submission
    document.getElementById('budget-form').addEventListener('submit', (event) => {
        event.preventDefault();
        saveBudgetData();
    });

    // Event listener for saving meal data on form submission
    document.getElementById('meal-form').addEventListener('submit', (event) => {
        event.preventDefault();
        saveMealData();
    });
});
