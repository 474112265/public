const express = require("express");
var router = require("./2(外置路由).js");
var app = express();

app.use(router);

app.listen(3000,function(){
    console.log("请访问127.0.0.1:3000");
})