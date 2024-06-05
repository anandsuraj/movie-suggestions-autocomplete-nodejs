const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const suggestions = require('./suggestions.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index-autocomplete.html');
});

app.get('/suggestions', (req, res) => {
    const { query } = req.query;
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()));
    res.json(filteredSuggestions);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
