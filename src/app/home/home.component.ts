import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name = 'Aman';

  genderCode = 1;
  today: number = Date.now();

  male() {
    this.genderCode = 0;
  }

  female() {
    this.genderCode = 1;
  }

  other() {
    this.genderCode = 2;
  }
}
