import { Book } from '../models/book.model';
import { log } from '../utils/logger';

interface OpenLibraryDoc {
    key: string;          
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

interface OpenLibraryResponse {
    docs: OpenLibraryDoc[];
    numFound: number;
}

export class ApiService {
    private static API_URL = 'https://openlibrary.org/search.json?q=science+fiction&limit=10';

    static async getInitialBooks(): Promise<Book[]> {
        log(`Fetching books from Open Library API: ${ApiService.API_URL}`);

        try {
            const response = await fetch(ApiService.API_URL);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: OpenLibraryResponse = await response.json();
            
            const books: Book[] = data.docs.map((doc, index) => ({
                id: index + 1, 
                title: doc.title,
                author: doc.author_name ? doc.author_name.join(', ') : 'Auteur Inconnu',
                year: doc.first_publish_year || 0, 
                available: true, 
            }));

            log(`Successfully fetched and mapped ${books.length} books.`);
            return books;
            
        } catch (error) {
            console.error("Error fetching books:", error);
            return []; 
        }
    }
}