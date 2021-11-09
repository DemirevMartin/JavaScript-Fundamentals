function solve(n)
{
    n = new Number(n);
    for(let i = 1; i <= n; i++)
    {
        let result = "";
        for(let j = 1; j <= i; j++)
        {
            if(j === 1) result += i.toString();
            else result += " " + i.toString();
        }
        console.log(result);
    }
}
solve(3);