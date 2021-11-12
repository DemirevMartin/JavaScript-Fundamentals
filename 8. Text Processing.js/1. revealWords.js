function solve(words, text) {
    let arr = words.split(', ');
    let sepText = text.split(' ');
    for(let i = 0; i < sepText.length; i++) {
        if(sepText[i].includes('*')) {
            for(const word of arr) {
                if(sepText[i].length === word.length) sepText[i] = word;
            }
        }
    }
    console.log(sepText.join(' '));
}
solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');