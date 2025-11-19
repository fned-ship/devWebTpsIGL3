import { Component , Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CurrencyPipe} from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [FormsModule,CurrencyPipe,CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Input() imageUrl: string = ''; 
  @Input() prix: number = 199.99;

  @Output() ajouterAuPanier = new EventEmitter<string>();

  enStock: boolean = true;

  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
    // Optionnel : afficher alert ici ou laisser parent gérer
  }

  afficherAlerte(): void {
    alert('Produit ajouté au panier');
  }
}
