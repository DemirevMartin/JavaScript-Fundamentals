function products(a) {
    a.sort();
    for(let i = 0; i < a.length; i++) {
        console.log(`${i + 1}.${a[i]}`);
    }
}
products(["Potatoes", "Tomatoes", "Apples", "Onions"]);