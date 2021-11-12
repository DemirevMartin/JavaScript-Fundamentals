function solve(arr) {
    const n = Number(arr.shift());
    let data = {};
    for(let i = 0; i < n; i++) {
        const [piece, composer, key] = arr.shift().split('|');
        data[piece] = {
            composer,
            key
        };
    }
    for(const el of arr) {
        if(el === 'Stop') break;
        const current = el.split('|');
        if(el.includes('Add')) {
            const [_, piece, composer, key] = current;
            if(data.hasOwnProperty(piece)) console.log(`${piece} is already in the collection!`);
            else {
                data[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }
        else if(el.includes('Remove')) {
            const piece = current[1];
            if(data.hasOwnProperty(piece)) {
                delete data[piece];
                console.log(`Successfully removed ${piece}!`);
            }
            else console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        else if(el.includes('ChangeKey')) {
            const piece = current[1];
            const change = current[2];
            if(data.hasOwnProperty(piece)) {
                data[piece].key = change;
                console.log(`Changed the key of ${piece} to ${change}!`);
            }
            else console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    const sorted = Object.entries(data).sort((x, y) => x[1].composer.localeCompare(y[1].composer)).sort((x, y) => x[0].localeCompare(y[0]));
    for(const [piece, list] of sorted) {
        console.log(`${piece} -> Composer: ${list.composer}, Key: ${list.key}`);
    }
}
/*solve(['3','Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major','Stop']);*/
solve(['4','Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor','Stop']);