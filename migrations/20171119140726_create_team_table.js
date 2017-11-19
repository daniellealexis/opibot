
exports.up = function(knex, Promise) {
    return knex.schema.createTable('team', function(table) {
        table.increments('id').primary();

        table.string('team_id')
            .index()
            .unique()
            .notNullable();

        table.string('team_domain');

        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('team');
};
