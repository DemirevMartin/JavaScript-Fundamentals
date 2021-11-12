function solve(str) {
    let spl = str.split(/\,\s*/);
    for (let i = 0; i < spl.length; i++) {
        spl.splice(i, 1, spl[i].trim());
    }
    const arr = spl.sort((a, b) => a.localeCompare(b));
    const punctPat = /[\s\,]/;
    const charPat = /[^\s\,]/;
    const healthPat = /[^\d\+\-\*\/\.]/g;
    const damagePat = /[\-\+]?\d+(\.\d+)?/g;
    for (let el of arr) {
        if (punctPat.exec(el) === null && charPat.exec(el) !== null) {
            let multipl = 0;
            let division = 0;
            for (const letter of el) {
                if (letter === "/") division += 1;
                else if (letter === "*") multipl += 1;
            }
            let lettersHealth = "";
            let numsDamage = [];
            while ((validHealth = healthPat.exec(el)) !== null) {
                lettersHealth += validHealth;
            }
            while ((validDamage = damagePat.exec(el)) !== null) {
                numsDamage.push(Number(validDamage[0]));
            }
            let health = 0;
            let damage = 0;
            for (const x of lettersHealth) {
                health += x.charCodeAt();
            }
            for (const x of numsDamage) {
                damage += x;
            }
            damage /= Math.pow(2, division);
            damage *= Math.pow(2, multipl);
            console.log(`${el} - ${health} health, ${damage.toFixed(2)} damage`);
        }
    }
}
//solve("M3ph-0.5s-0.5t0.0**");
solve("M3ph1st0**,Azazel");
//solve("m15*/c-5.0");