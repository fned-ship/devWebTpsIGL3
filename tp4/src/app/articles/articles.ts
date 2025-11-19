import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { titre: 'Laptop Asus', contenu: 'Article 1' ,importance:'moyenne'},
    { titre: 'Laptop Gaming', contenu: 'Article 2' ,importance:'moyenne'},
    { titre: 'Laptop HP', contenu: 'Article 3' ,importance:'moyenne'},
  ];
  newImportance = 'moyenne';

  newTitle = '';
  newContent = '';

  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance:this.newImportance,
      });
      this.newTitle = '';
      this.newContent = '';
      this.newImportance='';
    }
  }
}
