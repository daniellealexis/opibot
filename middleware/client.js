const store = require('./store');
const msg = require('./slackResponses');
const logger = require('../logger');

module.exports = {
    createTeam: function(data, req, res) {
        const { body } = req;

        store.createTeam({
            team_id: '',
            team_domain: '',
        });

        res.status(200).send(msg.createdTeam());
    },

    createCategory: function(data, req, res) {
        const { body } = req;
        const categoryName = body.text;

        // parse body.text to get list name
        //
        // check that list doesnt already exist

        store.createCategory({
            team_id: body.team_id,
            user_id: body.user_id,
            name: categoryName,
        });

        res.status(200).send(msg.createdCategory(categoryName));
    },

    getSuggestion: function(data, req, res) {
        const { body } = req;
        console.log(data);
        res.status(200).send(msg.showSuggestion(data.value));
    },

    submitSuggestion: function(data, req, res) {
        const { body } = req;
        console.log(data);
        res.status(200).send(msg.submittedSuggestion(data.value));
    },

    viewAllCategories: function(data, req, res) {
        const { body } = req;
        res.status(200).send(msg.showAllCategories());
    },

    viewAllCommands: function(data, req, res) {
        const { body } = req;
        console.log(data)
        if (body && body.text) {
            res.status(200).send(msg.showAllCommands());
        } else {
            res.status(200).send(msg.genericError());
        };
    },

    handleError: function(data, req, res) {
        res.status(200).send(msg.genericError());
    },
};
