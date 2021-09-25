var fs = require("fs");

function fun(files) {
    return new Promise(function (succ, err) {
        fs.readFile(files, "utf8", function (err, data) {
            succ();
            console.log(data);
        })
    })
}

fun("./Class.html").then(function(data){
    console.log(data);
    return fun("./箭头函数.html");
}).then(function(data){
    console.log(data);
})