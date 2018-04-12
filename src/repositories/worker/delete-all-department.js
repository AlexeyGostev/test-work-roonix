const db = require('../../libs/connectDatabase');

module.exports = async (workerId) => {
  try {
    return await db.query( "DELETE FROM workers_departments WHERE id_worker = " + workerId);
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};