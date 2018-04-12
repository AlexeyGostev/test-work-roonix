const db = require('../../libs/connectDatabase');

module.exports = async () => {
  try {
    return (await db.query(
      "SELECT departments.id, departments.title, " +
      "(SELECT COUNT(*) FROM workers_departments WHERE workers_departments.id_department = departments.id) AS countWorkers, " +
      "(SELECT MAX(workers.pay) FROM workers, workers_departments WHERE workers_departments.id_department = departments.id) AS maxPay " +
      "FROM departments, workers_departments " +
      "GROUP BY departments.id"
    )).rows;
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};