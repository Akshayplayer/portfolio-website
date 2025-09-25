import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './services/theme.service';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PublicationsComponent } from './publications/publications.component';
import { CompetitionsComponent } from './competitions/competitions.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    PublicationsComponent,
    CompetitionsComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-publications />
      <app-competitions />
    </main>
    <app-footer />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.dark]': 'themeService.isDarkMode()'
  }
})
export class AppComponent {
  title = 'portfolio-website';
  themeService = inject(ThemeService);
}
