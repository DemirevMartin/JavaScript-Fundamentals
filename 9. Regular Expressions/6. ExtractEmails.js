function solve(str) {
    const pattern = / [a-z\d]+([-._][a-z]+)*@[a-z]+([-._][a-z]+)+/g;
    let output = [];
    while((data = pattern.exec(str)) !== null) {
        output.push(data);
    }
    for(const el of output) console.log(el[0].trim());
}
solve("Please contact us at: support1816@github.com.");
solve("Just send email to s.miller@mit.edu and j_hopking@york-ac_uk for more information.");
solve("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");