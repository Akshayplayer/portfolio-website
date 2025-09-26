import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()" class="theme-toggle-button">
      {{ isDarkMode() ? 'Light Mode' : 'Dark Mode' }}
    </button>
  `,
  styles: [`
    .theme-toggle-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;
    }
    .theme-toggle-button:hover {
      background-color: #0056b3;
    }
    .dark-mode .theme-toggle-button {
      background-color: #f8f9fa;
      color: #333;
    }
    .dark-mode .theme-toggle-button:hover {
      background-color: #e2e6ea;
    }
  `]
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
