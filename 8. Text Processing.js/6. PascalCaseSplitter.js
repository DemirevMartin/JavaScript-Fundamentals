function solve(str) {
    let container = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i].toUpperCase() === str[i]) {
            let word = "";
            for(let j = i; j < str.length; j++) {
                if(j !== i && str[j].toUpperCase() === str[j]) {
                    break;
                }
                word += str[j];
            }
            container.push(word);
        }
    }
    console.log(container.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');