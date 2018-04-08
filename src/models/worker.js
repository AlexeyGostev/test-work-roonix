const bookshelf = require('../libs/connectDatabase_').bookshelf;

const Worker = bookshelf.Model.extend({
  tableName: 'workers',
  idAttribute: 'id'
});

module.exports = Worker;
