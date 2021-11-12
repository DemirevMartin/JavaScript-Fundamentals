function solve(s) {
    let a = s.split(' ').filter(a => a.includes('#'));
    let result = [];
    let regex = /#[a-z][A-Z]*/;
    for(let el of a) {
        if(el.match(regex)) result.push(el.replace('#', ''));
    }
    console.log(result.join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');