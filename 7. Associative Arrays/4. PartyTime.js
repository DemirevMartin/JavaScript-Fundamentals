function solve(partyInfo) {
    let list = [];
    while(partyInfo[0] !== "PARTY") {
        list.push(partyInfo.shift());
    }
    partyInfo.shift();
    while(partyInfo.length !== 0) {
        list.splice(list.indexOf(partyInfo.shift()), 1);
    }
    console.log(list.length);
    const VIP = list.filter(a => !isNaN(a[0]));
    const commons = list.filter(a => isNaN(a[0]));
    console.log(VIP.join('\n'));
    console.log(commons.join('\n'));
}
solve(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);

solve(['m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1',
'HTTbwRmM','B5yTkMQi','8N0FThqG','xys2FYzn','MDzcM9ZK','PARTY','2FQZT3uC','dziNz78I',
'mdSGyQCJ','LjcVpmDL','fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ']);