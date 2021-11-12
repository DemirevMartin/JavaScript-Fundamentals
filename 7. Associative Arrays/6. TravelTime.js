function solve(a) {
    let info = {};
    
    for(const el of a) {
        let [country, town, cost] = el.split(' > ');

        if(!Object.keys(info).includes(country)) {
            info[country] = {};
        }

        if(!Object.keys(info[country]).includes(town)) {
            info[country][town] = Number(cost);
        }

        if(Number(cost) < info[country][town]) {
            info[country][town] = Number(cost);
        }
    }

    let sortedCountries = Object.entries(info)
    .sort((a, b) => a[0].localeCompare(b[0]) || 
    Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y));
    
    for(let [country, towns] of sortedCountries) {
        let townAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townAsEntries.join(' ')}`);
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);