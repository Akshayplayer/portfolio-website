import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skill-category">
        <h3>Languages</h3>
        <div class="skill-tags">
          @for(skill of skills().languages.split(' | '); track skill) {
            <span class="skill-tag">{{ skill }}</span>
          }
        </div>
      </div>
      <div class="skill-category">
        <h3>Development</h3>
        <div class="skill-tags">
          @for(skill of skills().development.split(' | '); track skill) {
            <span class="skill-tag">{{ skill }}</span>
          }
        </div>
      </div>
      <div class="skill-category">
        <h3>Data Science & ML</h3>
        <div class="skill-tags">
          @for(skill of skills().data.split(' | '); track skill) {
            <span class="skill-tag">{{ skill }}</span>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 6rem 2rem;
      background-color: #f9f9f9;
      text-align: center;
    }
    .section-title {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    .skill-category {
      margin-bottom: 3rem;
    }
    .skill-category h3 {
      font-size: 1.8rem;
      color: #007bff;
      margin-bottom: 1rem;
    }
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    .skill-tag {
      background-color: #007bff;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 1.1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  private dataService = inject(PortfolioDataService);
  public skills = this.dataService.skills;
}
