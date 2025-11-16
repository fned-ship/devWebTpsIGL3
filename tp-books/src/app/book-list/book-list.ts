import { Component , Input , Output, EventEmitter} from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();
  onDelete(id: number): void {
    this.deleteBook.emit(id);
  }

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }
}
