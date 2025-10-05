// index.ts
import { Book } from './models/book.model';
import { Repository } from './services/repository';
import { ApiService } from './services/api.service';
import { LibraryService } from './services/library';
import { log } from './utils/logger';
import { Person } from './models/person.abstract';
import { User } from './models/user.model';


class LibraryUser extends Person {
    constructor(id: number, name: string) {
        super(id, name, 'User');
    }
    greet(): void {
        console.log(`User ${this.name} is ready to borrow books.`);
    }
}

class LibraryAdmin extends Person {
    constructor(id: number, name: string) {
        super(id, name, 'Admin');
    }
    greet(): void {
        console.log(`Admin ${this.name} is managing the catalog.`);
    }
}


async function main() {
    log("--- Application de Gestion de Bibliothèque Démarrée ---");

    // 
    const bookRepo = new Repository<Book>('Book');
    const userRepo = new Repository<User>('User');

    //
    log("Fetching initial book data from API...");
    const initialBooks = await ApiService.getInitialBooks();
    initialBooks.forEach(book => bookRepo.add(book));
    log(`Successfully loaded ${initialBooks.length} books.`);

    // 
    const library = new LibraryService(bookRepo);
    
    // 
    const userA = new LibraryUser(10, "Mohamed");
    const adminB = new LibraryAdmin(11, "Chaima Gestionnaire");
    userRepo.add(userA);
    userRepo.add(adminB);

    userA.greet();
    adminB.greet();

    log("\n--- Cas d'Utilisation ---");
    
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
    log("\n--- État Final du Catalogue ---");
    console.table(library.listAllBooks());
}

main();