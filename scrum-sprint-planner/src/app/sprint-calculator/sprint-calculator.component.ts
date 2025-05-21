import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AutoSelctedSprintComponent } from './auto-selcted-sprint/auto-selcted-sprint.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sprint-calculator',
  imports: [AutoSelctedSprintComponent, FormsModule
  ],
  templateUrl: './sprint-calculator.component.html',
  styleUrl: './sprint-calculator.component.css'
})
export class SprintCalculatorComponent {
  storyList: any = [];
  list: any = [];

  sprintName: string = '';
  constructor(private sharedService: SharedService) {
    this.sharedService.storyListSubject.subscribe((story) => {
      console.log(story);
      
      this.list = story
    });
  }
  generateSprint(point: string) {
    this.clearSelectedstories();
    const storyPoint = +point
    this.storyList = this.selectStories(this.list, storyPoint)
    console.log(this.storyList)
  }

  selectStories(list: any, storyPoint: number): any {
    if (storyPoint === 0) return []
    for (const story of list) {
      if (story.storyPoint === storyPoint) return [story];
      const remainingStories = list.filter((st: any) => st !== story);
      const result = this.selectStories(remainingStories, storyPoint - story.storyPoint);
      if (result) return [story, ...result]
    }
    return null;
  }
  clearSelectedstories() {
    this.storyList = [];
  }
  clearStories() {
    this.sharedService.addNewStory([])
  }
}
