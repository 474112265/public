var request = require('request');
var axios = require('axios');
const { data } = require('jquery');
var  http = require('http');

var host = '47.103.152.134';
var studentCode = '201800002505';
var IDNo = '130010';
var datas = {
    studentCode,
    IDNo
};
var loginHeader = {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Method": "*",
    // "Access-Control-Allow-Headers":"Content-Type",
    // "Access-Control-Max-Age": "3600",
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': '37',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //  'Cookie': `studentCode=${studentCode}; IDNo=${IDNo}`,
  //  'Host': '   ',
  //  'Origin': 'http://' + '47.103.152.134',
  //  'Referer': 'http://' + '47.103.152.134' + '/SpReportData/reportdata',
   // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
  //  'X-Requested-With': 'XMLHttpRequest',                //设置请求头
}
request.post({url: 'http://47.103.152.134/SpReportData/reportdata/login', form: datas}, function (error, response, body) {
	console.log(error);
    console.log(JSON.parse(body).status);
})
/*request({
    url: 'http://47.103.152.134/SpReportData/reportdata/login',    //请求路径
    method: "POST",                                                 //请求方式
    headers: loginHeader,
    form: datas,                         //post参数字符串
}, function (error, response, body) {
    console.log(error);
    console.log(response.body);
    console.log(body);
});
*/