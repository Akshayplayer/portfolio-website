
import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static readonly THEME_KEY = 'theme';
  public isDarkMode = signal<boolean>(false);

  constructor() {
    this.loadTheme();
    effect(() => {
      if (this.isDarkMode()) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  public toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.saveTheme();
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem(ThemeService.THEME_KEY);
    if (storedTheme) {
      this.isDarkMode.set(storedTheme === 'dark');
    }
  }

  private saveTheme(): void {
    localStorage.setItem(ThemeService.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
  }
}
