import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
interface StoryList {
  storyName: string,
  storyPoint: any,
  storyDesc: string
}
@Component({
  selector: 'app-story-form',
  imports: [],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.css',
  standalone: true
})

export class StoryFormComponent {
  constructor(private sharedService: SharedService) {
    this.sharedService.storyListSubject.subscribe((story) => {
      this.storyList = story;
    })
  }
  storyList: StoryList[] = []
  saveStory(val1: string, val2: any, val3: string) {
    const isAvailable = this.storyList.some(story =>
      story.storyName.toLowerCase().trim() === val1.toLowerCase().trim()
    )

    if (isAvailable) alert("Storyname already exists")
    else {
      this.storyList.push({ storyName: val1, storyPoint: +val2, storyDesc: val3 })
      this.sharedService.addNewStory(this.storyList);
    }

  }
}


