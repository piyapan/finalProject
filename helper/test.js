var helper = require('./ip');
var data = helper.getpackage('10.16.189.1/20','25/1/2016',1);
//helper.getIp(data);
var use = helper.getIp('10.16.0.1', '10.13.23.1',3);

for (let index in use) {
  console.log(use[index]);
}
