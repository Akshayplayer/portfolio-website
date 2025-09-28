import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `<footer>
  <p>&copy; 2024 Akshay Ku Bothra. All rights reserved.</p>
  <div class="social-links">
    <a href="https://www.linkedin.com/in/akshay-ku-bothra-1136861bb/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
    <a href="https://github.com/Akshayplayer" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    <a href="https://leetcode.com/u/user3885IN/" target="_blank"><i class="fas fa-code"></i> LeetCode</a>
  </div>
</footer>
`,
  styles: `footer {
  padding: 2rem;
  text-align: center;
  background-color: var(--element-background);
  color: var(--text-color);
}

.social-links a {
  color: var(--text-color);
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

.social-links i {
  margin-right: 8px;
  font-size: 1.3rem;
}

body.dark-mode footer {
    background-color: var(--section-background-dark);
}

body.dark-mode .social-links a {
    color: var(--diwali-blue);
}

`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
