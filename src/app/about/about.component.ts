import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
  <section id="about">
    <h2>About Me</h2>
    <p>{{ aboutText() }}</p>
  </section>
`,
  styles: `section {
  padding: 4rem 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private portfolioDataService = inject(PortfolioDataService);
  aboutText = this.portfolioDataService.aboutText;
}
