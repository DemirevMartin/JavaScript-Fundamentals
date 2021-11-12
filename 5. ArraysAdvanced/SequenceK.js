function printSeq(n, k) {
    let a = [];
    a.push(1);
    while(n - 1 > 0) {
        let p = a.slice(-k);
        let sum = 0;
        for(let el of p) {
            sum += el;
        }
        a.push(sum);
        n--;
    }
    console.log(a.join(' '));
}
printSeq(6, 3);
printSeq(8, 2);