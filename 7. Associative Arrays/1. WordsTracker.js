function track(a) {
    let words = a.shift().split(' ');
    let obj = {};

    for(let word of words) {
        let counter = 0;
        for(let el of a) {
            if(el === word) {
                counter += 1;
            }
        }
        obj[word] = counter;
        a = a.filter(x => x !== word);
    }

    /*let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    for(let key of sorted) {
        console.log(key, '-', obj[key]);
    }*/

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for(let [key, value] of sorted) {
        console.log(key, '-', value);
    }
}
track([
    'In this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task']);