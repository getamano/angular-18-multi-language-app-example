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

  genderCode = 0;
  today: number = Date.now();

  male() {
    this.genderCode = 0;
  }

  female() {
    this.genderCode = 1;
  }
}
