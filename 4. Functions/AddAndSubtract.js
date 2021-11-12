function calc(a, b, c) {
    function add(a, b) {
        let sum = a + b;
        return sum;
    }
    function sub(c) {
        let sub = add(a, b) - c;
        return sub;
    }
    console.log(sub(c));
}
calc(15, 15, 26);

/*let calc = (a, b, c) => a + b - c;
console.log(calc(15, 15, 26));*/

