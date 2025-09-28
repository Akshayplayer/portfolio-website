import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-education',
  template: `
    <section class="education" id="education">
      <h2 class="section-title">Education</h2>
      <div class="education-card">
        <img src="https://i.postimg.cc/vHMnpvYk/IIT-Kharagpur-Logo-svg.png" alt="IIT Kharagpur Logo" class="institution-logo">
        <h3>{{ education().degree }}</h3>
        <p class="institution primary-accent">{{ education().institution }}</p>
        <p class="duration">{{ education().duration }}</p>
        <p class="cgpa">CGPA: {{ education().cgpa }}</p>
        <p class="location">{{ education().location }}</p>
      </div>
    </section>
  `,
  styles: [`
    .education {
      padding: 3rem 2rem;
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    .education-card {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--element-background);
      border-radius: 10px;
      padding: 2.5rem;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .education-card:hover {
      transform: translateY(-10px);
    }

    .institution-logo {
      width: 100px;
      margin-bottom: 1.5rem;
    }
    .education-card h3 {
      font-size: 2rem;
      margin-top: 0;
    }
    .institution {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .duration, .cgpa, .location {
      font-size: 1.1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  private dataService = inject(PortfolioDataService);
  public education = this.dataService.education;
}
