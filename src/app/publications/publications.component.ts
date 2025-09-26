import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-publications',
  template: `
    <section class="publications" id="publications">
      <h2 class="section-title">Publications</h2>
      <div class="publication-list">
        @for(publication of publications(); track publication.title) {
          <div class="publication-card" (click)="selectPublication(publication)">
            <div class="publication-header">
              <h3>{{ publication.title }}</h3>
              <span class="dropdown-icon">{{ selectedPublication() === publication ? '▲' : '▼' }}</span>
            </div>
            @if(selectedPublication() === publication) {
              <p class="event"><i>{{ publication.event }}</i></p>
              <p class="authors">{{ publication.authors }}</p>
              <p class="notes">{{ publication.notes }}</p>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .publications {
      padding: 6rem 2rem;
      background-color: var(--background-color);
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
      color: var(--text-color);
    }
    .publication-list {
      max-width: 900px;
      margin: 0 auto;
    }
    .publication-card {
      background-color: var(--card-background-color);
      border-left: 5px solid var(--primary-color);
      padding: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
    }
    .publication-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .publication-card h3 {
      font-size: 1.6rem;
      margin-top: 0;
      color: var(--text-color);
    }
    .event {
      font-style: italic;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    .authors {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    .notes {
      font-size: 0.9rem;
      color: var(--text-secondary-color);
    }
    .dropdown-icon {
      font-size: 1.5rem;
      color: var(--primary-color);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationsComponent {
  private dataService = inject(PortfolioDataService);
  public publications = this.dataService.publications;

  public selectedPublication = signal<any>(null);

  selectPublication(publication: any) {
    this.selectedPublication.set(this.selectedPublication() === publication ? null : publication);
  }
}
