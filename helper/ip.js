
let netmask = require('netmask').Netmask
exports.getpackage = function (subnet, date, sim) {
  var block = new netmask(subnet)
  let first = block.first
  let last = block.last
  let packageIp = []
  var start = first.substring(first.indexOf('.', 4) + 1, first.indexOf('.', 6))
  var stop = last.substring(last.indexOf('.', 4) + 1, last.indexOf('.', 6))
  var temp = {}
  if (sim == 1) {
    for (var i = Number(start); i <= Number(stop); i++) {
      packageIp.push({ai_name: 'AIS' + first.substring(0, first.indexOf('.', 4) + 1) + '' + i + '.1', ai_date: date, ai_ip: first.substring(0, first.indexOf('.', 4) + 1) + '' + i + '.1'})
    }
  } else {
    for (var i = Number(start); i <= Number(stop); i++) {
      packageIp.push({dt_name: 'DTAC' + first.substring(0, first.indexOf('.', 4) + 1) + '' + i + '.1', dt_date: date, dt_ip: first.substring(0, first.indexOf('.', 4) + 1) + '' + i + '.1'})
    }
  }

  return packageIp
}
exports.getIp = function (ais, dtac, cus) {
   let iais = subip(ais);
   let idtac = subip(dtac);
   let  data = iais.map((item,index) => {
        return {la_ais:item, la_dtac:idtac[index],la_uc:cus};
        });

    return data;
  };
function subip(ip) {
  var str = ip.substring(0,ip.indexOf('.',6)+1);
  var temp = [];
    for (var i = 1; i <= 254; i++) {
      temp.push(str+'.'+i);
    }

  return temp;
}
