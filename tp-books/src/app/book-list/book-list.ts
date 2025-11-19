import { Component , Input , Output, EventEmitter} from '@angular/core';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() books: Book[] = [];
  @Input() sortKey: string = 'title'; 
  @Input() sortDirection: 'asc' | 'desc' = 'asc'; 

  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();
  @Output() sortChanged = new EventEmitter<'title' | 'category' | 'isAvailable'>();

  onSort(key: 'title' | 'category' | 'isAvailable'): void {
    this.sortChanged.emit(key);
  }

  onDelete(id: number): void {
    console.log("id : ",id)
    this.deleteBook.emit(id);
  }

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }
  trackById(index: number, book: Book): number {
    return book.id;
  }

}
