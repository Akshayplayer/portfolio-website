import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-education',
  template: `
    <section class="education">
      <h2 class="section-title">Education</h2>
      <div class="education-card">
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
      background-color: #fff;
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
      color: #333;
    }
    .education-card {
      max-width: 800px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .education-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    .education-card h3 {
      font-size: 2rem;
      margin-top: 0;
      color: #007bff;
    }
    .institution {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .duration, .cgpa, .location {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  private dataService = inject(PortfolioDataService);
  public education = this.dataService.education;
}
