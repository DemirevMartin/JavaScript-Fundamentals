function solve(a) {
    let perDay = Number(a[0]);
    let workers = Number(a[1]);
    let biscuits = Number(a[2]);
    let sum = 0;
    for(let i = 1; i <= 30; i++) {
        if(i % 3 === 0) {
            sum += Math.floor(perDay * workers * 75 / 100);
        }
        else {
            sum += Math.floor(perDay * workers);
        }
    }
    console.log(`You have produced ${sum} biscuits for the past month.`);
    if(sum > biscuits) {
        let dif = (sum - biscuits) * 100 / biscuits;
        console.log(`You produce ${dif.toFixed(2)} percent more biscuits.`);
    }
    else if(sum < biscuits) {
        let dif = (biscuits - sum) * 100 / biscuits;
        console.log(`You produce ${(dif).toFixed(2)} percent less biscuits.`);
    }
}
//solve((["65","12","26000"]));
solve((["163","16","67020"]));
//solve((["78","8","16000"]));