const insertOne = require('./insert-one');
const updateOne = require('./update-one');
const deleteOne = require('./delete-one');

const selectAll = require('./select-all');

const selectCountWorkers = require('./select-count-workers');

module.exports = {
  insertOne: insertOne,
  updateOne: updateOne,
  deleteOne: deleteOne,
  selectAll: selectAll,
  selectCountWorkers: selectCountWorkers
};