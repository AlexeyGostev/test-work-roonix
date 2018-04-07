const bookshelf = require('../libs/connectDatabase');

const Worker = bookshelf.Model.extend({
  tableName: 'workers',
  idAttribute: 'id'
});

module.exports = Worker;
