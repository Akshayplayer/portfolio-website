import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()" class="theme-toggle-button">
      <i [class]="isDarkMode() ? 'devicon-sun-plain' : 'devicon-moon-plain'"></i>
      <span>{{ isDarkMode() ? 'Light Mode' : 'Dark Mode' }}</span>
    </button>
  `,
  styles: [`
    .theme-toggle-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--primary-color);
      color: var(--skill-tag-text-light);
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: var(--timeline-item-shadow);
    }

    .theme-toggle-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    body.dark-mode .theme-toggle-button {
      background-color: var(--skill-tag-background);
      color: var(--skill-tag-text);
      border: 1px solid var(--primary-color);
    }

    .theme-toggle-button i {
      font-size: 1.2rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
