const ResponseJson = require('../libs/reponseJson');
const tableRepository = require('../../repositories/table');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let table = await tableRepository.selectDepartmentTable();

    rj.set('departments', table);
    return res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};