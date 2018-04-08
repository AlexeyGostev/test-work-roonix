const db = require('../../libs/connectDatabase');

module.exports = async (workerId, departmentId) => {
  try {
    return await db.query(
      "INSERT INTO workers_departments (id_worker, id_department) " +
      "VALUES ('" + workerId + "', '" + departmentId + "')");
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};