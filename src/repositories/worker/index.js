const insertOne = require('./insert-one');
const deleteOne = require('./delete-one');
const selectAll = require('./select-all');
const updateOne = require('./update-one.js');

module.exports = {
  insertOne: insertOne,
  deleteOne: deleteOne,
  selectAll: selectAll,
  updateOne: updateOne
};