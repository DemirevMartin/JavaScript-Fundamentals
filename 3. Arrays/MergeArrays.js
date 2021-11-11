function merge(a, b)
{
    let c = [];
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            c[i] = (Number(a[i]) + Number(b[i]));
        }
        else{
            c[i] = (a[i] + b[i]);
        }
    }
    console.log(c.join(' - '));
}
merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);