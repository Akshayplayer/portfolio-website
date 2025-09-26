import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
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
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
    }
    .navbar-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
    }
    .navbar-menu {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    .navbar-item {
      margin: 0 1.5rem;
    }
    .navbar-link {
      color: #333;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s;
    }
    .navbar-link:hover {
      color: #007bff;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {}
