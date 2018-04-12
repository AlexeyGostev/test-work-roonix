const Department = require('./../../models/department');

module.exports = async (options) => {
  try {
    let limit = options.limit;
    let offset = options.offset;

    return await Department.query()
      .select()
      .limit(limit)
      .offset(offset);
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};