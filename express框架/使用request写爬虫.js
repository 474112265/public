var request = require("request");
var cheerio = require("request");

var httpUrl = "https://www.doutula.com/";

request.get(httpUrl,function(err,res,body){
    if(err){
        console.log(err);
    }else{
        console.log(body);
    }
})