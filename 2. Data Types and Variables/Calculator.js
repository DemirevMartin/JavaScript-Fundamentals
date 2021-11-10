function calc(a, o, b)
{
    let res = 0;
    if(o == "+") res = a + b;
    else if(o == "-") res = a - b;
    else if(o == "*") res = a * b;
    else if(o == "/") res = a / b;
    console.log(res.toFixed(2));
}
calc(15, '+', 0);