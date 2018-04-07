const Worker = require('./../../models/worker');

module.exports = async (options) => {
  try {
    let limit = options.limit;
    let offset = options.offset;

    return await Worker.query()
      .select()
      .limit(limit)
      .offset(offset);
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};