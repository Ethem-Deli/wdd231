const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle budget data
app.post('/save-budget', (req, res) => {
    const budgetData = req.body;
    fs.appendFile('budget-data.json', JSON.stringify(budgetData) + '\n', (err) => {
        if (err) {
            console.error('Error saving budget data:', err);
            res.status(500).send('Error saving budget data');
        } else {
            res.status(200).send('Budget data saved successfully');
        }
    });
});

// Route to handle meal data
app.post('/save-meal', (req, res) => {
    const mealData = req.body;
    fs.appendFile('meal-data.json', JSON.stringify(mealData) + '\n', (err) => {
        if (err) {
            console.error('Error saving meal data:', err);
            res.status(500).send('Error saving meal data');
        } else {
            res.status(200).send('Meal data saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
