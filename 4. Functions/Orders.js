function sum(d, n) {
    let p = 0;
    if(d === "water") {
        p = 1;
    }
    else if(d === "coffee") {
        p = 1.5;
    } 
    else if(d === "coke") {
        p = 1.4;
    } 
    else if(d === "snacks") {
        p = 2;
    } 
    console.log((n * p).toFixed(2));
}
sum("water", 15);
sum("coffee", 2);