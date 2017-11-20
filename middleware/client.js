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
        const listName = data.text;

        // parse data.text to get list name
        //
        // check that list doesnt already exist

        store.createList({
            team_id: data.team_id,
            user_id: data.user_id,
            name: listName,
        });

        res.status(200).send(msg.createdList(listName));
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
