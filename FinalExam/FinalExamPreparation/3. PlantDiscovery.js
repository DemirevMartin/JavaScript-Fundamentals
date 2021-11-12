function solve(arr) {
    let n = Number(arr.shift());
    let data = {};
    for(let i = 0; i < n; i++) {
        const current = arr.shift().split('<->');
        const plant = current[0];
        const rarity = Number(current[1]);
        data[plant] = {
            rarity: rarity,
            rating: []
        };
    }
    for(const el of arr) {
        if(el === "Exhibition") break;
        if(el.includes('Rate')) {
            const container = el.split(' ');
            const plant = container[1];
            const rating = Number(container[3]);
            if(!data.hasOwnProperty(plant)) console.log('error');
            else data[plant].rating.push(rating);
        }
        else if(el.includes('Update')) {
            const container = el.split(' ');
            const plant = container[1];
            const rarity = Number(container[3]);
            if(!data.hasOwnProperty(plant)) console.log('error');
            else data[plant].rarity = rarity;
            
        }
        else if(el.includes('Reset')) {
            const container = el.split(': ');
            const plant = container[1];
            if(!data.hasOwnProperty(plant)) console.log('error');
            else data[plant].rating = [];
        }
    }
    const sortedData = Object.entries(data).sort((x, y) => y[1].rating - x[1].rating).sort((x, y) => y[1].rarity - x[1].rarity);
    console.log("Plants for the exhibition:");
    for(const [plant, list] of sortedData) {
        const rateLength = list.rating.length;
        if(rateLength > 0) {
            console.log(`- ${plant}; Rarity: ${list.rarity}; Rating: ${(list.rating.reduce((a, b) => a + b) / rateLength).toFixed(2)}`);
        }
        else console.log(`- ${plant}; Rarity: ${list.rarity}; Rating: 0.00`);
    }
}
solve(["3","Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10", "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5", "Reset: Arnoldii","Exhibition"]);
//solve(["2", "Candelabra<->10", "Oahu<->10", "Rate: Oahu - 7", "Rate: Candelabra - 6", "Exhibition"]);