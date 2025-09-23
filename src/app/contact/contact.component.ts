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
          <a [href]="contact().linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a [href]="contact().github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a [href]="contact().leetcode" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a [href]="contact().codeforces" target="_blank" rel="noopener noreferrer">CodeForces</a>
          <a [href]="contact().codechef" target="_blank" rel="noopener noreferrer">CodeChef</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      text-align: center;
      background-color: #f4f4f4;
    }
    .section-title {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #333;
    }
    .contact-details p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .contact-details a {
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s;
    }
    .contact-details a:hover {
      color: #0056b3;
    }
    .social-links {
      margin-top: 2rem;
    }
    .social-links a {
      margin: 0 1rem;
      font-size: 1.2rem;
      color: #333;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.3s;
    }
    .social-links a:hover {
      border-bottom: 2px solid #007bff;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private dataService = inject(PortfolioDataService);
  public contact = this.dataService.contact;
}
