async function a(){
    return "111";
}


console.log(Promise.resolve("111") == a());
console.log(Promise.resolve("111"))
console.log(a());