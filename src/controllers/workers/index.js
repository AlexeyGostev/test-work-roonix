const createOne = require('./create-one');
const deleteOne = require('./delete-one');
const changeOne = require('./change-one');
const getAll = require('./get-all');

module.exports = {
  createOne: createOne,
  deleteOne: deleteOne,
  getAll: getAll,
  changeOne: changeOne
};