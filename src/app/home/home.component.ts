import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { PublicationsComponent } from '../publications/publications.component';
import { CompetitionsComponent } from '../competitions/competitions.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    AboutComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    ContactComponent,
    SkillsComponent,
    PublicationsComponent,
    CompetitionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
