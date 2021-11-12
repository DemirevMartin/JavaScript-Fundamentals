function sorting(a) {
    a.sort((x, y) => x - y);
    let res = [];
    if(a.length % 2 !== 0) {
        for(let i = 0; i <= Math.floor(a.length/2); i++) {
            let j = a.length - 1 - i;
            res.push(a[j]);
            if(!(i === j)) {
                res.push(a[i]);
            }
        }
    }
    else {
        for(let i = 0; i < Math.floor(a.length/2); i++) {
            let j = a.length - 1 - i;
            res.push(a[j]);
            res.push(a[i]);
        }
    }
    console.log(res.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 105]);