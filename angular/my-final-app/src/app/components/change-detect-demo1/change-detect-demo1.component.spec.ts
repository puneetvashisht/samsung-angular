import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectDemo1Component } from './change-detect-demo1.component';

describe('ChangeDetectDemo1Component', () => {
  let component: ChangeDetectDemo1Component;
  let fixture: ComponentFixture<ChangeDetectDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetectDemo1Component]
    });
    fixture = TestBed.createComponent(ChangeDetectDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
