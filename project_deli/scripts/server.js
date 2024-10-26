const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Route to save budget data
app.post('/save-budget', (req, res) => {
    const budgetData = req.body;
    const filePath = path.join(__dirname, 'data', 'budget-data.txt');
    fs.appendFile(filePath, `Budget Data: ${JSON.stringify(budgetData)}\n`, err => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

// Route to save meal data
app.post('/save-meal', (req, res) => {
    const mealData = req.body;
    const filePath = path.join(__dirname, 'data', 'meal-data.txt');
    fs.appendFile(filePath, `Meal Data: ${JSON.stringify(mealData)}\n`, err => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
