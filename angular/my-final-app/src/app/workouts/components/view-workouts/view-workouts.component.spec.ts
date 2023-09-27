import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutsComponent } from './view-workouts.component';

describe('ViewWorkoutsComponent', () => {
  let component: ViewWorkoutsComponent;
  let fixture: ComponentFixture<ViewWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWorkoutsComponent]
    });
    fixture = TestBed.createComponent(ViewWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
