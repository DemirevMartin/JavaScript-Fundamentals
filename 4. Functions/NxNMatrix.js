function print(a) {
    for(let i = 0; i < a; i++) {
        let row = "";
        for(let j = 0; j < a; j++) {
            if(j === a - 1)
            {
                row += a.toString(); 
                break;
            }
            row += a.toString();
            row += " ";
        }
        console.log(row);
    }
}
print(2);