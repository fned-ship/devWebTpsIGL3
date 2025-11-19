import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn: boolean = false;
  userName: string = '';
  firstNameAllowed = 'Youssef'; 

  toggleLogin() {
    if (this.userName === this.firstNameAllowed) {
      this.isLoggedIn = true;
    } else {
      alert("Nom incorrect !");
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
