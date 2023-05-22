function sumofRange(a,n){
    let total =0;
    for (let i=a; i <= n; i++){
        total += i;
    }
    return total;
}
console.log(sumofRange(20,100));