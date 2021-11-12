function solve(a) {
    let words = {};
    for(const el of a) {
        const current = JSON.parse(el);
        Object.assign(words, current); 
    }
    let terms = Object.keys(words).sort();
    for(const el of terms) {
        console.log(`Term: ${el} => Definition: ${words[el]}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Bus":"Something like a train."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);