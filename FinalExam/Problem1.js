function solve(arr) {
    let str = arr.shift();
    for(const el of arr) {
        if(el === 'End') break;
        const current = el.split(' ');
        if(el.includes('Translate')) {
            const [_, char, replacement] = current;
            str = str.split(char).join(replacement);
            console.log(str);
        }
        else if(el.includes('Includes')) {
            const [_, string] = current;
            if(str.includes(string)) console.log('True');
            else console.log('False');
        }
        else if(el.includes('Start')) {
            const [_, string] = current;
            if(str.indexOf(string) === 0) console.log('True');
            else console.log('False');
        }
        else if(el.includes('Lowercase')) {
            str = str.toLowerCase();
            console.log(str);
        }
        else if(el.includes('FindIndex')) {
            const [_, char] = current;
            console.log(str.lastIndexOf(char));
        }
        else if(el.includes('Remove')) {
            let [_, start, count] = current;
            start = Number(start);
            count = Number(count);
            const before = str.substring(0, start);
            const after = str.substring(start + count, str.length);
            str = before + after;
            console.log(str);
        }
    }
}
solve(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"]);
/*solve(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex P",
"Remove 2 7",
"End"]);*/