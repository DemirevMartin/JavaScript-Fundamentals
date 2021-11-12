function solve(a) {
    let p = JSON.parse(a);
    for(let key of Object.keys(p)) {
        console.log(`${key}: ${p[key]}`);
    }
}