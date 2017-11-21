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

    createCategory: function(req, res) {
        const data = req.body;
        const categoryName = data.text;

        // parse data.text to get list name
        //
        // check that list doesnt already exist

        store.createCategory({
            team_id: data.team_id,
            user_id: data.user_id,
            name: categoryName,
        });

        res.status(200).send(msg.createdCategory(categoryName));
    },

    getSuggestion: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showSuggestion());
    },

    submitSuggestion: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.submittedSuggestion());
    },

    viewAllCategories: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showAllCategories());
    },

    viewAllCommands: function(req, res) {
        const data = req.body;
        res.status(200).send(msg.showAllCommands());
    },
}
