var helper = require('./ip')
var data = helper.getpackage('10.16.189.1/20', '25/1/2016', 2, 'test')
var model = require('../model/ip')

 var use = helper.getIp('10.12.6.1', '10.1.3.1',2);

 for (let index in use) {
 console.log(use[index]);
 }
