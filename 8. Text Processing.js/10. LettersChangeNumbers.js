function solve(str) {
    const trimStr = str.replace(/\s+/g, ' ');
    const arr = trimStr.split(' ');
    let sum = 0;
    let alphabet = "";
    for(let i = 97; i < 123; i++) {
        alphabet += String.fromCharCode(i);
    }
    for(const el of arr) {
        const numberString = el.split('').filter(a => !isNaN(a)).join('');
        const firstIndex = el.indexOf(numberString);
        const firstLetters = el.substring(0, firstIndex);
        const lastLetters = el.substring(firstIndex + numberString.length, el.length);
        let number = Number(numberString);
        for(let i = 0; i < firstLetters.length; i++) {
            const current = firstLetters[i];
            const aIndex = alphabet.indexOf(current.toLowerCase()) + 1;
            if(current.toUpperCase() === current) {
                number /= aIndex;
            }
            else number *= aIndex;
        }
        for(let i = 0; i < lastLetters.length; i++) {
            const current = lastLetters[i];
            const aIndex = alphabet.indexOf(current.toLowerCase()) + 1;
            if(current.toUpperCase() === current) {
                number -= aIndex;
            }
            else number += aIndex;
        }
        sum += number;
    }
    console.log(sum.toFixed(2));
}
solve('P34562Z q2576f   H456z');
solve('A12b s17G');
solve('a1A');