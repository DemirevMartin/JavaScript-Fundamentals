function solve(n)
{
    n = new Number(n);
    let i = 1;
    let sum = 0;
    while(n > 0)
    {
        if(i % 2 !== 0)
        {
            console.log(i);
            sum += i;
            n--;
        }
        i++;
    }
    console.log(`Sum: ${sum}`);
}
solve(3);