const bookshelf = require('../libs/connectDatabase_').bookshelf;

const WorkerDepartment = bookshelf.Model.extend({
  tableName: 'workers_departments',
  idAttribute: 'id'
});

module.exports = WorkerDepartment;