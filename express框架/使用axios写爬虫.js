

var axios = require("axios");
var cheerio = require("cheerio");
var httpReq = "https://www.doutula.com/";

axios.get(httpReq).then((res)=>{
    var $ = cheerio.load(res.data);
    $("#home .random_picture .pic-content a").each((i,element)=>{
        $pageUrl
    })
})