var x = 10;
let y = 20;
const c = 30;


{
    var x1 = 1;
    let y1 = 2;
    const c1 = 3;
    
    console.log("Dans le bloc:");
    console.log(x1); 
    console.log(y1); 
    console.log(c1); 
}

console.log("En dehors du bloc:");
console.log(x1);
// console.log(y1); // err
// console.log(c1); // err

// c = 0 ; // err