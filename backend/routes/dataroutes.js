const express = require('express');
const router = express.Router();
const data = require('../controllers/datacontroller');

router.get('/' , data);

module.exports = router;