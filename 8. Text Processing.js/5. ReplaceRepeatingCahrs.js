function solve(word) {
    let container = [];
    for(let i = 0; i < word.length; i++) {
        if(word[i] !== word[i - 1]) container.push(word[i]);
    }
    console.log(container.join(''));
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');