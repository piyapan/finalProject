let customer = require('../model/customer')
let config = require('../model/config')
exports.index = function (req, res) {
  res.render('config')
}
exports.getrouter = function (req, res, next) {
  config.getName(function (err, value) {
    if (err) {
      console.log(err)
      next(err)
    } else {
      res.status(200).json(value)
    }
  })
}
exports.edite = function (req, res, next) {
  config.changStatus(req.body, function (err, value) {
    if (err) {
      console.log(err)
      next(err)
    } else {
      res.json(value)
    }
  })
}
exports.save = function (req, res, next) {
  let id = req.params.id
  let data = req.body
  config.insert(id, data, function (err, value) {
    if (err) {
      console.log(err)
      next(err)
    } else {
      config.getLast(id, function (err, value) {
        if (err) {
          console.log(err)
          next(err)
        } else {
          res.json(value)
        }
      })
    }
  })
}
exports.getDataByID = function (req, res, next) {
  let id = req.params.id
  config.getbyId(id, function (err, value) {
    if (err) {
      console.log(err)
      next(err)
    } else {
      res.json(value)
    }
  })
}
