function solve(a) {
    let n = a[0].split(' ').map(Number);
    for(let i = 1; i < a.length; i++) {
        let c = a[i].split(' ');
        if(c[0] === "Add") {
            n.push(Number(c[1]));
        } else if(c[0] === "Remove") {
            while(true) {
                if(n.indexOf(Number(c[1])) === -1) break;
                n.splice(n.indexOf(Number(c[1])), 1);
            }
            //n = n.filter(el => el !== Number(c[1])); - another solution
        } else if(c[0] === "RemoveAt") {
            n.splice(Number(c[1]), 1);
        } else if(c[0] === "Insert") {
            n.splice(Number(c[2]), 0, Number(c[1]));
        }
    }
    console.log(n.join(' '));
}
solve(['2 4 19 2 53 6 43 2 2 2 2',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);