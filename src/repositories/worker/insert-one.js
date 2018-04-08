const Worker = require('./../../models/worker');

module.exports = async (fields) => {
  try {
    let workerFields = {
      first_name: fields.firstName,
      last_name: fields.lastName,
      patronymic: fields.patronymic,
      sex: fields.sex,
      pay: fields.pay
    };
    return await (new Worker(workerFields))
      .save(null, {method: 'insert'});
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};