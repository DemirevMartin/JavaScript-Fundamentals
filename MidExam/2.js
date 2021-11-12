function solve(a) {
    let list = a.shift().split(' ').map(Number);
    for(let el of a) {
        let t = el.split(' ');
        let command = t[0];
        let n = Number(t[1]);
        if(command === "Add") {
            list.push(n);
        }
        else if(command === "Remove") {
            list.splice(list.indexOf(n), 1);
        }
        else if(command === "Replace") {
            let r = Number(t[2]);
            list.splice(list.indexOf(n), 1, r);
        }
        else if(command === "Collapse") {
            let f = list.filter(x => x >= n);
            list.splice(0, list.length);
            list.push(...f);
        }
        else if(command === "Finish") {
            break;
        }
    }
    console.log(list.join(' '));
}
solve((["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
);
solve((["1 20 -1 10",
"Collapse 8",
"Finish"])
);
solve((["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
);