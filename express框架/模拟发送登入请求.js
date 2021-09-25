var request = require('request');
var axios = require('axios');
const { data } = require('jquery');
var  http = require('http');

// var host = '47.103.152.134';
var studentCode = '201800002505';
var IDNo = '130010';
var datas = {
    studentCode: studentCode,
    IDNo: IDNo
};
// console.log(loginHeader);
// console.log(JSON.stringify(datas));
request.post({
    url:'http://47.103.152.134/SpReportData/reportdata/login',    //请求路径
    form:datas                        //post参数字符串
}, function (error, response, body) {
    console.log(error);
    console.log(response.body);
});




// axios({
//     'method': 'post',
//     'url': 'http://47.103.152.134/SpReportData/reportdata/login',
//     'header':{
//         'Accept':'*/*',
//         'Accept-Encoding':'gzip, deflate',
//         'Accept-Language':'zh-CN,zh;q=0.9',
//         'Connection':'keep-alive',
//         'Content-Length':'37',
//         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
//         'Cookie':'studentCode=studentCode; IDNo=IDNo',
//         'Host':host,
//         'Origin':'http://'+host,
//         'Referer':'http://'+host+'/SpReportData/reportdata',
//         'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
//         'X-Requested-With':'XMLHttpRequest'
//     },
//     data: JSON.stringify(data)
// }).then(response => {
//     console.log(response.data); console.log(response.data.explanation);
// }).catch(error => { console.log(error); });
