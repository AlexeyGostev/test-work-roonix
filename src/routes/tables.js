const express = require('express');
const router = express.Router();
const tablesControllers = require('../controllers/tables');

router.get('/departments', tablesControllers.getDepartmentTable);

module.exports = router;
