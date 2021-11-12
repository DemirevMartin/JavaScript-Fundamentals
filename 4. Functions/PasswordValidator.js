function validate(p) {
    let isValid = true;
    if(p.length < 6 || p.length > 11) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let counter = 0;
    let containsOther = false;
    for(let el of p) {
        if(el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
            counter++;
        }
        if(!(el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) && !(el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) && !(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90)) {
            containsOther = true;
        }
    }
    
    if(containsOther) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }
    if(counter < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }
    if(isValid) {
        console.log("Password is valid");
    }
}
//validate("logIn");
validate("$a$$yyy");
//validate("MyPass123");