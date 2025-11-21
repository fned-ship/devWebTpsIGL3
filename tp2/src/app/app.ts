import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';
import { Profil } from './profil/profil';
import { Adresse } from './adresse/adresse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Utilisateur,Profil,Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2');
}
