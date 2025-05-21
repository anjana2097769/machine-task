import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { StoryListComponent } from './story-form/story-list/story-list.component';

@Component({
  selector: 'app-root',
  imports: [StoryFormComponent, SprintCalculatorComponent, StoryListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scrum-sprint-planner';
}
