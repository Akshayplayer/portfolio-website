
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatSlideToggleModule],
  template: `
    <mat-slide-toggle
      [checked]="themeService.isDarkMode()"
      (change)="themeService.toggleTheme()"
      [@toggleAnimation]="themeService.isDarkMode() ? 'dark' : 'light'"
    ></mat-slide-toggle>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleAnimation', [
      state('light', style({
        backgroundColor: '#fff'
      })),
      state('dark', style({
        backgroundColor: '#303030'
      })),
      transition('light <=> dark', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class ThemeToggleComponent {
  public themeService = inject(ThemeService);
}
