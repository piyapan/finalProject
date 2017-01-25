var express = require('express');
var router = express.Router();
var ip = require('../controller/ip');
router.get('/',ip.index);

module.exports = router;
