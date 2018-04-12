const Worker = require('./../../models/worker');

module.exports = async (fields, id) => {
  try {
    let workerFields = {
      first_name: fields.firstName,
      last_name: fields.lastName,
      patronymic: fields.patronymic,
      sex: fields.sex,
      pay: fields.pay
    };
    return await (new Worker({
        id: id
      }))
      .save(workerFields, {method: 'update'});
  }
  catch(err) {
    console.log(err);
    throw err;
  }
};