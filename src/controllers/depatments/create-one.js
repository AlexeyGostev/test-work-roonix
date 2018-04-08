const ResponseJson = require('../libs/reponseJson');
const departmentRepository = require('../../repositories/department');
const descriptionConstants = require('../libs/constants/descriptionConstants');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let departmentFields = req.body;

    // Валидация

    await departmentRepository.insertOne(departmentFields);
    rj.setDescription(descriptionConstants.DEPARTMENT_CREATED);
    res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};