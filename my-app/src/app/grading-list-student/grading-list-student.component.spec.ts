import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingListStudentComponent } from './grading-list-student.component';

describe('GradingListStudentComponent', () => {
  let component: GradingListStudentComponent;
  let fixture: ComponentFixture<GradingListStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingListStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
