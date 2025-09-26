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
                <p class="event"><i>{{ publication.event }}</i></p>
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
      padding: 6rem 2rem;
      background-color: var(--section-background);
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
      background-color: var(--element-background);
      border-radius: 10px;
      padding: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border-top: 4px solid var(--primary-color);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    body.dark-mode .publication-card {
      box-shadow: 0 4px 15px rgba(57, 255, 20, 0.1);
    }
    .publication-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    body.dark-mode .publication-card:hover {
      box-shadow: 0 8px 25px rgba(57, 255, 20, 0.2);
    }
    .publication-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .publication-card h3 {
      font-size: 1.6rem;
      margin: 0;
      color: var(--text-color);
    }
    .publication-details {
      margin-top: 1.5rem;
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
      color: var(--text-color);
      opacity: 0.7;
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
