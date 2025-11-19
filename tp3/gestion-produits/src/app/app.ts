import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Produit } from './components/produit/produit';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Panier } from './components/panier/panier';
import { Game } from './components/game/game';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Bienvenue,Produit,Utilisateur,Panier,Game,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  panierItems: string[] = [];

  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }

  protected readonly title = signal('gestion-produits');
}
