const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];
const tableauFusionne = [...tableau1, ...tableau2];

console.log(tableauFusionne); 

const original = { a: 1, b: 2, c: 3 };
const copie = { ...original, b: 20 }; 

console.log(original);
console.log(copie); 