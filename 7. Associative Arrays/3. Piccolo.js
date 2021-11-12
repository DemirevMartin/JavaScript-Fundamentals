function solve(a) {
    let carsInfo = {};
    for(const el of a) {
        const info = el.split(', ');
        const condition = info[0];
        const car = info[1];
        carsInfo[car] = condition;
    }
    const objKeysToArr = Object.entries(carsInfo).filter(x => x[1] !== "OUT");
    if(objKeysToArr.length === 0) {
        console.log('Parking Lot is Empty');
    }
    else {
        for(const [key, value] of Object.entries(carsInfo).sort((a, b) => a[0].localeCompare(b[0]))) {
            if(value === "IN") console.log(key);
        }
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);