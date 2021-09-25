var express = require("express");

var app = express();

app.post("/",function(req,res){
    var data = "";
    req.on("data", che => data+=che);
    req.on("end",function(){
        console.log(data);
        res.end();
    })
})

app.listen(3000,function(){
    console.log("127.0.0.1");
})