function manipulate(a, c) {
    for(let x of c) {
        let el = x.split(' ');
        let t = el[0];
        if(t === "add") {
            let pos = Number(el[1]);
            let num = Number(el[2]);
            a.splice(pos, 0, num);
        }
        else if(t === "addMany") {
            let pos = Number(el[1]);
            el.splice(0, 2);
            let add = el.map(Number);
            a.splice(pos, 0, ...add);
        }
        else if(t === "contains") {
            console.log(a.indexOf(Number(el[1])));
        }
        else if(t === "remove") {
            a.splice(Number(el[1]), 1);
        }
        else if(t === "shift") {
            let pos = Number(el[1]);
            for(let i = 0; i < pos; i++) {
                a.push(a.shift());
            }
        }
        else if(t === "sumPairs") {
            let container = [];
            while(a.length > 0) {
                if(a.length === 1) {
                    container.push(a.shift());
                }
                else container.push(a.shift() + a.shift());
            }
            for(let x of container) {
                a.push(x);
            }
        }
        else if(t === "print") break;
    }
    console.log(`[ ${a.join(', ')} ]`);
}
//manipulate([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//manipulate([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
//manipulate([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
//manipulate([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
manipulate([1, 2, 4, 5, 6, 7, 8], ["sumPairs"]);