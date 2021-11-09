function printSum(start, end)
{
    let result = "";
    let sum = 0;
    for(let i = start; i <= end; i++)
    {
        sum += i;
        if(i === start)
        {
            result += i.toString();
        }
        else
        {
            result += " " + i.toString();
        }
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printSum(5, 10);