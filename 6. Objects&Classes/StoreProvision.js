function provision(a, b) {
    let x = {};
    for(let i = 0; i < a.length; i += 2) {
        x[a[i]] = Number(a[i + 1]);
    }
    for(let i = 0; i < b.length; i += 2) {
        if(x.hasOwnProperty(b[i])) {
            x[b[i]] += Number(b[i + 1]);
        }
        else x[b[i]] = Number(b[i + 1]);
    }
    for(let key of Object.keys(x)) {
        console.log(key, '->', x[key]);
    }
}
provision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
          ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);