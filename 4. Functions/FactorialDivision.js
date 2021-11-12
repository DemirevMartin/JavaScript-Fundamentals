function calc(a, b) {
    function numerator(a) {
        let result = 1;
        for(let i = a; i > 0; i--) {
            result *= i;
        }
        return result;
    }

    function denominator(b) {
        let result = 1;
        for(let i = b; i > 0; i--) {
            result *= i;
        }
        return result;
    }

    console.log((numerator(a) / denominator(b)).toFixed(2));
}
calc(5, 2);
calc(6, 2);