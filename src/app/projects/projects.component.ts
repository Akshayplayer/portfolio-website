import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  template: `<section id="projects">
    <h2 class="section-title">Projects</h2>
    <div class="project-grid">
      @for(project of projects(); track project.name) {
        <div class="project-card" (click)="selectProject(project)">
          <h3>{{ project.name }}</h3>
          <p class="guide">{{ project.guide }}</p>
          <p class="date">{{ project.date }}</p>
          @if (selectedProject() === project) {
            <ul>
              @for(item of project.details; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          }
        </div>
      }
    </div>
</section>
`,
  styles: `
    #projects {
      padding: 6rem 2rem;
      background-color: var(--background-color);
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .project-card {
      background-color: var(--card-background);
      color: var(--text-color);
      border-radius: 10px;
      box-shadow: var(--timeline-item-shadow);
      padding: 2rem;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    body.dark-mode .project-card:hover {
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
    }
    .project-card h3 {
      font-size: 1.8rem;
      margin-top: 0;
      color: var(--primary-color);
    }
    .guide {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .date {
      margin-bottom: 1.5rem;
      font-style: italic;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
      margin-top: 1rem;
    }
    li {
      margin-bottom: 0.8rem;
      line-height: 1.6;
      position: relative;
      padding-left: 20px;
    }
    li::before {
      content: '\u2022';
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private portfolioDataService = inject(PortfolioDataService);
  projects = this.portfolioDataService.projects;
  selectedProject = signal<any>(null);

  selectProject(project: any) {
    this.selectedProject.set(this.selectedProject() === project ? null : project);
  }
}
