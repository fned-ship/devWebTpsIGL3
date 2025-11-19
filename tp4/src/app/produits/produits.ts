import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: false,
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits = [
    { nom: "Clavier", stock: 70 },
    { nom: "Souris", stock: 35 },
    { nom: "Casque", stock: 10 }
  ];
}
