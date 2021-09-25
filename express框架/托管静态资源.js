var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static("public"));
router.get("./",(req,res)=>{
    console.log("111");
    res.send("get");
});

//访问时不需要带  public
router.post("./",(req,res)=>{
    console.log("222");
    res.send("post");
});

app.listen(80,function(){
    console.log("请访问127.0.0.1");
})

// 访问  http://127.0.0.1:3000/node\skin\images\1-1P421113030b0.jpg