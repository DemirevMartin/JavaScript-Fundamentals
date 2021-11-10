function table(n)
{
    n = new Number(n);
    for(let i = 1; i <= 10; i++)
    {
        let multipl = 0;
        multipl = n * i;
        console.log(`${n} X ${i} = ${multipl}`);
    }
}
table(2);