import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auto-selcted-sprint',
  imports: [CommonModule],
  templateUrl: './auto-selcted-sprint.component.html',
  styleUrl: './auto-selcted-sprint.component.css'
})
export class AutoSelctedSprintComponent {

  @Input() selectedStory: any;
  @Input() sprintName:string | undefined;
ngOnInit(){
  console.log(this.selectedStory)
  
}
}
