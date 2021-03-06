const insertOne = require('./insert-one');
const deleteOne = require('./delete-one');
const updateOne = require('./update-one.js');

const selectAll = require('./select-all');

const insertOneDepartment = require('./insert-one-department');
const deleteAllDepartment = require('./delete-all-department');

module.exports = {
  insertOne: insertOne,
  deleteOne: deleteOne,
  selectAll: selectAll,
  updateOne: updateOne,
  insertOneDepartment: insertOneDepartment,
  deleteAllDepartment: deleteAllDepartment
};