function deliver(a) {
    let integers = a.shift().split('@').map(Number);
    let positions = [0];
    for(let el of a) {
        let command = el.split(' ');
        let current = positions[positions.length - 1];
        if(command[0] === "Love!") {
            console.log(`Cupid's last position was ${current}.`);
            let failed = integers.filter(x => x > 0);
            if(failed.length === 0) {
                console.log("Mission was successful.");
            }
            else console.log(`Cupid has failed ${failed.length} places.`);
            break;
        }
        let jump = Number(command[1]);
        if(current + jump >= integers.length) {
            if(integers[0] > 0) {
                if(integers[0] - 2 <= 0) {
                    integers[0] = 0;
                    console.log(`Place 0 has Valentine's day.`);
                }
                else integers[0] -= 2;
            }
            else {
                console.log(`Place 0 already had Valentine's day.`);
            }
            positions.push(0);
        }
        else {
            if(integers[current + jump] > 0) {
                if(integers[current + jump] - 2 <= 0) {
                    integers[current + jump] = 0;
                    console.log(`Place ${current + jump} has Valentine's day.`);
                }
                else integers[current + jump] -= 2;
            }
            else {
                console.log(`Place ${current + jump} already had Valentine's day.`);
            }
            positions.push(current + jump);
        }
    }
}
//deliver(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
deliver(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);