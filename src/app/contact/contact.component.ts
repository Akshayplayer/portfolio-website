import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact">
      <h2 class="section-title">Get in Touch</h2>
      <div class="contact-details">
        <p><strong>Email:</strong> <a [href]="'mailto:' + contact().email">{{ contact().email }}</a></p>
        <p><strong>Phone:</strong> {{ contact().phone }}</p>
        <div class="social-links">
          <a [href]="contact().linkedin" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain"></i></a>
          <a [href]="contact().github" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i></a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      text-align: center;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    .section-title {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    .contact-details p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .contact-details a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s;
    }
    .contact-details a:hover {
      color: var(--primary-color);
    }
    .social-links {
      margin-top: 2rem;
    }
    .social-links a {
      margin: 0 1rem;
      font-size: 2.5rem;
      color: var(--text-color);
      transition: color 0.3s;
    }
    .social-links a:hover {
      color: var(--primary-color);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private dataService = inject(PortfolioDataService);
  public contact = this.dataService.contact;
}
