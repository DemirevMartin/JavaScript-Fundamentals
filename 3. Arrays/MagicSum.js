function magic(a, n)
{
    let r = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if(a[i] + a[j] === n) {
                //if(!r.includes(a[i]) && !r.includes(a[j]))
                r.push(a[i]);
                r.push(a[j]);
            }
        }
    }
    for(let m = 0; m < r.length; m += 2) {
        console.log(`${r[m]} ${r[m + 1]}`);
    }
}
magic([1, 7, 6, 2, 19, 23], 8);