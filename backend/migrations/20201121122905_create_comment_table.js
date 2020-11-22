
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments('id').primary()
        table.string('content', 255).notNull()
        table.integer('articleId').unsigned().references('id')
            .inTable('articles')
        table.integer('userId').unsigned().references('id')
            .inTable('users')
    })
};

exports.down = function(knex, Promise) {
  
};
