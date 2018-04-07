const ResponseJson = require('../libs/reponseJson');
const workerRepository = require('../../repositories/worker');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let offset = req.body.offset || 0;
    let limit = req.body.limit || 20;
    let workers = {};

    workers = await workerRepository.selectAll({
      limit,
      offset
    });

    rj.set('workers', workers);
    res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};