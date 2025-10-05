var user1 = {
    id: 1,
    name: "ali",
    email: "ali@gmail.com",
    isAdmin: false
};
// Exemple d'objet Admin
var adminUser = {
    id: 202,
    name: "fned Administrateur",
    isAdmin: true,
    permissions: ["READ_ALL", "WRITE_USER", "DELETE_POST"]
};
console.log("Utilisateur Standard:", user1);
console.log("Utilisateur Admin:", adminUser);
