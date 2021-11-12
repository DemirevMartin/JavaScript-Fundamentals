function solve(a) {
    for(let key of Object.keys(a)) {
        console.log(key, '->', a[key]);
    }
}
solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);