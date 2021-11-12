function solve(numbers) {
    const pattern = /[^ ]?\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNums = [];
    
    while((validNum = pattern.exec(numbers)) !== null) {
        validNums.push(validNum[0]);
    }
    console.log(validNums.join(', '));
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");