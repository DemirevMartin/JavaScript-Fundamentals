function solve(arr) {
    let str = arr[0];
    let pattern = arr[1];
    while(true) {
        let firstIndex = str.indexOf(pattern);
        let lastIndex = str.lastIndexOf(pattern);
        if(firstIndex === lastIndex || pattern.length === 0) { 
            console.log("No shake.");
            console.log(str);
            break;
        }
        let containerString = str.split('');
        containerString.splice(firstIndex, pattern.length);
        containerString.splice(lastIndex - pattern.length, pattern.length);
        str = containerString.join('');
        let containerPattern = pattern.split('');
        containerPattern.splice(Math.floor(pattern.length / 2), 1);
        pattern = containerPattern.join('');
        console.log("Shaked it.");
    }
}
//solve(["astalavista baby", "sta"]);
//solve(["##mtm!!mm.mm*mtm.#", "mtm"]);
solve(["mtmtm57", "mtm"]);