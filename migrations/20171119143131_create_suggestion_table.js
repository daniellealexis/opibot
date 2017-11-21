
exports.up = function(knex, Promise) {
    return knex.schema.createTable('suggestion', function(table) {
        table.increments('id').primary();

        table.string('category_id')
            .index()
            .notNullable();

        table.string('user_id');

        table.string('text').notNullable();

        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('suggestion');
};
