// services/library.service.ts
import { Book } from '../models/book.model';
import { Repository } from "./repository";
import { log } from '../utils/logger';

export class LibraryService {
    private bookRepository: Repository<Book>;
    
    constructor(bookRepository: Repository<Book>) {
        this.bookRepository = bookRepository;
        log('LibraryService initialized.');
    }

    addBook(book: Book): void {
        this.bookRepository.add(book);
    }

    removeBook(id: number): void {
        this.bookRepository.remove(id);
    }

    searchBooks(query: string): Book[] {
        const lowerQuery = query.toLowerCase();
        return this.bookRepository.getAll().filter(book => 
            book.title.toLowerCase().includes(lowerQuery) ||
            book.author.toLowerCase().includes(lowerQuery)
        );
    }

    borrowBook(bookId: number): boolean {
        const book = this.bookRepository.getById(bookId);
        if (book && book.available) {
            book.available = false;
            log(`Book "${book.title}" (ID: ${bookId}) has been successfully borrowed.`);
            return true;
        }
        log(`Book with ID ${bookId} is not available or does not exist.`);
        return false;
    }

    // Rendre un livre
    returnBook(bookId: number): boolean {
        const book = this.bookRepository.getById(bookId);
        if (book && !book.available) {
            book.available = true;
            log(`Book "${book.title}" (ID: ${bookId}) has been successfully returned.`);
            return true;
        }
        log(`Book with ID ${bookId} was not borrowed or does not exist.`);
        return false;
    }
    
    listAllBooks(): Book[] {
        return this.bookRepository.getAll();
    }
}