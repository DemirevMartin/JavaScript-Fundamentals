function train(a) {
    let w = a[0].split(' ').map(Number);
    let max = Number(a[1]);
    for(let i = 2; i < a.length; i++) {
        let check = isNaN(Number(a[i]));
        if(!check) {
            for(let j = 0; j < w.length; j++) {
                if(w[j] + Number(a[i]) <= max) {
                    w[j] += Number(a[i]);
                    break;
                }
            }
        }
        else {
            let c = a[i].split(' ');
            let add = Number(c[1]);
            w.push(add);
        }
    }
    console.log(w.join(' '));
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
train(['0 0 0 10 2 4','10','Add 10','10','10','10','8', '6']);