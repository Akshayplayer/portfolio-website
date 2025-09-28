import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-hero',
  template: `
    <header class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ name() }}</h1>
        <p class="hero-subtitle">{{ major() }}</p>
      </div>
      <div class="hero-image">
        <img src="https://i.postimg.cc/tRhz8JjS/Gemini-Generated-Image-qw4ppaqw4ppaqw4p2.png" alt="Hero Image">
      </div>
    </header>
  `,
  styles: [`
    .hero {
      background: var(--section-background);
      padding: 8rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 40vh;
    }
    .hero-content {
      max-width: 800px;
    }
    .hero-title {
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
      animation: fadeInDown 1s ease-out;
    }
    .hero-subtitle {
      font-size: 1.8rem;
      font-weight: 300;
      animation: fadeInUp 1s ease-out;
    }
    .hero-image {
      margin-top: 2rem;
    }
    .hero-image img {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private dataService = inject(PortfolioDataService);
  public name = this.dataService.name;
  public major = this.dataService.major;
}
