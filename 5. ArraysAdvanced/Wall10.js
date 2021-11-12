function buildThatWall(b) {
    let n = [];
    let sum = 0;
    let a = b.map(Number).filter(x => x < 30);
    while(true) {
        let incr = a.map(x => x + 1);
        n.push(a.length);
        sum += a.length;
        let f = incr.filter(x => x < 30);
        if(f.length === 0) break;
        a.splice(0, a.length);
        for(let el of f) {
            a.push(el);
        }
    }
    let res = n.map(x => x * 195);
    console.log(res.join(', '));
    let total = sum * 195 * 1900;
    console.log(`${total} pesos`);
}
//buildThatWall([21, 25, 28]);
//buildThatWall([17]);
buildThatWall([17, 22, 17, 19, 17]);