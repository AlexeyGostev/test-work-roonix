const ResponseJson = require('../libs/reponseJson');
const departmentRepository = require('../../repositories/department');
const descriptionConstants = require('../libs/constants/descriptionConstants');
const errorCodeConstants = require('../libs/constants/errorCodeConstatnts');


module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let departmentId = req.params.departmentId;

    // Валидация
    // есть ли вообще такой id

    if ((await departmentRepository.selectCountWorkers(departmentId)) > 0) {
      rj.setAll(400, descriptionConstants.DEPARTMENT_NOT_DELETED, errorCodeConstants.DEPARTMENT_HAVE_WORKERS);
      return res.status(rj.status).json(rj);
    }
    await departmentRepository.deleteOne(departmentId);

    rj.setDescription(descriptionConstants.DEPARTMENT_DELETED);
    return res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};