const express = require('express');
const router = express.Router();
const departmentsControllers = require('../controllers/depatments');

router.get('/', departmentsControllers.getAll);

router.post('/', departmentsControllers.createOne);

router.put('/', departmentsControllers.changeOne);

module.exports = router;
