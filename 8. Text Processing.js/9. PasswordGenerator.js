function solve(arr) {
    const a = arr[0], b = arr[1], c = arr[2].toUpperCase();
    const matcher = 'aeiou';
    let joined = (a + b).split('');
    let j = 0;
    for(let i = 0; i < joined.length; i++) {
        if(matcher.includes(joined[i])) {
            joined[i] = c[j];
            j++;
        }
        if(j >= c.length) j = 0;
    }
    console.log("Your generated password is " + joined.reverse().join(''));
}
//solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);