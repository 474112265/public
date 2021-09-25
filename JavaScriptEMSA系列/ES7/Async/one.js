var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('https://imgcache.gtimg.cn/ACT/svip_act/act_img/public/202005/1589358144_477X266.jpg');
  var f2 = yield readFile('http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/202004/1586856128_272x133ye.jpg');
  console.log(f1.toString());
  console.log(f2.toString());
};

gen();