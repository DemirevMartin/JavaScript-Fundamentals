function solve(arr) {
    let data = {};
    for(let i = 0; i < arr.length; i += 2) {
        const resource = arr[i];
        const quantity = Number(arr[i + 1]);
        if(!data.hasOwnProperty(resource)) data[resource] = quantity;
        else data[resource] += quantity;
    }
    for(const [key, value] of Object.entries(data)) {
        console.log(key, '->', value);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);