function bomb(a, b) {
    while(a.includes(b[0])) {
        let index = a.indexOf(b[0]);
        let pos = index - b[1];
        let remove = 2 * b[1] + 1
        if(pos < 0) {
            remove += pos;
            pos = 0;
        }
        a.splice(pos, remove);
    }
    //console.log(sequence.reduce((a, b) => a + b, 0));
    let sum = 0;
    for(let el of a) {
        sum += el;
    }
    console.log(sum);
}
//bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bomb([7, 7, 1, 2, 3], [7, 2]);
//bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);