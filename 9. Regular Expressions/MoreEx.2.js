function solve(str) {
    let arr = str.split(/\,\s+/);
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, arr[i].trim());
    }
    const pattern = /(\w*)(?<match>[\@\#\$\^]{6,10})(\w*)\2(\w*)/;
    for (const el of arr) {
        if (el.length === 20) {
            if ((validInfo = pattern.exec(el)) !== null) {
                const match = validInfo.groups["match"];
                const length = match.length;
                if (length === 10) {
                    console.log(`ticket "${el}" - ${length}${match[0]} Jackpot!`);
                }
                else console.log(`ticket "${el}" - ${length}${match[0]}`);
            }
            else console.log(`ticket "${el}" - no match`);
        }
        else console.log(`invalid ticket`);
    }
}
solve("$$$$$$$$$$$$$$$$$$$$, ########aabb########  ,  th^^^^^^eemo^^^^^^ey ");
solve("Cas$$$$$$$Ca$$$$$$sh");
solve("val@@t@@@@@@o@@tch:(");
solve("   aabb ");