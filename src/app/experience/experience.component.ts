import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  template: `<section id="experience">
    <h2 class="section-title">Work Experience</h2>
    <div class="timeline">
      @for(job of experience(); track job.company) {
        <div class="timeline-item" (click)="selectJob(job)">
          <div class="timeline-content">
            <div class="job-header">
              <h3>{{ job.role }}</h3>
              <span class="dropdown-icon">{{ selectedJob() === job ? '▲' : '▼' }}</span>
            </div>
            <div class="company-info">
              <img [src]="job.company === 'Renergy Technologies' ? 'https://i.postimg.cc/zBTPdk7p/renergylogo.jpg' : 'https://logo.clearbit.com/' + job.domain" alt="{{ job.company }} logo" class="company-logo">
              <p class="company">{{ job.company }} - {{ job.location }}</p>
            </div>
            <p class="date">{{ job.date }}</p>
            @if (selectedJob() === job) {
              <ul>
                @for(item of job.details; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            }
          </div>
        </div>
      }
    </div>
</section>
`,
  styles: `
    #experience {
      padding: 6rem 2rem;
      background-color: #f9f9f9;
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
      color: #333;
      font-weight: 700;
    }
    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
    }
    .timeline::after {
      content: '';
      position: absolute;
      width: 4px;
      background-color: #007bff;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
    }
    .timeline-item {
      padding: 2rem 0;
      position: relative;
      width: 50%;
      cursor: pointer;
    }
    .timeline-item:nth-child(odd) {
      left: 0;
      padding-right: 2rem;
    }
    .timeline-item:nth-child(even) {
      left: 50%;
      padding-left: 2rem;
    }
    .timeline-content {
      padding: 1.5rem;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      position: relative;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .timeline-content h3 {
      font-size: 1.8rem;
      margin-top: 0;
      color: #007bff;
    }
    .company-info {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .company-logo {
      width: 40px;
      height: 40px;
      margin-right: 1rem;
      border-radius: 5px;
    }
    .company {
      font-size: 1.2rem;
      font-weight: 600;
    }
    .date {
      color: #555;
      margin-bottom: 1rem;
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
      color: #007bff;
    }
    .dropdown-icon {
      font-size: 1.5rem;
      color: #007bff;
    }
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  private portfolioDataService = inject(PortfolioDataService);
  experience = this.portfolioDataService.experience;
  selectedJob = signal<any>(null);

  selectJob(job: any) {
    this.selectedJob.set(this.selectedJob() === job ? null : job);
  }
}
