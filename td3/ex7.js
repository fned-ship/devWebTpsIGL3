function identity(value) {
    return value;
}
var myString = identity("Bonjour");
var myNumber = identity(123);
var myBoolean = identity(true);
console.log("Identity String: ".concat(myString));
console.log("Identity Number: ".concat(myNumber));
function getFirst(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numbers = [10, 20, 30];
var firstNum = getFirst(numbers);
console.log("Premier Nombre: ".concat(firstNum));
var names = ["ali", "hela", "youssef"];
var firstName = getFirst(names);
console.log("Premier Nom: ".concat(firstName));
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
        console.log("Item added.");
    };
    Repository.prototype.remove = function (itemToRemove) {
        var index = this.items.indexOf(itemToRemove);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log("Item removed.");
        }
        else {
            console.log("Item not found.");
        }
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
var userRepo = new Repository();
var newUser = { id: 1, username: "dev_bob" };
userRepo.add(newUser);
userRepo.add({ id: 2, username: "tester_alice" });
console.log("Tous les utilisateurs:", userRepo.getAll());
userRepo.remove(newUser);
console.log("Après suppression:", userRepo.getAll());
var successResponse = {
    data: { totalCount: 150, average: 50.5 }
};
var errorResponse = {
    data: null,
    error: "Ressource non trouvée (404)"
};
console.log("\nRéponse Succès:", successResponse);
console.log("Réponse Erreur:", errorResponse);
