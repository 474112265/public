var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '47.92.64.137',
    user: 'mysql_databases',
    password: 'Qwerdfb123',
    database: 'mysql_databases'
}); //连接数据库

let sleep = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`等我${timeout / 1000}秒`);
        }, timeout);
    })
}

let cons = (text) => {
    return new Promise((resolve) => {
        resolve();
        console.log(text);
    })
}

var mysql = sql => {
    return new Promise(function(resolve,reject){
        connection.query(sql,function (err, result, fidlds) {
            resolve('成功');
            console.log(result);
        })
    })
}

async function a() {
    await cons("好家伙");
    await connection.connect();
    await cons("咋肥事");
    await mysql('select * from student');
    await connection.end();
    await cons("最终还是结束了");
}


var b = a();
console.log(b);