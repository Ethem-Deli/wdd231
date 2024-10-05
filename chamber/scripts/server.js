const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static HTML file (join.html)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { fullname, email, businessName, industry } = req.body;

    // Create the content to save in the text file
    const userData = `Full Name: ${fullname}\nEmail: ${email}\nBusiness Name: ${businessName}\nIndustry: ${industry}\n\n`;

    // Write the data to a text file (append new data)
    fs.appendFile(path.join(__dirname, 'users_data.txt'), userData, (err) => {
        if (err) {
            console.error('Failed to save user data:', err);
            res.status(500).send('An error occurred while saving your data.');
        } else {
            console.log('User data saved successfully.');
            res.send('Your data has been saved successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
