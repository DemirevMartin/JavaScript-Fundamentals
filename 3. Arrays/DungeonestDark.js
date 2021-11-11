function dungeon(a)
{
    let hp = 100;
    let coins = 0;
    let string = a[0];
    let b = [];
    let x = "";
    let counter = 1;
    let j = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === "|"){
            counter++;
        }
    }
    let t = counter;
    while(counter > 0) 
    {
        if(counter < t) j++;
        if(counter === 1)
        {
            while(j < string.length)
            {
                x += string[j];
                j++;
            }
        }
        else 
        {
            while(string[j] !== "|")
            {
                x += string[j];
                j++;
            }
        }
        b.push(x);
        counter--;
        x = "";
    }
    
    let fpart = "";
    let points = "";
    let spart = 0;
    let index = 0;
    let dead = false;
    for(let el of b) 
    {
        index++;
        for(let i = 0; i < el.length; i++) 
        {
            if(el[i] === " ") 
            {
                for(let k = i + 1; k < el.length; k++)
                {
                    points += el[k];
                }
                spart = Number(points);
                points = "";
                break;
            }
            fpart += el[i];
        }
        if(fpart === "potion") 
        {
            if(hp + spart > 100) 
            {
                console.log(`You healed for ${100 - hp} hp.`);
                hp = 100;
            } 
            else
            {
                hp += spart;
                console.log(`You healed for ${spart} hp.`);
            }
            console.log(`Current health: ${hp} hp.`);
        } 
        else if(fpart === "chest")
        {
            console.log(`You found ${spart} coins.`);
            coins += spart;
        } 
        else 
        {
            if(hp - spart <= 0) 
            {
                console.log(`You died! Killed by ${fpart}.`);
                console.log(`Best room: ${index}`);
                dead = true;
                break;
            } 
            else 
            {
                console.log(`You slayed ${fpart}.`);
                hp -= spart;
            }
        }
        fpart = "";
        spart = 0;
    }
    if(!dead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
}
//dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);