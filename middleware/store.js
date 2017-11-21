const knex = require('knex')(require('../knexfile'));

module.exports = {
    /**
     * Teams
     */
    createTeam({ team_id, team_domain }) {
        return knex('team').insert({
            team_id,
            team_domain,
        });
    },

    /**
     * Categories
     */
    createCategory({ team_id, user_id, name }) {
        return knex('category').insert({
            team_id,
            user_id,
            name,
        });
    },

    getCategoryIdByName({ team_id, name }) {
        return knex('category').where({
            team_id,
            name,
        }).select('id');
    },

    getAllCategories({ team_id }) {
        return knex('category')
            .where({ team_id })
            .select('name');
    },

    /**
     * Suggestions
     */
    addSuggestion({ category_id, user_id, text }) {
        return knex('suggestion').insert({
            category_id,
            user_id,
            text,
        });
    },

    getSuggestion({ category_id, user_id }) {
        // get random, that doesnt have user_id
    },
}
