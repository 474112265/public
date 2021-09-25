let sleep = (timeout)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`等我${timeout/1000}秒`);
        }, timeout);
    })
}

// (async ()=>{
//     console.time("myTime");
//     var [a,b] =await Promise.all([
//          sleep(2000),
//          sleep(1000)
//     ]);
//     console.timeEnd("myTime");
// })();

(async ()=>{
    console.time("myTime");
    console.log("111");
    console.log(await sleep(2000));
    console.log("222");
    console.timeEnd("myTime");
})();
