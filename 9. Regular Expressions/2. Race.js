function solve(arr) {
    const names = arr.shift().split(', ');
    let data = {};
    for(const name of names) data[name] = 0;
    const namesPattern = /[A-Za-z]+/g;
    const numsPattern = /\d+/g;
    for(const el of arr) {
        if(el === "end of race") break;
        let name = "";
        let nums = "";
        while((validName = namesPattern.exec(el)) !== null) {
            name += validName;
        }
        while((validNums = numsPattern.exec(el)) !== null) {
            nums += validNums;
        }
        const sum = nums.split('').map(Number).reduce((x, y) => x + y);
        if(data.hasOwnProperty(name)) data[name] += sum;
    }
    const sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);
    let counter = 1;
    for(const key of sortedKeys) {
        if(counter === 1) console.log(`${counter}st place: ${key}`);
        else if(counter === 2) console.log(`${counter}nd place: ${key}`);
        else if(counter === 3) console.log(`${counter}rd place: ${key}`);
        else if(counter > 3) break;
        counter++;
    }
}
solve(["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"]);