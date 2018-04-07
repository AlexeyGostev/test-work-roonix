const ResponseJson = require('../libs/reponseJson');
const workerRepository = require('../../repositories/worker');

module.exports = async (req, res, next) => {
  try {
    let rj = new ResponseJson();
    let workerFields = req.body;

    await workerRepository.insertOne(workerFields);
    res.status(rj.status).json(rj);
  } catch(err) {
    console.log(err);
    next(500);
  }
};