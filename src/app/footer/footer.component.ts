import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `<footer>
  <p>&copy; 2024 Akshay Ku Bothra. All rights reserved.</p>
  <div class="social-links">
    <a href="https://www.linkedin.com/in/akshay-kumar-bothra-364175206/" target="_blank">LinkedIn</a>
    <a href="https://github.com/AkshayBothra" target="_blank">GitHub</a>
    <a href="https://leetcode.com/akshaybothra28/" target="_blank">LeetCode</a>
  </div>
</footer>
`,
  styles: `footer {
  padding: 2rem;
  text-align: center;
  background-color: var(--footer-background-color);
  color: var(--footer-text-color);
}

.social-links a {
  color: var(--footer-text-color);
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
