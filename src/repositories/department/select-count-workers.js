const db = require('../../libs/connectDatabase');

module.exports = async (id) => {
  try {
    return (await db.query("SELECT COUNT(*) FROM workers_departments WHERE id_department = " + id)).rows[0].count;
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};