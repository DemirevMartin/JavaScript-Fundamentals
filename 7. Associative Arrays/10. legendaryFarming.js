function solve(str) {
    const arr = str.split(' ');
    let resources = {
        shards : 0,
        fragments : 0,
        motes : 0
    };
    let junk = {};
    for(let i = 0; i < arr.length; i += 2) {
        const quantity = Number(arr[i]);
        const name = arr[i + 1].toLowerCase();
        if(resources.hasOwnProperty(name)) {
            resources[name] += quantity;
        }
        else {
            if(!junk.hasOwnProperty(name)) junk[name] = quantity;
            else junk[name] += quantity;
        }
        
        if(resources["shards"] >= 250) { resources["shards"] -= 250; console.log("Shadowmourne obtained!"); break; }
        else if(resources["fragments"] >= 250) { resources["fragments"] -= 250; console.log("Valanyr obtained!"); break; }
        else if(resources["motes"] >= 250) { resources["motes"] -= 250; console.log("Dragonwrath obtained!"); break; }
    }
    const sortedResources = Object.entries(resources).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
    for(const [key, value] of sortedResources) {
        console.log(`${key}: ${value}`);
    }
    const sortedJunk = Object.keys(junk).sort((x, y) => x.localeCompare(y));
    for(const key of sortedJunk) {
        console.log(`${key}: ${junk[key]}`);
    }
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
//solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');