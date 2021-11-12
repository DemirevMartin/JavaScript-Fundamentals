function shop(a) {
    let output = a.shift().split('!');
    for(let el of a) {
        let t = el.split(' ');
        let command = t[0];
        let x = t[1];
        if(command === "Urgent") {
            if(!output.includes(x)) {
                output.unshift(x);
            }
        }
        else if(command === "Unnecessary") {
            if(output.includes(x)) {
                output.splice(output.indexOf(x), 1);
            }
        }
        else if(command === "Correct") {
            let y = t[2];
            if(output.includes(x) && !output.includes(y)) {
                output.splice(output.indexOf(x), 1, y);
            }
        }
        else if(command === "Rearrange") {
            if(output.includes(x)) {
                let item = output.splice(output.indexOf(x), 1);
                output.push(item[0]);
            }
        }
        else if(command === "Go Shopping!") break;
    }
    console.log(output.join(', '));
}
//shop(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shop(["Milk!Pepper!Salt!Water!Banana", "Urgent Cherry", "Unnecessary Milk", "Correct Pepper Onion",
      "Rearrange Salt", "Correct Water Potatoes","Go Shopping!"]);