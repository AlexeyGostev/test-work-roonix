const Worker = require('./../../models/worker');

module.exports = async (id) => {
  try {
    return await Worker.where({id: id}).destroy();
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};