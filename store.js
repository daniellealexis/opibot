const knex = require('knex')(require('./knexfile'));

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
     * Lists
     */
    createList({ team_id, user_id, name }) {
        return knex('list').insert({
            team_id,
            user_id,
            name,
        });
    },

    getListIdByName({ team_id, name }) {
        return knex('list').where({
            team_id,
            name,
        }).select('id');
    },

    getAllLists({ team_id }) {
        return knex('list')
            .where({ team_id })
            .select('name');
    },

    /**
     * List Items
     */
    addListItem({ list_id, user_id, text }) {
        return knex('list_item').insert({
            list_id,
            user_id,
            text,
        });
    },

    getListItem({ list_id, user_id }) {
        // get random, that doesnt have user_id
    },
}
