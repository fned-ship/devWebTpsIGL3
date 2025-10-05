function add(a, b) {
    return a + b;
}
console.log("Add (5, 3):", add(5, 3));
function greet(name, age) {
    if (age !== undefined) {
        console.log("Bonjour ".concat(name, "! Vous avez ").concat(age, " ans."));
    }
    else {
        console.log("Bonjour ".concat(name, "! Votre \u00E2ge n'a pas \u00E9t\u00E9 fourni."));
    }
}
greet("hela", 28);
greet("alvarez");
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log("Power (4):", power(4));
console.log("Power (4, 3):", power(4, 3));
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    throw new Error("Les arguments doivent être de type number ou de type string, mais pas un mélange.");
}
console.log("Combine (2, 4):", combine(2, 4));
console.log("Combine ('Hello, ', 'World'):", combine("Hello, ", "World"));
