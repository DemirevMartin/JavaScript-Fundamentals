function solve(arr) {
    let str = arr.shift();
    for (const el of arr) {
        const split = el.split(':');
        const command = split[0];
        if (el === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            break;
        }
        if (command === "Add Stop") {
            const a = Number(split[1]);
            const b = split[2];
            if (a < str.length && a >= 0) {
                const before = str.substring(0, a);
                const after = str.substring(a);
                str = before + b + after;
            }
        }
        else if (command === "Remove Stop") {
            const a = Number(split[1]);
            const b = Number(split[2]);
            if (a < str.length && a >= 0 && b >= 0 && b < str.length) {
                const before = str.substring(0, a);
                const after = str.substring(b + 1);
                str = before + after;
            }
        }
        else if (command === "Switch") {
            const a = split[1];
            const b = split[2];
            if (str.includes(a) && a !== b) {
                str = str.split(a).join(b);
            }
        }
        console.log(str);
    }
}
solve(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);