let stocks = {
    Fruits:["straberries", "grapes","banana","apples"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanut"]
};
let is_shop_open = false;
let order =(time, work)=>{


    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
            resolve(work());
        }else{
            reject(console.log("our shop is closed"));
        }
    });
};
order(2000, ()=>console.log( `${stocks.Fruits[0]} was selected`))
   .then(()=>{
    //if we dont write the return then it aint gonna work
    return order(0000, ()=> console.log("production has started"));
})
.then (()=>{
    return order(2000, ()=> console.log("the fruits was chopped"));
})
.then(()=>{
    return order(1000,()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})
.then(()=>{
    return order(1000,()=> console.log("start the machine"));
})
//no semicolons in the .then code
.then (()=>{
    return order(2000,()=>  console.log(`ice cream was placed on ${stocks.holder[0]}`));
})
.then(()=>{
    return order(3000,()=> console.log(`${stocks.toppings[1]} was added`) )
})
.then(()=>{
    return order(1000,()=> console.log('ice cream was served'));
})
.catch(()=>{
    console.log("customer left");
})
.finally(()=>{
    console.log("Day ended go home");
})