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
            <span class="skill-tag">
              <i [class]="getIconClass(skill)"></i>
              {{ skill }}
            </span>
          }
        </div>
      </div>
      <div class="skill-category">
        <h3>Development</h3>
        <div class="skill-tags">
          @for(skill of skills().development.split(' | '); track skill) {
            <span class="skill-tag">
              <i [class]="getIconClass(skill)"></i>
              {{ skill }}
            </span>
          }
        </div>
      </div>
      <div class="skill-category">
        <h3>Data Science & ML</h3>
        <div class="skill-tags">
          @for(skill of skills().data.split(' | '); track skill) {
            <span class="skill-tag">
              <i [class]="getIconClass(skill)"></i>
              {{ skill }}
            </span>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 3rem 2rem;
      background-color: var(--section-background);
      text-align: center;
    }
    .section-title {
      font-size: 3rem;
      margin-bottom: 4rem;
      color: var(--text-color);
    }
    .skill-category {
      margin-bottom: 3rem;
    }
    .skill-category h3 {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }
    .skill-tag {
      display: flex;
      align-items: center;
      background-color: var(--skill-tag-background);
      color: var(--skill-tag-text);
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-size: 1.2rem;
      transition: transform 0.2s;
      border: 1px solid var(--primary-color);
    }
    .skill-tag:hover {
      transform: scale(1.1);
    }
    .skill-tag i {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  private dataService = inject(PortfolioDataService);
  public skills = this.dataService.skills;

  getIconClass(skill: string): string {
    const iconMap: { [key: string]: string } = {
      python: 'devicon-python-plain',
      'c++': 'devicon-cplusplus-plain',
      sql: 'devicon-azuresql-plain',
      'c#': 'devicon-csharp-plain',
      java: 'devicon-java-plain',
      html: 'devicon-html5-plain',
      css: 'devicon-css3-plain',
      javascript: 'devicon-javascript-plain',
      angular: 'devicon-angular-plain',
      'asp.net core': 'devicon-dotnetcore-plain',
      seaborn: 'devicon-seaborn-plain',
      matplotlib: 'devicon-matplotlib-plain',
      numpy: 'devicon-numpy-plain',
      'scikit-learn': 'devicon-scikitlearn-plain',
      excel: 'devicon-msexcel-plain',
      azure: 'devicon-azure-plain',
      git: 'devicon-git-plain',
      github: 'devicon-github-original',
      tensorflow: 'devicon-tensorflow-original',
      keras: 'devicon-keras-plain',
      opencv: 'devicon-opencv-plain',
      nltk: 'devicon-nltk-plain',
      pytorch: 'devicon-pytorch-plain',
      statsmodels: 'devicon-statsmodels-plain',
      docker: 'devicon-docker-plain',
      grafana: 'devicon-grafana-original',
      fastapi: 'devicon-fastapi-plain',
      flask: 'devicon-flask-original',
    };
    return iconMap[skill.toLowerCase()] || 'devicon-devicon-plain';
  }
}
