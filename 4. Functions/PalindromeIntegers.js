function check(a) {
    for(let i = 0; i <= a.length - 1; i++) {
        let n = a[i];
        let sn = n.toString();
        let rsn = "";
        for(let j = sn.length - 1; j >= 0; j--) {
            rsn += sn[j];
        }
        let rn = Number(rsn);
        if(n === rn) {
            console.log("true");
        }
        else console.log("false");
    }
}
check([101, 324, 1024, 111, 1001, 1515, 1551]);