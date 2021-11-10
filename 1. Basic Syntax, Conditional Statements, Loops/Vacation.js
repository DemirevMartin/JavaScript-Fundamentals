function vacation(people, type, day)
{
    people = new Number(people);
    let price = 0;
    let total = 0;
    if(type === "Students")
    {
        if(day === "Friday")
        {
           price = people * 8.45;
        }
        else if(day === "Saturday")
        {
           price = people * 9.80;
        }
        else if(day === "Sunday")
        {
            price = people * 10.46;
        }
        if(people >= 30)
        {
            total = price - price * 15 / 100;
        }
        else
        {
            total = price;
        }
    }
    else if(type === "Business")
    {
        if(day === "Friday")
        {
           price = people * 10.90;
        }
        else if(day === "Saturday")
        {
           price = people * 15.60;
        }
        else if(day === "Sunday")
        {
            price = people * 16;
        }
        if(people >= 100)
        {
            total = price - (price / people) * 10;
        }
        else
        {
            total = price;
        }
    }
    else if(type === "Regular")
    {
        if(day === "Friday")
        {
           price = people * 15;
        }
        else if(day === "Saturday")
        {
           price = people * 20;
        }
        else if(day === "Sunday")
        {
            price = people * 22.50;
        }
        if(people >= 10 && people <= 20)
        {
            total = price - price * 5 / 100;
        }
        else
        {
            total = price;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");