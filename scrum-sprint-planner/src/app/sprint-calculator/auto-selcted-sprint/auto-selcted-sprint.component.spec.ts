import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSelctedSprintComponent } from './auto-selcted-sprint.component';

describe('AutoSelctedSprintComponent', () => {
  let component: AutoSelctedSprintComponent;
  let fixture: ComponentFixture<AutoSelctedSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSelctedSprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSelctedSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
