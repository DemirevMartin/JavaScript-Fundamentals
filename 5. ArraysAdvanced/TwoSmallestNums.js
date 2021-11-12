function smallest(a) {
    a.sort((a, b) => a - b);
    console.log(`${a[0]} ${a[1]}`);
}
smallest([30, 15, 50, 5]);