function solve(arr) {
    const n = Number(arr.shift());
    let data = {};
    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = arr.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        data[name] = {
            hp: hp,
            mp: mp
        };
    }
    for (let el of arr) {
        if (el === 'End') break;
        if (el.includes('CastSpell')) {
            let [_, name, take, spell] = el.split(' - ');
            take = Number(take);
            if (data[name].mp < take) {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
            else {
                data[name].mp -= take;
                console.log(`${name} has successfully cast ${spell} and now has ${data[name].mp} MP!`);
            }
        }
        else if (el.includes('TakeDamage')) {
            let [_, name, damage, attacker] = el.split(' - ');
            damage = Number(damage);
            if (data[name].hp <= damage) {
                console.log(`${name} has been killed by ${attacker}!`);
                delete data[name];
            }
            else {
                data[name].hp -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${data[name].hp} HP left!`);
            }
        }
        else if (el.includes('Recharge')) {
            let [_, name, amount] = el.split(' - ');
            amount = Number(amount);
            if (data[name].mp + amount > 200) {
                console.log(`${name} recharged for ${200 - data[name].mp} MP!`);
                data[name].mp = 200;
            }
            else {
                data[name].mp += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }
        }
        else if (el.includes('Heal')) {
            let [_, name, amount] = el.split(' - ');
            amount = Number(amount);
            if (data[name].hp + amount > 100) {
                console.log(`${name} healed for ${100 - data[name].hp} HP!`);
                data[name].hp = 100;
            }
            else {
                data[name].hp += amount;
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    }
    const sorted = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0])).sort((x, y) => y[1].hp - x[1].hp);
    for (const [key, value] of sorted) {
        console.log(`${key}\n  HP: ${value.hp}\n  MP: ${value.mp}`);
    }
}
solve(["2","Solmyr 85 120", "Kyrre 99 0","Heal - Solmyr - 10", "Recharge - Solmyr - 50","TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
//solve(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);