exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.string('logo', 1000)
    })
};
exports.down = function(knex, Promise) {

};