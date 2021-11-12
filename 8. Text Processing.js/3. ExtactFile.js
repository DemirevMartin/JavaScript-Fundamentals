function solve(t) {
    let file = t.split('\\').pop();
    const lastDot = file.lastIndexOf('.');
    const fileName = file.substring(0, lastDot);
    const extension = file.substring(lastDot + 1);
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.temp.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');