function solve(str) {
    let arr = str.split(/\,\s+/);
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, arr[i].trim());
    }
    const pattern = /[\@\#\$\^]{6,10}/;
    for (const el of arr) {
        if (el.length === 20) {
            let firstHalf = el.substring(0, el.length / 2);
            let secondHalf = el.substring(el.length / 2);
            if ((validA = pattern.exec(firstHalf)) !== null && (validB = pattern.exec(secondHalf)) !== null) {
                const lengthA = validA[0].length;
                const lengthB = validB[0].length;
                if (lengthA === 10 && lengthB === 10) {
                    console.log(`ticket "${el}" - ${lengthA}${validA[0][0]} Jackpot!`);
                }
                else console.log(`ticket "${el}" - ${lengthA, lengthB}${validA[0][0]}`);
            }
            else console.log(`ticket "${el}" - no match`);
        }
        else console.log(`invalid ticket`);
    }
}
//solve("$$$$$$$$$$$$$$$$$$$$, ########aabb########  ,  th^^^^^^eemo^^^^^^ey ");
//solve("Cas$$$$$$$Ca$$$$$$sh");
solve("Cass$$$$$$Cas$$$$$sh");
//solve("val@@t@@@@@@o@@tch:(");