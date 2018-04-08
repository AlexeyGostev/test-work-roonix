const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : config.get('db:host'),
    port     : config.get('db:port'),
    user     : config.get('db:user'),
    password : config.get('db:password'),
    database : config.get('db:database'),
    charset  : 'utf8'
  }
});
const bookshelf = require('bookshelf')(knex);

module.exports.knex = knex;
module.exports.bookshelf = bookshelf;