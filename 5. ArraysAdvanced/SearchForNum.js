function search(a, b) {
    let x = a.slice(0, b[0]);
    x.splice(0, b[1]);
    let counter = 0;
    for(let el of x) {
        if(el === b[2]) counter++;
    }
    console.log(`Number ${b[2]} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);