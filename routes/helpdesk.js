var express = require('express');
var router = express.Router();

var helpdesk = require('../controller/helpdesk');

router.get('/',helpdesk.index);

module.exports = router;
