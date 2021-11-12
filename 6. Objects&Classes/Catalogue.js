function solve(arr) {
    let chars = [];
    arr.sort((a, b) => a.localeCompare(b));
    let char = arr[0][0];
    console.log(char);
    for(let el of arr) {
        let current = el[0];
        if(current !== char) {
            char = current;
            console.log(char);
        }
        let s = el.split(' : ');
        if(chars.indexOf(current) > 0) {
            console.log(char);
        }
        console.log(`  ${s[0]}: ${s[1]}`);
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

    
    /*for(let el of arr) {
        let char = el[0];
        if(!chars.includes(char)) chars.push(char);
    }
    console.log(chars[0]);
    for(let el of arr) {
        let current = el[0];
        let s = el.split(' : ');
        if(chars.indexOf(current) > 0) {
            chars.shift();
            console.log(chars[0]);
        }
        console.log(`  ${s[0]}: ${Number(s[1])}`);
    }*/