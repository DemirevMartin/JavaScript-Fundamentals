function solve(a) {
    let list = a.shift().split('|');
    for(let el of a) {
        let t = el.split('%');
        let command = t[0];
        let x = t[1];
        if(command === "Important") {
            if(list.includes(x)) {
                list.splice(list.indexOf(x), 1);
            }
            list.unshift(x);             
        }
        else if(command === "Add") {
            if(!list.includes(x)) {
                list.push(x);
            }
            else {
                console.log("The product is already in the list.");
            }
        }
        else if(command === "Swap") {
            let y = t[2];
            let bool = false;
            if(!list.includes(x)) {
                bool = true;
                console.log(`Product ${x} missing!`);
            }
            if(!list.includes(y)) {
                bool = true;
                console.log(`Product ${y} missing!`);
            }
            if(!bool) {
                let temp = list[list.indexOf(x)];
                list[list.indexOf(x)] = list[list.indexOf(y)];
                let index = 0;
                for(let i = 0; i < list.length; i++) {
                    if(list[i] === y) {
                        index = i;
                    }
                }
                list[index] = temp;
            }
        }
        else if(command === "Remove") {
            if(list.includes(x)){
                list.splice(list.indexOf(x), 1);
            }
            else {
                console.log(`Product ${x} isn't in the list.`);
            }
        }
        else if(command === "Reversed") {
            list.reverse();
        }
        else if(command === "Shop!") {
            break;
        }
    }
    for(let i = 0; i < list.length; i++) {
        console.log(`${i + 1}. ${list[i]}`);
    }
}
solve((["apple|cheese|salt|bananas","Remove%cheese","Swap%grapes%pineapple", "Important%salt", "Add%apple", "Reversed", "Shop!"]));