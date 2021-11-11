function solve(a, b)
{
    let c = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
                c.push(a[i]);
            }
        }
    }
    for(let el of c) {
        console.log(el);
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);