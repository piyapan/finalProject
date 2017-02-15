let helpdesk = require('../model/helpdesk');
exports.index = function (req, res) {
  helpdesk.getNameUseCustomer(function (err, value) {
      res.render('helpdesk',{use:value});
  })

};
exports.getIpAddress = function (req, res,next) {
  let id = req.params.id;
  helpdesk.GetListById(id, function (err, value) {
    if (err) {
      next(err)
      console.log(err);
    }else {
      res.json(value)
    }
  })
};
exports.getGroupByid = function (req, res, next) {
  let id = req.params.id;

  helpdesk.getGroupContentByid(id, function (err, value) {
    if (err) {
      console.log(err);
      next(err)
    } else {
      res.json(value)
    }
  })
};
exports.UpdateList = function (req, res, next) {

let id = req.body.Ia_id;
let data =   {
  Ia_ais: req.body.Ia_ais,
  Ia_dtac: req.body.Ia_dtac,
  Ia_cid: req.body.Ia_cid,
  Ia_ph_ais: req.body.Ia_ph_ais,
  Ia_ph_dtac: req.body.Ia_ph_dtac,
  Ia_st: req.body.Ia_st
 }
  helpdesk.updatePackageIp(id, data, function (err, value) {
    if (err) {
      next(err)
      console.log(err);
      res.status(500).json(err);
    }else {
      res.json(value)
    }
  }) 
};
