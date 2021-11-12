function partyyyy(a) {
    let onList = [];
    let yes = [];
    let not = [];
    for(let i = 0; i < a.length; i++) {
        let s = a[i].split(' ');
        let name = s[0];
        if(s.length === 3) {
            if(!onList.includes(name)){
                onList.push(name);
            }
            else {
                yes.push(name);
            }
        }
        else not.push(name);
    }
    for(let el of yes) {
        console.log(`${el} is already in the list!`);
    }
    for(let el of not) {
        if(!onList.includes(el)) {
            console.log(`${el} is not in the list!`);
        }
    }
    for(let el of onList) {
        if(!not.includes(el)) {
            console.log(el);
        }
    }
}
//partyyyy(['Allie is going!','George is going!','John is not going!','George is not going!']);
partyyyy(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);