function max(a)
{
    let b = [];
    for(let i = 0; i < a.length; i++){
        let stop = false;
        for(let j = i + 1; j < a.length; j++){
            if(a[i] <= a[j]) {
                stop = true;
                break;
            }
        }
        if(!stop) {
        b.push(a[i]);
        }
    }
    console.log(b.join(' '));
}
max([1, 4, 3, 2]);
max([14, 24, 3, 19, 15, 17]);