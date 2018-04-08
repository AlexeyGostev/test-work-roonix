const bookshelf = require('../libs/connectDatabase_').bookshelf;

const Department = bookshelf.Model.extend({
  tableName: 'departments',
  idAttribute: 'id'
});

module.exports = Department;