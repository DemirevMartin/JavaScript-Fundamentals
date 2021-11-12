function solve(a) {
    let levels = [];
    for(let el of a) {
        let current = el.split(' / ');
        let level = Number(current[1]);
        levels.push(level);
    }
    levels.sort((x, y) => x - y);
    while(a.length > 0) {
        let current = "";
        let del = 0;
        for(let i = 0; i < a.length; i++) {
            current = a[i].split(' / ');
            let currentLevel = Number(current[1]);
            if(levels[0] === currentLevel) {
                let items = current[2].split(', ');
                items.sort();
                console.log(`Hero: ${current[0]}`);
                console.log(`level => ${currentLevel}`);
                console.log(`items => ${items.join(', ')}`);
                del = i;
                break;
            }
        }
        a.splice(del, 1);
        levels.shift();
    }
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);