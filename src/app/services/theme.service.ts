
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static readonly THEME_KEY = 'theme';
  public isDarkMode = signal<boolean>(false);

  constructor() {
    this.loadTheme();
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
