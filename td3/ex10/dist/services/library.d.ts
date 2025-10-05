import { Book } from '../models/book.model';
import { Repository } from "./repository";
export declare class LibraryService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    addBook(book: Book): void;
    removeBook(id: number): void;
    searchBooks(query: string): Book[];
    borrowBook(bookId: number): boolean;
    returnBook(bookId: number): boolean;
    listAllBooks(): Book[];
}
//# sourceMappingURL=library.d.ts.map