function employ(a) {
    for(let el of a) {
        let data = {
            name: el,
            number: el.length
        };
        console.log(`Name: ${data.name} -- Personal Number: ${data["number"]}`);
    }
}
employ(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);