const ResponseJson = require('../libs/reponseJson');
const departmentRepository = require('../../repositories/department');
const descriptionConstants = require('../libs/constants/descriptionConstants');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let departmentFields = req.body;
    let departmentId = req.body.id;

    // Валидация

    await departmentRepository.updateOne(departmentId, departmentFields);
    rj.setDescription(descriptionConstants.DEPARTMENT_CHANGED);
    res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};