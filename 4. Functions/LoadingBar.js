function load(a) {
    if(a === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        return;
    }
    let bar = "";
    let pers = a / 10;
    for(let i = 1; i <= pers; i++) {
        bar += "%";
    }
    let fStops = 10 - pers;
    for(let i = 1; i <= fStops; i++) {
        bar += ".";
    }
    console.log(`${a}% [${bar}]`);
    console.log("Still loading...");
}
load(30);
load(50);
load(100);