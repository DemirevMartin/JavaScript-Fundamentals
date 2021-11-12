function solve(word, sentence) {
    const lowerWord = word.toLowerCase();
    const lowerSentence = sentence.toLowerCase();
    const filteredSentence = lowerSentence.split(' ').filter(a => a === lowerWord);
    if(filteredSentence.length > 0) console.log(word);
    else console.log(word + " not found!");
}
solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');