function sumdig(n)
{
    let z = n.toString();
    let total = 0;
    for(let i = 0; i <= z.length - 1; i++)
    {
        total += Number(z[i]);
    }
    console.log(total);
}
sumdig(12345);