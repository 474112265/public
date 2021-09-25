const express = require("express");

//调用外置路由模块
var router = express.Router();

router.get("./",(req,res)=>{
    res.send("get");
});


router.post("./",(req,res)=>{
    res.send("post");
});

//将router导出
module.exports = router;