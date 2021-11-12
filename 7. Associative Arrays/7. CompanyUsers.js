function solve(arr) {
    let data = {};
    for(const el of arr) {
        const current = el.split(' -> ');
        const firm = current[0];
        const id = current[1];
        if(!data.hasOwnProperty(firm)) {
            data[firm] = `-- ${id}`;
        }
        else if(!data[firm].includes(id)) data[firm] += `\n-- ${id}`;
    }
    const sortedKeys = Object.keys(data).sort((a, b) => a.localeCompare(b));
    for(const key of sortedKeys) {
        console.log(key);
        console.log(data[key]);
    }
}
/*solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);*/
    solve([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111']);