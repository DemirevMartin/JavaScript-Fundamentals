function find(a, b, c) {
    let r = 0;
    if(a < b && a < c) r = a;
    else if(b < a && b < c) r = b;
    else r = c;
    console.log(r);
}
find(15, 1515, -15);