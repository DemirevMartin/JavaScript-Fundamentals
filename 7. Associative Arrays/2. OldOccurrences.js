function solve(str) {
    let words = str.split(' ');
    let obj = {};

    for(const word of words) {
        const currentWord = word.toLowerCase();
        if(!obj.hasOwnProperty(currentWord)) {
            obj[currentWord] = 1;
        }
        else obj[currentWord] += 1;
    }
    let output = [];
    for(const [key, value] of Object.entries(obj)) {
        if(value % 2 !== 0) output.push(key);
    }
    console.log(output.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');