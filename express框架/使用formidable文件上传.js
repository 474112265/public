var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var app = express();


app.post("/",function(req,res){
    var form = formidable.IncomingForm(); // 实例化 IncomingForm对象
    form.uploadDir='tmp';  
    form.parse(req,(err,fields,files)=>{
        fs.rename(files.imgs.path,"./"+files.imgs.name,(err)=>{
            console.log(err);
        })
    })
})

app.listen(3000,function(){
    console.log("127.0.0.1");
})

        // console.log(err);
        // console.log("========");
        // console.log(fields);
        // console.log("========");
        // console.log(files);