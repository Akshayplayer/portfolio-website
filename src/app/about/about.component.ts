import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
  <section id="about">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="about-image">
        <img src="https://i.postimg.cc/ZKNn4Ngz/1000489578.png" alt="Profile Picture">
      </div>
      <div class="about-text">
        <p>{{ aboutText() }}</p>
      </div>
    </div>
  </section>
`,
  styles: `
    section {
      padding: 4rem 2rem;
      background-color: var(--background-color);
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--text-color);
    }
    .about-content {
      display: flex;
      align-items: center;
      max-width: 900px;
      margin: 0 auto;
    }
    .about-image {
      flex: 0 0 200px;
      margin-right: 2rem;
    }
    .about-image img {
      width: 100%;
      border-radius: 50%;
      box-shadow: var(--shadow-light);
    }
    body.dark-mode .about-image img {
      box-shadow: var(--shadow-dark);
    }
    .about-text p {
      line-height: 1.6;
      color: var(--text-color);
    }
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private portfolioDataService = inject(PortfolioDataService);
  aboutText = this.portfolioDataService.aboutText;
}
