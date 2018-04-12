const ResponseJson = require('../libs/reponseJson');
const departmentRepository = require('../../repositories/department');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let offset = req.body.offset || 0;
    let limit = req.body.limit || 20;
    let departments;

    departments = await departmentRepository.selectAll({
      limit,
      offset
    });

    rj.set('departments', departments);
    res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};