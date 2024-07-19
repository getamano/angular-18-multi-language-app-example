import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular 18 Internationalization & Localization (i18n) Example App';
  name = 'Aman';
  localesList = [
    { code: 'en', label: 'English' },
    { code: 'am', label: 'አማርኛ' },
  ];

  createdBy = $localize`Created By ${this.name}`;

  constructor(private route: ActivatedRoute) {}
}
