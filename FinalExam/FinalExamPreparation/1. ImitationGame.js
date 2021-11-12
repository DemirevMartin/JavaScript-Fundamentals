function solve(arr) {
    let message = arr.shift();
    for(const el of arr) {
        if(el === 'Decode') break;
        const tokens = el.split('|');
        if(el.includes('Move')) {
            const pos = Number(tokens[1]);
            const part = message.substring(0, pos);
            const rest = message.substring(pos);
            message = rest + part;
        }
        else if(el.includes('ChangeAll')) {
            const old = tokens[1];
            const toBe = tokens[2];
            message = message.split(old).join(toBe);
        }
        else if(el.includes('Insert')) {
            const pos = Number(tokens[1]);
            const letter = tokens[2];
            message = message.substring(0, pos) + letter + message.substring(pos);
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
solve(['zzHe','ChangeAll|z|l','Insert|2|o','Move|3','Decode']);
solve(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode']);