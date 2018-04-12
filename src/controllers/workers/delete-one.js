const ResponseJson = require('../libs/reponseJson');
const workerRepository = require('../../repositories/worker');
const descriptionConstants = require('../libs/constants/descriptionConstants');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let workerId = req.params.workerId;

    // Валидация
    // Есть ли такой id

    await workerRepository.deleteAllDepartment(workerId);
    await workerRepository.deleteOne(workerId);

    rj.setDescription(descriptionConstants.WORKER_DELETED);
    return res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};