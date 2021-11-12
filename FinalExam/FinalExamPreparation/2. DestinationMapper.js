function solve(str) {
    const pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let listDestins = [];
    let totalPts = 0;
    while((data = pattern.exec(str)) !== null) {
        const destination = data.groups["destination"];
        const points = destination.length;
        listDestins.push(destination);
        totalPts += points;
    }
    console.log(`Destinations: ${listDestins.join(', ')}`);
    console.log(`Travel Points: ${totalPts}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");