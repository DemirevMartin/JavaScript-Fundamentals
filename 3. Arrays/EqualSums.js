function eSum(a)
{
    let found = false;
    for(let i = 0; i < a.length; i++)
    {
        let sum1 = 0;
        let sum2 = 0;
        for(let j = i - 1; j >= 0; j--)
        {
            sum1 += a[j];
        }
        for(let k = i + 1; k < a.length; k++)
        {
            sum2 += a[k];
        }
        if(sum1 === sum2)
        {
            console.log(i);
            found = true;
            break;
        }
    }
    if(!found)
    {
        console.log("no");
    }
}
eSum([1, 2, 3, 3]);