exports.up = function(knex, Promise) {
  knex.schema.createTable('users').then((tbl) => {
    tbl.increments();
    tbl.string('name');
  }
};
 
exports.down = function(knex, Promise) {
  knex.schema.destroyTable('users');
};