let mysql = require('mysql2');
let  config = require('../system/database/config')['mysql']['localhost'];
let connection =  mysql.createConnection(config);
module.exports = connection;
