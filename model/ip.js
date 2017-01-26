var model = require('../config/mysql');

exports.insert= function (id,data,cb) {
  var type;
if (id = 1) {
  type = 'ais';
}else {
  type = 'dtac';
}
  for (let  i = 0; i < data.length; i++) {
     let item = data[i]
     model.execute('insert into '+type+'_ip set ?',item , cb);
  }
};

exports.insertUse = function (data,cb) {
  model.execute('insert into useCustomer set ?',data , cb);
};

exports.ipaddress = function (data,cb) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    model.execute('insert into IpAdress set ?',item , cb);
  }
};
