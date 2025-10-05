"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const resultValue = (0, math_1.add)(10, 5);
const opName = 'Addition';
const resultObject = {
    value: resultValue,
    timestamp: new Date()
};
console.log(`Opération: ${opName}, Résultat: ${resultObject.value}`);
//# sourceMappingURL=main.js.map