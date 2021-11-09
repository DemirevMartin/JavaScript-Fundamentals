function round(n, p)
{
    if(p > 15)
    {
        p = 15;
    }
    const rounded = n.toFixed(p);
    const withoutZeros = parseFloat(rounded);
    console.log(withoutZeros);
}
round(3.14658284775839929139, 20);