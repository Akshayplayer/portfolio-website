import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-contact-bar',
  templateUrl: './contact-bar.html',
  styleUrls: ['./contact-bar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBarComponent {
  private portfolioDataService = inject(PortfolioDataService);
  profiles = this.portfolioDataService.profiles;
}
