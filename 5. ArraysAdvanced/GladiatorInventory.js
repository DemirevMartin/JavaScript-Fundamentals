function gladiator(a) {
    let s = a.shift();
    let output = s.split(' ');
    for(let el of a) {
        let t = el.split(' ');
        let command = t[0];
        let x = t[1];
        if(command === "Buy") {
            if(!output.includes(x)) {
                output.push(x);
            }
        }
        else if(command === "Trash") {
            if(output.includes(x)) {
                output.splice(output.indexOf(x), 1);
            }
        }
        else if(command === "Repair") {
            let item = output.splice(output.indexOf(x), 1);
            output.push(item[0]);
        }
        else if(command === "Upgrade") {
            let y = t[1].split('-');
            if(output.includes(y[0])) {
                x = y.join(':');
                output.splice(output.indexOf(y[0]) + 1, 0, x);
            }
        }
    }
    console.log(output.join(' '));
}
gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiator(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);