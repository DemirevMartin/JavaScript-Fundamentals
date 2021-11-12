function bomb(a, b) {
    while(a.includes(b[0])) {
        let index = a.indexOf(b[0]);
        let container = a.filter((x, y) => (y < index - b[1] || y > index + b[1]));
        a.splice(0, a.length);
        for(let el of container) {
            a.push(el);
        }
    }
    console.log(a.reduce((x, y) => x + y, 0));
}
bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bomb([1, 7, 7, 1, 2, 3], [7, 1]);
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);