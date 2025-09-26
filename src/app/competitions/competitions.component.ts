import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-competitions',
  template: `
    <section class="competitions" id="competitions">
      <h2 class="section-title">Competitive Achievements</h2>
      <div class="competition-list">
        @for(competition of competitions(); track competition.name) {
          <div class="competition-card" (click)="selectCompetition(competition)">
            <div class="competition-header">
              <img src="https://i.postimg.cc/B6cyNgQs/Smart-India-Hackathon-2023.jpg" class="competition-logo">
              <h3>{{ competition.name }}</h3>
              <span class="dropdown-icon">{{ selectedCompetition() === competition ? '▲' : '▼' }}</span>
            </div>
            @if(selectedCompetition() === competition) {
              <p class="track"><strong>{{ competition.track }}</strong> - <i>{{ competition.award }}</i></p>
              <p class="date">{{ competition.date }}</p>
              @if(competition.description) {
                <p class="description">{{ competition.description }}</p>
              }
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .competitions {
      padding: 6rem 2rem;
      background-color: var(--section-background);
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
      color: var(--text-color);
      font-weight: 700;
    }
    .competition-list {
      max-width: 900px;
      margin: 0 auto;
    }
    .competition-card {
      background-color: var(--element-background);
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin-bottom: 2rem;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    body.dark-mode .competition-card {
      box-shadow: 0 4px 15px rgba(57, 255, 20, 0.1);
    }
    .competition-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    body.dark-mode .competition-card:hover {
      box-shadow: 0 8px 25px rgba(57, 255, 20, 0.2);
    }
    .competition-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .competition-logo {
      width: 50px;
      margin-right: 1rem;
    }
    .competition-card h3 {
      font-size: 1.8rem;
      margin-top: 0;
      color: var(--primary-color);
    }
    .track {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    .date {
      color: var(--text-secondary-color);
      margin-bottom: 1rem;
      font-style: italic;
    }
    .description {
      line-height: 1.6;
      color: var(--text-color);
    }
    .dropdown-icon {
      font-size: 1.5rem;
      color: var(--primary-color);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionsComponent {
  private dataService = inject(PortfolioDataService);
  public competitions = this.dataService.competitions;
  public selectedCompetition = signal<any>(null);

  selectCompetition(competition: any) {
    this.selectedCompetition.set(this.selectedCompetition() === competition ? null : competition);
  }
}
