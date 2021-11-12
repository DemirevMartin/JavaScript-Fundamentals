function solve(input) {
    let sentence = input[0].split(' ');
    let arr = input[1];
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i].includes('_')) {
            let blank = sentence[i].split('').filter(a => a === "_").join('');
            let different = sentence[i].split('').filter(a => a !== "_").join('');
            for(let j = 0; j < arr.length; j++) {
                if(blank.length === arr[j].length) {
                    sentence[i] = `${arr[j]}${different}`;
                    arr.splice(j, 1);
                    break;
                }
            }
        }
    }
    console.log(sentence.join(' '));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);