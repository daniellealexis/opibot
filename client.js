const store = require('./store');
const msg = require('./slackResponses');

module.exports = {
    createTeam: function(req, res) {
        const data = req.body;

        store.createTeam({
            team_id: '',
            team_domain: '',
        });

        res.status(200).send(msg.createdTeam());
    },

    createList: function(req, res) {
        const data = req.body;

        store.createList({
            team_id: '',
            user_id: '',
            name: '',
        });

        res.status(200).send(msg.createdList());
    },

    getSuggestion: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showSuggestion());
    },

    submitSuggestion: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.submittedSuggestion());
    },

    viewAllLists: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showAllLists());
    },

    viewAllCommands: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showAllCommands());
    },
}
