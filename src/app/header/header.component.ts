import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="hero-header">
      <div class="hero-content">
        <h1>{{ name() }}</h1>
        <p>{{ major() }}</p>
        <a href="#contact" class="cta-button">Get in Touch</a>
      </div>
    </header>
  `,
  styles: [`
    .hero-header {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      padding: 8rem 2rem;
      text-align: center;
    }
    .hero-content h1 {
      font-size: 4.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    .hero-content p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .cta-button {
      background-color: #fff;
      color: #6e8efb;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 700;
      transition: background-color 0.3s, color 0.3s;
    }
    .cta-button:hover {
      background-color: #f0f0f0;
      color: #5a78d8;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private dataService = inject(PortfolioDataService);
  public name = this.dataService.name;
  public major = this.dataService.major;
}
