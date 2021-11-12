function solve(arr) {
    const n = Number(arr.shift());
    let data = {};
    for(const el of arr) {
        if(el === 'Statistics') break;
        if(el.includes('Add')) {
            const current = el.split('=');
            const username = current[1];
            const sent = Number(current[2]);
            const received = Number(current[3]);
            if(!data.hasOwnProperty(username)) {
                data[username] = {
                    sent,
                    received
                };
            }
        }
        else if(el.includes('Message')) {
            const current = el.split('=');
            const sender = current[1];
            const receiver = current[2];
            if(data.hasOwnProperty(sender) && data.hasOwnProperty(receiver)) {
                data[sender].sent++;;
                data[receiver].received++;
                if(data[sender].sent + data[sender].received === n) {
                    console.log(`${sender} reached the capacity!`);
                    delete data[sender];
                }
                if(data[receiver].sent + data[receiver].received === n) {
                    console.log(`${receiver} reached the capacity!`);
                    delete data[receiver];
                }
            }
        }
        else if(el.includes('Empty')) {
            const current = el.split('=');
            const username = current[1];
            if(username === 'All') data = {};
            else {
                if(data.hasOwnProperty(username)) {
                    delete data[username];
                }
            }
        }
    }
    const keys = Object.keys(data);
    console.log(`Users count: ${keys.length}`);
    const sorted = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0])).sort((x, y) => y[1].received -  x[1].received);
    for(const [key, value] of sorted) {
        console.log(`${key} - ${value.sent + value.received}`);
    }
}
solve(["10","Add=Berg=9=0","Add=Kevin=0=0",
"Message=Berg=Kevin","Add=Mark=5=4","Statistics"]);
solve(["20","Add=Mark=3=9","Add=Berry=5=5","Add=Clark=4=0",
"Empty=Berry","Add=Blake=9=3","Add=Michael=3=9",
"Add=Amy=9=9","Message=Blake=Amy","Message=Michael=Amy",
"Statistics"]);
/*solve(["12","Add=Bonnie=3=5","Add=Johny=4=4","Empty=All",
"Add=Bonnie=3=3", "Statistics"]);*/