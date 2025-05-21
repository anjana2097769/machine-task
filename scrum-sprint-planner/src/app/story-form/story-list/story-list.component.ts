import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-list',
  imports: [CommonModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent {
  StoryList: any = []
  constructor(private sharedService: SharedService) {
    this.sharedService.storyListSubject.subscribe((story) => {
      this.StoryList = story
    })
  }

}


