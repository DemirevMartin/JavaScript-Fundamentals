function twoCriterias(a) {
    a.sort((a, b) => a.localeCompare(b));
    a.sort((x, y) => x.length - y.length);
    console.log(a.join('\n'));
    /*Another one (of course)
    a.sort((x, y) => {
        let firstCriteria = x.length - y.length;
        let secondCriteria = x.localeCompare(y);
        return firstCriteria || secondCriteria;
    });
    */
}
twoCriterias(["alpha", "beta", "gamma"]);