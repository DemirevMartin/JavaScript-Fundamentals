function solve(arr) {
    const str = arr.shift();
    const pattern = /([#\|])(?<name>[A-Za-z\s]+)\1(?<date>(0[1-9]|[1-2]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCals = 0;
    let output = '';
    while((data = pattern.exec(str)) !== null) {
        const name = data.groups.name;
        const date = data.groups.date;
        const calories = data.groups.calories;
        totalCals += Number(calories);
        output += `Item: ${name}, Best before: ${date}, Nutrition: ${calories}\n`;
    }
    const days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(output.trim());
}
//solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
//solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);