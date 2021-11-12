function solve(a, str) {
    let copy = str.split('');
    for(let el of a) {
        copy = copy.filter(a => a !== el);
    }
    console.log(copy.join(''));
}
solve("ice", "kicegiciceeb");