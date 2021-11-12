function solve(a) {
    class Song {
        constructor(type, name) {
            this.type = type;
            this.name = name;
        }
        print() {
            console.log(this.name);
        }
    }
    let n = a.shift();
    let type = a.pop();
    for(let el of a) {
        let s = el.split('_');
        let command = s[0];
        let name = s[1];
        if(type === "all") {
            let song = new Song(type, name);
            song.print();
        }
        else if(command === type) {
            let song = new Song(type, name);
            song.print();
        }
    }
}
solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);