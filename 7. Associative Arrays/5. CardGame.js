function solve(a) {
    let playersInfo = {};
    for(const el of a) {
        const txt = el.split(': ');
        const name = txt[0];
        let cards = txt[1];
        if(!playersInfo.hasOwnProperty(name)) {
            const sepCards = cards.split(', ');
            let difCards = [];
            for(const card of sepCards) {
                if(!difCards.includes(card)) difCards.push(card)
            }
            playersInfo[name] = difCards.join(', ');
        }
        else {
            const sepCards = cards.split(', ');
            for(const card of sepCards) {
                if(!playersInfo[name].includes(card)) {
                    playersInfo[name] += ', ';
                    playersInfo[name] += card;
                }
            }
        }
    }

    for(const [key, value] of Object.entries(playersInfo)) {
        const cards = value.split(', ');
        let sum = 0;
        let firstChar = 0;
        let secondChar = 0;
        let type = '';
        for(const card of cards) {
            if(isNaN(Number(card[0]))) {
                if(card[0] === "J") {
                    firstChar = 11;
                } else if(card[0] === "Q") {
                    firstChar = 12;
                } else if(card[0] === "K") {
                    firstChar = 13;
                } else if(card[0] === "A") {
                    firstChar = 14;
                }
            }
            else {
                if(card.length > 2) {
                    firstChar = Number(card[0] + card[1]);
                }
                else {
                    firstChar = Number(card[0]);
                }
            }
            //S -> 4, H-> 3, D -> 2, C -> 1
            
            if(card.length > 2) {
                type = card[2];
            }
            else type = card[1];
            if(type === "S") {
                secondChar = 4;
            } else if(type === "H") {
                secondChar = 3;
            } else if(type === "D") {
                secondChar = 2;
            } else if(type === "C") {
                secondChar = 1;
            }
            sum += firstChar * secondChar;
        }
        console.log(`${key}: ${sum}`);
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);