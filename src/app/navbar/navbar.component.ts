import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
          &#9776;
        </button>
        <ul class="navbar-menu" [class.mobile-menu-active]="isMobileMenuOpen()">
          <li class="navbar-item">
            <a href="#about" class="navbar-link">About</a>
          </li>
          <li class="navbar-item">
            <a href="#experience" class="navbar-link">Experience</a>
          </li>
          <li class="navbar-item">
            <a href="#publications" class="navbar-link">Publications</a>
          </li>
          <li class="navbar-item">
            <a href="#competitions" class="navbar-link">Competitions</a>
          </li>
          <li class="navbar-item">
            <a href="#education" class="navbar-link">Education</a>
          </li>
        </ul>
        <app-theme-toggle />
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: var(--element-background);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1rem 2rem;
    }
    .navbar-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .navbar-menu {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    .navbar-item {
      margin: 0 1rem;
    }
    .navbar-link {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s;
    }
    .navbar-link:hover {
      color: var(--primary-color);
    }
    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      .navbar-container {
        justify-content: space-between;
      }
      .navbar-menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--element-background);
        width: 100%;
        padding: 1rem 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .mobile-menu-toggle {
        display: block;
      }
      .navbar-item {
        margin: 1rem 0;
        text-align: center;
      }
      .mobile-menu-active {
        display: flex;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
