function genSequence(a)
{
    let r = [];
    let x = 0;
    let index = 0;
    for(let i = 0; i < a.length; ) {
        let n = a[i];
        let counter = 1;
        while(true) {
            i++;
            if(n === a[i]) {
                counter++;
            }
            else break;
        }
        if(counter > x) {
            x = counter;
            index = i - counter;
        }
    }
    while(x > 0) {
        r.push(a[index]);
        index++;
        x--;
    }
    console.log(r.join(' '));
}
genSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);