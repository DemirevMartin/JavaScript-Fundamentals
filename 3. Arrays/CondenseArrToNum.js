function condense(a)
{
    while(a.length !== 1)
    {
        for(let i = 0; i <= a.length - 1; i++)
        {
            if(i == a.length - 1)
            {
                a.pop(); break; //a.pop() deletes the last element of the array;
            }
            let sum = a[i] + a[i + 1];
            a[i] = sum;
        }
    }
    console.log(a[0]);
}
condense([2,10,3]);
//condense([1]);