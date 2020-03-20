exports.up = async function(knex) {
	await knex.schema.createTable("users", (table) => {
		table.increments()
		table.text("username").notNull().unique()
		table.text("password").notNull()
	})

	    await knex.schema.createTable('posts', tbl => {
      tbl.increments();
      tbl.integer('post_id')
        .unsigned()
        .notNullable();
      tbl.text('post_subject')
        .notNullable();
      tbl.text('post_text')
      	.notNullable();  
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("users")
	 await knex.schema.dropTableIfExists("posts")
}