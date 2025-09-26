import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>{{ name() }}</h1>
      <h2>{{ major() }}</h2>
      <p>{{ aboutText() }}</p>
      <div class="social-links">
        <a [href]="contact().linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a [href]="contact().github" target="_blank"><i class="fab fa-github"></i></a>
        <a [href]="'mailto:' + contact().email"><i class="fas fa-envelope"></i></a>
      </div>
    </header>
  `,
  styles: [`
    header {
      background-color: var(--primary-color);
      color: var(--header-text-color);
      text-align: center;
      padding: 5rem 2rem;
    }
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    .social-links a {
      color: var(--header-text-color);
      font-size: 2rem;
      margin: 0 1rem;
      transition: color 0.3s;
    }
    .social-links a:hover {
      opacity: 0.8;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private dataService = inject(PortfolioDataService);
  public name = this.dataService.name;
  public major = this.dataService.major;
  public aboutText = this.dataService.aboutText;
  public contact = this.dataService.contact;
}
