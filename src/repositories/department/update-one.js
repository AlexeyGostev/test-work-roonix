const db = require('../../libs/connectDatabase');

module.exports = async (id, fields) => {
  try {
    let departmentFields = {
      title: fields.title
    };
    return await db.query(
      "UPDATE departments SET title = '" + departmentFields.title + "'" +
      "WHERE id = " + id);
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};