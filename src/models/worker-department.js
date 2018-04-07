const bookshelf = require('../libs/connectDatabase');

const WorkerDepartment = bookshelf.Model.extend({
  tableName: 'workers_departments',
  idAttribute: 'id'
});

module.exports = WorkerDepartment;