import { Component ,Input , Output, EventEmitter , OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import {FormsModule , NgForm} from '@angular/forms'
import { OnlyTextDirective } from '../shared/directives/only-text.directive';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule,OnlyTextDirective],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  @Input() categories: string[] = [];
  @Output() saveBook = new EventEmitter<Book>();
  book: Book = this.getNewBook();
  @Input() set bookToUpdate(book: Book | null) {
    if (book) {
      this.book = { ...book };
    } else {
      this.book = this.getNewBook();
    }
  }
  ngOnInit() {
    console.log('PARENT: Liste des catégories chargée :', this.categories);
    console.log('PARENT: Nombre de catégories :', this.categories.length);
  }
  get formTitle(): string {
    return this.book.id !== 0 ? 'Mettre à jour' : 'Ajouter'; 
  }
  getNewBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: undefined
    };
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.saveBook.emit(this.book);
      if (this.book.id !== 0) {
        
      } else {
        form.resetForm(this.getNewBook()); 
      }
    }
  }
  
}
