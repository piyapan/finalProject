var express = require('express')
var router = express.Router()
let customer = require('../../model/customer')
router.get('/', function (req, res) {
  res.render('customer')
})
router.post('/save', function (req, res, next) {
  console.log('post by clinet : json' + req.body)

 customer.save(req.body, function (err, data) {
    if (err) {
      next(err)
    } else {
      customer.jointype(function (err, item) {
        if (err) {
          next(err)
        } else {
          res.json(item)
        }
      })
    }
  })
});
router.get('/list', function ( req,  res ) {
  customer.getlist(function (err, value) {
    if (err) {
      console.log(err);
    }else {
      res.json(value);
    }
  })
})

module.exports = router
