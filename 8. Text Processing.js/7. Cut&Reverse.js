function solve(str) {
    let firstHalf = [];
    let secondHalf = [];
    for(let i = 0; i < str.length / 2; i++) firstHalf.push(str[i]); //SUBSTRING WOULD HAVE BEEN A SHORTER SOLUTION!!!
    for(let i = str.length / 2; i < str.length; i++) secondHalf.push(str[i]);
    firstHalf.reverse();
    secondHalf.reverse();
    console.log(firstHalf.join('') + '\n' + secondHalf.join(''));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');