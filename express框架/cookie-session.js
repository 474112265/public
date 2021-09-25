var express = require("express");
var app = express();
var cs = require('cookie-session');


app.use(cs({
    // cookie 的名字键
    name:"user",
    // 用于cookie值的加密关键字
    keys:['password'],
}));

app.post("/",function(req,res){
    console.log(req.method);
    var us_ps = {user:'admin',psd:'123'};
    req.session.session_data = us_ps;
    res.send("session写入成功");
})

app.listen(3000,function(){
    console.log("127.0.0.1");
})