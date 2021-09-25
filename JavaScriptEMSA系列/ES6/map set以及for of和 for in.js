require('babel-register')({
    presets: ['es2015']
});
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C' , "C"]);//不允许有重复的值
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
for (let aa of m){//使用 for in遍历
    console.log(aa);
}
