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
              <div class="publication-details">
                <p class="event"><i class="primary-accent">{{ publication.event }}</i></p>
                <p class="authors">{{ publication.authors }}</p>
                <p class="notes">{{ publication.notes }}</p>
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .publications {
      padding: 3rem 2rem;
    }
    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    .publication-list {
      max-width: 900px;
      margin: 0 auto;
    }
    .publication-card {
      background-color: var(--element-background);
      border-radius: 10px;
      padding: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .publication-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0,0,0,0.15);
    }

    .publication-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .publication-card h3 {
      font-size: 1.6rem;
      margin: 0;
    }
    .publication-details {
      margin-top: 1.5rem;
    }
    .event {
      font-style: italic;
      margin-bottom: 0.5rem;
    }
    .authors {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .notes {
      opacity: 0.7;
    }
    .dropdown-icon {
      font-size: 1.5rem;
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
