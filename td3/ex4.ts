interface User {
    id: number;
    name: string;
    email?: string; 
    readonly isAdmin: boolean;
}

const user1: User = {
    id: 1,
    name: "ali",
    email: "ali@gmail.com",
    isAdmin: false 
};
interface Admin extends User {
    permissions: string[];
}

// Exemple d'objet Admin
const adminUser: Admin = {
    id: 202,
    name: "fned Administrateur",
    isAdmin: true, 
    permissions: ["READ_ALL", "WRITE_USER", "DELETE_POST"] 
};

console.log("Utilisateur Standard:", user1);
console.log("Utilisateur Admin:", adminUser);