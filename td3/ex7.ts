function identity<T>(value: T): T {
    return value;
}

let myString = identity<string>("Bonjour"); 
let myNumber = identity(123); 
let myBoolean = identity(true); 

console.log(`Identity String: ${myString}`);
console.log(`Identity Number: ${myNumber}`);

function getFirst<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

let numbers = [10, 20, 30];
let firstNum = getFirst(numbers); 
console.log(`Premier Nombre: ${firstNum}`); 

let names = ["ali", "hela", "youssef"];
let firstName = getFirst(names); 
console.log(`Premier Nom: ${firstName}`); 


class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
        console.log("Item added.");
    }

    remove(itemToRemove: T): void {
        const index = this.items.indexOf(itemToRemove);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log("Item removed.");
        } else {
            console.log("Item not found.");
        }
    }

    getAll(): T[] {
        return this.items;
    }
}




interface UserRepo { id: number; username: string }
const userRepo = new Repository<UserRepo>();
const newUser = { id: 1, username: "dev_bob" };

userRepo.add(newUser);
userRepo.add({ id: 2, username: "tester_alice" });

console.log("Tous les utilisateurs:", userRepo.getAll());
userRepo.remove(newUser);
console.log("Après suppression:", userRepo.getAll());



interface ApiResponse<T> {
    data: T; 
    error?: string; 
}

interface Stats { 
    totalCount: number; 
    average: number; 
}
const successResponse: ApiResponse<Stats> = {
    data: { totalCount: 150, average: 50.5 }
};

const errorResponse: ApiResponse<null> = {
    data: null, 
    error: "Ressource non trouvée (404)" 
};

console.log("\nRéponse Succès:", successResponse);
console.log("Réponse Erreur:", errorResponse);