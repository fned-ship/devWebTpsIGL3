"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./services/repository");
const api_service_1 = require("./services/api.service");
const library_1 = require("./services/library");
const logger_1 = require("./utils/logger");
const person_abstract_1 = require("./models/person.abstract");
class LibraryUser extends person_abstract_1.Person {
    constructor(id, name) {
        super(id, name, 'User');
    }
    greet() {
        console.log(`User ${this.name} is ready to borrow books.`);
    }
}
class LibraryAdmin extends person_abstract_1.Person {
    constructor(id, name) {
        super(id, name, 'Admin');
    }
    greet() {
        console.log(`Admin ${this.name} is managing the catalog.`);
    }
}
async function main() {
    (0, logger_1.log)("--- Application de Gestion de Bibliothèque Démarrée ---");
    // 
    const bookRepo = new repository_1.Repository('Book');
    const userRepo = new repository_1.Repository('User');
    //
    (0, logger_1.log)("Fetching initial book data from API...");
    const initialBooks = await api_service_1.ApiService.getInitialBooks();
    initialBooks.forEach(book => bookRepo.add(book));
    (0, logger_1.log)(`Successfully loaded ${initialBooks.length} books.`);
    // 
    const library = new library_1.LibraryService(bookRepo);
    // 
    const userA = new LibraryUser(10, "Mohamed");
    const adminB = new LibraryAdmin(11, "Chaima Gestionnaire");
    userRepo.add(userA);
    userRepo.add(adminB);
    userA.greet();
    adminB.greet();
    (0, logger_1.log)("\n--- Cas d'Utilisation ---");
    // Recherche de livres
    console.log("Recherche 'Petit' :", library.searchBooks('Petit'));
    // Tente d'emprunter le livre '1984' (ID: 2)
    library.borrowBook(2);
    // Tente d'emprunter un livre déjà indisponible (ID: 3)
    library.borrowBook(3);
    // Rendre un livre (ID: 2)
    library.returnBook(2);
    // Ajouter un nouveau livre
    library.addBook({ id: 5, title: "L'Alchimiste", author: "Paulo Coelho", year: 1988, available: true });
    // Afficher tous les livres après les opérations
    (0, logger_1.log)("\n--- État Final du Catalogue ---");
    console.table(library.listAllBooks());
}
main();
//# sourceMappingURL=index.js.map