import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  standalone: false,
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  taches = [
    { description: "Faire les courses", complete: false, priorite: "haute" },
    { description: "Réviser Angular", complete: true, priorite: "moyenne" },
  ];

  toggle(t: any) {
    t.complete = !t.complete;
  }

}
