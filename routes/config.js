var express = require('express');
var router = express.Router();
var config = require('../controller/config');
router.get('/',config.index);

module.exports = router;
