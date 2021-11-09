function login(arr)
{
    let username = arr[0];
    let counter = 1;
    let i = 1;
    while(true)
    {
        let word = arr[i];
        let pass = "";
        for(let j = word.length - 1; j >= 0; j--)
        {
            pass += word[j];
        }
        if(counter < 4) 
        {
            if(pass === username)
            {
                console.log(`User ${username} logged in.`); break;
            }
            else console.log(`Incorrect password. Try again.`);
        }
        else { 
            if(pass === username)
            {
                console.log(`User ${username} logged in.`); break;
            }
            else { console.log(`User ${username} blocked!`); break; } 
        }
        i++;
        counter++;
    }
}
login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
//login(['sunny','rainy','cloudy','sunny','not sunny']);