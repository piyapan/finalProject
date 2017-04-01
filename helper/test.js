let model = require('../model/index')
model.getALlUse(function (err, value) {
  if (err == null) {
    console.log(value)
  } else {
    console.log(err)
  }
})
model.getAllReset(function (err, value) {
  if (err == null) {
    console.log(value)
  } else {
    console.log(err)
  }
})
