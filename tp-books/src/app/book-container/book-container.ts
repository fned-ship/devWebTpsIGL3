import { Component , OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  imports: [BookForm,BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer{
  nextId: number = 3;
  books: Book[] = [
    { id: 1, title: "L'étranger", author: "Albert Camus", publisherEmail: "ex@gmail.com", publisherPhone: "22000000", releaseDate: "1942-01-01", category: "Roman", isAvailable: true, stock: 15 },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", publisherEmail: "ex2@gmail.com", publisherPhone: "22111111", releaseDate: "2011-01-01", category: "Histoire", isAvailable: false },
  ];

  searchTerm: string = '';
  filteredBooks: Book[] = [];

  sortKey: 'title' | 'category' | 'isAvailable' = 'title';
  sortDirection: 'asc' | 'desc' = 'asc';

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  bookToUpdate: Book | null = null;

  startUpdate(book: Book): void {
    this.bookToUpdate = { ...book }; 
  }

  handleSaveBook(book: Book): void {
    if (book.id === 0) { 
      const newBook: Book = { ...book, id: this.nextId++ };
      this.books.push(newBook); 
    } else {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index > -1) {
        this.books[index] = book; 
        this.bookToUpdate = null;
      }
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  ngOnInit() {
    this.applyFilterAndSort(); 
  }
  
  applyFilterAndSort(): void {
    let tempBooks = [...this.books];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      tempBooks = tempBooks.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
    }

    tempBooks.sort((a, b) => {
      const aVal = a[this.sortKey];
      const bVal = b[this.sortKey];

      let comparison = 0;
      if (aVal > bVal) {
        comparison = 1;
      } else if (aVal < bVal) {
        comparison = -1;
      }
      return this.sortDirection === 'desc' ? comparison * -1 : comparison;
    });

    this.filteredBooks = tempBooks;
  }

  setSort(key: 'title' | 'category' | 'isAvailable'): void {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
    this.applyFilterAndSort();
  }
}
