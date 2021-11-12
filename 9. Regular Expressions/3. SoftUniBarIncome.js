function solve(arr) {
    const pattern = /^%(?<customer>[A-Z][a-z]+)%[^%.\$\|]*<(?<product>\w+)>[^%.\$\|]*\|(?<count>\d+)\|[^%.\$\|]*(?<price>[1-9][0-9]*(\.\d+)?)\$$/;
    let sum = 0;
    for(const el of arr) {
        if(el === "end of shift") break;
        if((data = pattern.exec(el)) !== null) {
            const customer = data[1];
            const product = data[2];
            const count = Number(data[3]);
            const price = Number(data[4]);
            let currentSum = count * price;
            sum += currentSum;
            console.log(`${customer}: ${product} - ${currentSum.toFixed(2)}`);
        }
    }
    console.log("Total income: " + sum.toFixed(2));
}
solve(["%George%<Croissant>|2|10.3$","%Peter%<Gum>|1|1.3$","%Maria%<Cola>|1|2.4$","end of shift"]);
//solve(["%InvalidName%<Croissant>|2|10.3$","%Peter%<Gum>1.3$","%Maria%<Cola>|1|2.4","%Valid%<Valid>valid|10|valid20$","end of shift"]);