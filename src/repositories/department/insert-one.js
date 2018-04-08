const db = require('../../libs/connectDatabase');

module.exports = async (fields) => {
  try {
    let departmentFields = {
      title: fields.title
    };
    return await db.query("INSERT INTO departments (title) VALUES ('" + departmentFields.title + "')");
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};