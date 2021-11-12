function court(a) {
    let sum = Number(a[0]) + Number(a[1]) + Number(a[2]);
    let n = Number(a[3]);
    let time = 0;
    while(n > 0) {
        time++;
        if(time % 4 !== 0) {
            n -= sum;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
court([1, 2, 3, 45]);
court([5, 6, 4, 20]);
court([3, 2, 5, 40]);