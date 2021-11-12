/*function calc(a) { First solution
    let b = [];
    for(let i = 1; i < a.length; i += 2) {
        b.push(a[i] * 2);
    }
    console.log(b.reverse().join(' '));
}*/
//Second solution
let calc = n => n
    .filter((x, i) => i % 2 === 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');

console.log(calc([10, 15, 20, 25]));
console.log(calc([3, 0, 10, 4, 7, 3]));