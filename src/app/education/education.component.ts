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
        <p class="institution">{{ education().institution }}</p>
        <p class="duration">{{ education().duration }}</p>
        <p class="cgpa">CGPA: {{ education().cgpa }}</p>
        <p class="location">{{ education().location }}</p>
      </div>
    </section>
  `,
  styles: [`
    .education {
      padding: 6rem 2rem;
      background-color: var(--section-background);
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
      color: var(--text-color);
    }
    .education-card {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--element-background);
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    body.dark-mode .education-card {
      box-shadow: 0 4px 15px rgba(57, 255, 20, 0.1);
    }
    .education-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    body.dark-mode .education-card:hover {
      box-shadow: 0 8px 25px rgba(57, 255, 20, 0.2);
    }
    .institution-logo {
      width: 100px;
      margin-bottom: 1.5rem;
    }
    .education-card h3 {
      font-size: 2rem;
      margin-top: 0;
      color: var(--primary-color);
    }
    .institution {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    .duration, .cgpa, .location {
      font-size: 1.1rem;
      color: var(--text-color);
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
