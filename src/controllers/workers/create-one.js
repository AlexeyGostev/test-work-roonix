const ResponseJson = require('../libs/reponseJson');
const workerRepository = require('../../repositories/worker');
const descriptionConstants = require('../libs/constants/descriptionConstants');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let workerFields = req.body;
    let workerDepartments = req.body.departments || [];
    let newWorker;

    // Валидация
    // Проверить есть ли такие отделы

    newWorker = await workerRepository.insertOne(workerFields);
    for (let i = 0; i < workerDepartments.length; i+= 1) {
      await workerRepository.insertOneDepartment(newWorker.id, workerDepartments[i]);
    }

    rj.setDescription(descriptionConstants);
    return res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};