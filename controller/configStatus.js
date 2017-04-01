
let status = require('../model/router');
exports.getList = function (req, res, next) {
  status.getAllconfigStatus(function (err, value) {
    if (err) {
      console.log(err);

      next(err)
    }else {
      res.json(value)
    }
  })
};
exports.add = function (req, res, next) {
  status.insertconfigStatus(req.body,function (err, value) {
    if (err) {
      console.log(err);
      next(err)
    }else {
      res.json(value)
    }
  })
};
