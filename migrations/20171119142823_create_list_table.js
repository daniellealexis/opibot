
exports.up = function(knex, Promise) {
    return knex.schema.createTable('list', function(table) {
        table.increments('id').primary();

        table.string('team_id')
            .index()
            .notNullable();

        table.string('user_id');

        table.string('name').notNullable();

        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('list');
};

