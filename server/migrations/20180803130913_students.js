
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', table => { 
        table.increments();
        table.text('first_name');
        table.text('last_name');
        table.text('animal_photo')
        table.text('prior_occupation'); 
        table.float('lat');
        table.float('long');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student');
};
