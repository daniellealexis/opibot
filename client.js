const store = require('./store');

module.exports = {
    createList: function(req, res) {
        const data = req.body;
        res.sendStatus(200);
    },

    getSuggestion: function(req, res) {
        const data = req.body;
        res.sendStatus(200);
    },

    submitSuggestion: function(req, res) {
        const data = req.body;
        res.sendStatus(200);
    },

    viewAllLists: function(req, res) {
        const data = req.body;
        res.sendStatus(200);
    },

    viewAllCommands: function(req, res) {
        const data = req.body;
        res.sendStatus(200);
    },
}
