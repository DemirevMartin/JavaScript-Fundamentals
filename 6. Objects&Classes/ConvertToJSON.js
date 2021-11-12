function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
solve('Percy', 'Jackson', 'black');