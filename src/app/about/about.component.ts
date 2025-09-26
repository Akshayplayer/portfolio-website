import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="about-section">
      <h2 class="section-title">About Me</h2>
      <div class="about-container">
        <img src="https://i.postimg.cc/YS2k8TKx/1000489578.png" alt="Akshay Ku Bothra" class="profile-picture">
        <div class="about-content">
          <p class="about-text">{{ aboutText() }}</p>
          <div class="contact-info">
            <a [href]="'mailto:' + contact().email" class="contact-link">
              <i class="fas fa-envelope"></i>
              <span>{{ contact().email }}</span>
            </a>
            <a [href]="contact().linkedin" target="_blank" class="contact-link">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a [href]="contact().github" target="_blank" class="contact-link">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 3rem 2rem;
      background-color: var(--section-background);
      text-align: center;
    }
    .section-title {
      font-size: 3rem;
      margin-bottom: 4rem;
      color: var(--text-color);
    }
    .about-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      max-width: 1000px;
      margin: 0 auto;
      text-align: left;
    }
    .profile-picture {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid var(--primary-color);
    }
    .about-content {
      max-width: 600px;
    }
    .about-text {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .contact-info {
      display: flex;
      gap: 2rem;
    }
    .contact-link {
      color: var(--primary-color);
      text-decoration: none;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .contact-link:hover {
      text-decoration: underline;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private dataService = inject(PortfolioDataService);
  public aboutText = this.dataService.aboutText;
  public contact = this.dataService.contact;
}
