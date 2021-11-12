function check(f, s, t) {
    let n = 0;
    if(f < 0) n++;
    if(s < 0) n++;
    if(t < 0) n++;
    if(n % 2 === 0) console.log("Positive");
    else console.log("Negative");
}
check(5, 15, -15);