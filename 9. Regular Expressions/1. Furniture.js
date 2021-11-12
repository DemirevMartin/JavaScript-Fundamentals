function solve(arr) {
    const pattern = />>(?<item>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let sum = 0;
    console.log("Bought furniture:");
    for(let el of arr) {
        if(el === "Purchase") break;
        if((data = pattern.exec(el)) !== null) {
            const item = data.groups["item"];
            const price = data.groups["price"];
            const quantity = data.groups["quantity"];
            console.log(item);
            sum += price * quantity;
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);