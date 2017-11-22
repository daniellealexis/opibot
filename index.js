const express = require('express');
const bodyParser = require('body-parser');
const client = require('./middleware/client');
const logger = require('./logger');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Slack Commands
// app.post('', client.createList);
// app.post('', client.getSuggestion);
// app.post('', client.submitSuggestion);
// app.post('', client.viewAllLists);
// app.post('help', client.viewAllCommands);

app.listen(7654, () => {
  console.log('Server running on http://localhost:7654');
});
