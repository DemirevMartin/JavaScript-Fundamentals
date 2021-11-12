function solve(a) {
    /*My solution:
    for(let i = 0; i < a.length - 1; i++) {
        for(let j = a.length - 1; j > i; j--) {
            if(a[i] === a[j]) {
                a.splice(j, 1);
            }
        }
    }*/
    let resArr = [];
    for(let el of a) {
        if(!resArr.includes(el)) {
            resArr.push(el);
        }
    }
    console.log(resArr.join(' '));
}
solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);
solve([5, 5, 5, 6, 15, 5, 5, 5, 5]);
