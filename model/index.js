let model = require('../config/mysql')
let index = {}
index.getLengtAis = function (cb) {
  model.query('select count(*)*254 as aiCount from ais_ip where ai_st = 2', cb)
}
index.getUseAis = function (cb) {
  model.query('select count(*)*254 as aiCount from ais_ip where ai_st = 1', cb)
}
index.getUseDtac = function (cb) {
  model.query('select count(*)*254 as dtCount from dtac_ip where dt_st = 1', cb)
}
index.getALlUse = function (cb) {
  index.getUseAis(function (err, Arow) {
    if (err) {
      cb(err, null)
    } else {
      index.getUseDtac(function (err, Drow) {
        if (err) {
          cb(err, null)
        } else {
          let AllUse = Drow[0]['dtCount'] + Arow[0]['aiCount']
          cb(null, {AllUse: AllUse})
        }
      })
    }
  })
}
index.getAllReset = function (cb) {
  index.getLengtAis(function (err, Arow) {
    if (err) {
      cb(err, null)
      console.log('error')
    } else {
      index.getLengtDtac(function (err, row) {
        if (err) {
          cb(err, null)
          console.log(err)
        } else {
          let total = row[0]['dtCount'] + Arow[0]['aiCount']
          cb(null, {total: total})
        }
      })
    }
  })
}
index.getLengtDtac = function (cb) {
  model.query('select count(*)*254 as dtCount from dtac_ip where dt_st = 2', cb)
}

index.getLengthCustomer = function (cb) {
  let sql = 'select count(Ia_ais) as use_ais, count(Ia_dtac) as use_dtac , b.c_name from IpAdress as a inner join (select * from useCutomer as x inner join Customer as y on x.uc_cu = y.c_id) as b on a.Ia_uc = b.uc_id  where a.Ia_st = ? group by b.c_name '
  model.query(sql)
}

module.exports = index
