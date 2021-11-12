function calc(a) {
    const b = a.toString();
    let e = 0;
    let o = 0;
    for(let c of b) {
        let d = Number(c);
        if(d % 2 === 0) {
            e += d;
        }
        else o += d;
    }
    console.log(`Odd sum = ${o}, Even sum = ${e}`);
}
calc(100435);