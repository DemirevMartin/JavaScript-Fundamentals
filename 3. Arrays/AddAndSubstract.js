function solve(a)
{
    let sum1 = 0;
    for(let el of a){
        sum1 += el;
    }
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] % 2 === 0){
            a[i] += i;
        }else{
            a[i] -= i;
        }
    }
    let sum2 = 0;
    for(let el of a){
        sum2 += el;
    }
    console.log(a);
    console.log(sum1);
    console.log(sum2);
}
solve([5, 15, 23, 56, 35]);