//First solution
/*function solve(a) {
    for(let el of a) {
        let s = el.split(' ');
        let name = s[0];
        let age = s[1];
        console.log(`${name}, age ${age} says Meow`);
    }
}*/
//Second solution
function solve(a) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for(let el of a) {
        let s = el.split(' ');
        let name = s[0];
        let age = s[1];
        let cat = new Cat(name, age);
        cat.meow();
    } 
}
solve(['Mellow 2', 'Tom 5']);