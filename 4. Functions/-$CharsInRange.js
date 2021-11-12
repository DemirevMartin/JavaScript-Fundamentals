function getChars(a, b) {
    const c = a.charCodeAt(0);
    const d = b.charCodeAt(0);
    let min = c;
    let max = d;
    let res = "";
    if(c > d) {
       max = c;
       min = d; 
    }
    for(let i = min + 1; i < max; i++) {
        if(i === max - 1) {
            res += String.fromCharCode(i);
            break;
        }    
        res += String.fromCharCode(i);
        res += " ";
    }
    console.log(res);
}
getChars('a', 'd');
getChars('#', ':');
getChars('C', '#');