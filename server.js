const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a CSV writer
const csvWriter = createCsvWriter({
    path: 'results.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'score', title: 'Score' }
    ],
    append: true // Append to the file if it exists
});

// Endpoint to receive and save results
app.post('/save-result', (req, res) => {
    const { name, score } = req.body;
    csvWriter.writeRecords([{ name, score }])
        .then(() => {
            res.send('Result saved successfully');
        })
        .catch(err => {
            console.error('Error saving result:', err);
            res.status(500).send('Error saving result');
        });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
