import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-declarations',
  template: `
    <div class="declarations-container">
      <h2>Declarations</h2>
      <p>I hereby declare that all the information provided in this portfolio is true and accurate to the best of my knowledge.</p>
    </div>
  `,
  styles: [`
    .declarations-container {
      padding: 2rem;
      text-align: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarationsComponent {}
