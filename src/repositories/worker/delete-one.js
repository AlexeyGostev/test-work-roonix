const db = require('../../libs/connectDatabase');

module.exports = async (id) => {
  try {
    return await db.query("DELETE FROM workers WHERE id = " + id);
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};