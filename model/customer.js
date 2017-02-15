let model = require('../config/mysql')
exports.get = function (id, cb) {
  model.query('select * from customer where c_type = ?', [id], cb)
}
exports.type = function (cb) {
  model.query('select * from typeCustomer', cb)
}
exports.save = function (data,cb) {
  model.query('insert into customer set ?',[data],cb)
};
exports.getlist = function (cb) {
  model.query('select * from customer as a inner join typeCustomer as b on a.c_type = b.tc_id',cb)
};
exports.jointype = function (cb) {
  model.query('select * from customer as a inner join typeCustomer as b on a.c_type = b.tc_id order by a.c_id desc limit 1',cb)
};
