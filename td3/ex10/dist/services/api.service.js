"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const logger_1 = require("../utils/logger");
class ApiService {
    static API_URL = 'https://openlibrary.org/search.json?q=science+fiction&limit=10';
    static async getInitialBooks() {
        (0, logger_1.log)(`Fetching books from Open Library API: ${ApiService.API_URL}`);
        try {
            const response = await fetch(ApiService.API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const books = data.docs.map((doc, index) => ({
                id: index + 1,
                title: doc.title,
                author: doc.author_name ? doc.author_name.join(', ') : 'Auteur Inconnu',
                year: doc.first_publish_year || 0,
                available: true,
            }));
            (0, logger_1.log)(`Successfully fetched and mapped ${books.length} books.`);
            return books;
        }
        catch (error) {
            console.error("Error fetching books:", error);
            return [];
        }
    }
}
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map