import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public storyListSubject=new Subject<any>();

  addNewStory(story:any){
    this.storyListSubject.next(story);
  }
}
