function perfection(a) {
    let d = [];
    for(let i = 1; i < a; i++) {
        if(a % i === 0) {
            d.push(i);
        }
    }
    let sum = 0;
    for(let el of d) {
        sum += el;
    }
    if(sum === a) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}
perfection(6);