const express = require('express');
const bodyParser = require('body-parser');
const slackRouter = require('./middleware/commandRouter');
const logger = require('./logger');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Entry
app.post('/', slackRouter.handleRequest);


app.listen(7654, () => {
  console.log('Server running on http://localhost:7654');
});
