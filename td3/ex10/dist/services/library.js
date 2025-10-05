"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
const logger_1 = require("../utils/logger");
class LibraryService {
    bookRepository;
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
        (0, logger_1.log)('LibraryService initialized.');
    }
    addBook(book) {
        this.bookRepository.add(book);
    }
    removeBook(id) {
        this.bookRepository.remove(id);
    }
    searchBooks(query) {
        const lowerQuery = query.toLowerCase();
        return this.bookRepository.getAll().filter(book => book.title.toLowerCase().includes(lowerQuery) ||
            book.author.toLowerCase().includes(lowerQuery));
    }
    borrowBook(bookId) {
        const book = this.bookRepository.getById(bookId);
        if (book && book.available) {
            book.available = false;
            (0, logger_1.log)(`Book "${book.title}" (ID: ${bookId}) has been successfully borrowed.`);
            return true;
        }
        (0, logger_1.log)(`Book with ID ${bookId} is not available or does not exist.`);
        return false;
    }
    // Rendre un livre
    returnBook(bookId) {
        const book = this.bookRepository.getById(bookId);
        if (book && !book.available) {
            book.available = true;
            (0, logger_1.log)(`Book "${book.title}" (ID: ${bookId}) has been successfully returned.`);
            return true;
        }
        (0, logger_1.log)(`Book with ID ${bookId} was not borrowed or does not exist.`);
        return false;
    }
    listAllBooks() {
        return this.bookRepository.getAll();
    }
}
exports.LibraryService = LibraryService;
//# sourceMappingURL=library.js.map