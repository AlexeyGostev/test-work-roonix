const bookshelf = require('../libs/connectDatabase');

const Department = bookshelf.Model.extend({
  tableName: 'departments',
  idAttribute: 'id'
});

module.exports = Department;