function gladiator(l, h, s, d, a)
{
    let helmet = 0;
    let sword = 0;
    let defense = 0;
    for(let i = 1; i <= l; i++) {
        if(i % 2 === 0){
            helmet++;
        }
        if(i % 3 === 0) {
            sword++;
        }
        if(i % 6 === 0) {
            defense++;
        }
    }
    let armour = Math.floor(defense / 2);
    let total = h * helmet + s * sword + d * defense + a * armour;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5); 
//gladiator(23, 12.50, 21.50, 40, 200);