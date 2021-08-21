var express = require('express');
//form表单需要的中间件。
var mutipart= require('connect-multiparty');

var mutipartMiddeware = mutipart();
var app = express();
//下面会修改临时文件的储存位置
app.use(mutipart({uploadDir:'./linshi'}));
//设置http服务监听的端口号。
app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'),function () {
    console.log("Express started on http://localhost:"+app.get('port')+'; press Ctrl-C to terminate.');
});
//动态加载public
app.use(express.static('public'));  

//这里就是接受form表单请求的接口路径，请求方式为post。
app.post('/upload',mutipartMiddeware,function (req,res) {
    //输出接受的信息
    console.log(req.files);
    //返回成功提示。
    res.send('upload success!');
});