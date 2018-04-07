const express = require('express');
const router = express.Router();
const workersControllers = require('../controllers/workers');

router.get('/', workersControllers.getAll);

router.post('/', workersControllers.createOne);

router.put('/', workersControllers.changeOne);

router.delete('/', workersControllers.deleteOne);

module.exports = router;
