function solve(a) {
    for(let el of a) {
        let c = el.split(' | ');
        let town = c[0];
        let latitude = Number(c[1]).toFixed(2);
        let longitude = Number(c[2]).toFixed(2);
        let obj = {
            town,
            latitude,
            longitude
        };
        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);