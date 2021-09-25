const { resolve } = require("path");
const { rejects } = require("assert");

function kill(){
    return new Promise((resolve,reject)=>{
        if(true){
					console.log(`hello Promise`)
            resolve('hello world');
        }
    })
}

kill().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

try{
    console.log("try");
}
catch{
    console.log("错误");
}
finally{
    console.log("finally");
}

// try语句允许我们定义在执行时进行错误测试的代码块。

// catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

// finally 语句在 try 和 catch 之后无论有无异常都会执行。