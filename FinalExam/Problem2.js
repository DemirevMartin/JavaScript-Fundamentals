function solve(arr) {
    const n = Number(arr.shift());
    const pattern = /([\*\@])(?<tag>[A-Z][a-z]{2,})\1\:\s\[(?<a>[A-Za-z])\]\|\[(?<b>[A-Za-z])\]\|\[(?<c>[A-Za-z])\]\|$/;
    for(let i = 0; i < n; i++) {
        let current = arr.shift();
        if((data = pattern.exec(current)) !== null) {
            const tag = data.groups.tag;
            const a = data.groups.a;
            const b = data.groups.b;
            const c = data.groups.c;
            const n1 = a.charCodeAt();
            const n2 = b.charCodeAt();
            const n3 = c.charCodeAt();
            console.log(`${tag}: ${n1} ${n2} ${n3}`);
        }
        else console.log(`Valid message not found!`);
    }
}
solve(["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"]);
solve(["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);