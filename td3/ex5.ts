function add(a: number, b: number): number {
    return a + b;
}

console.log("Add (5, 3):", add(5, 3)); 

function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Bonjour ${name}! Vous avez ${age} ans.`);
    } else {
        console.log(`Bonjour ${name}! Votre âge n'a pas été fourni.`);
    }
}

greet("hela", 28); 
greet("alvarez");  

function power(base: number, exp: number = 2): number {
    return base ** exp; 
}

console.log("Power (4):", power(4));      
console.log("Power (4, 3):", power(4, 3));  


function combine(input1: number, input2: number): number; 

function combine(input1: string, input2: string): string;

function combine(input1: number | string, input2: number | string): number | string {
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
