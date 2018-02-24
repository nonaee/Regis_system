import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponentComponent } from './course-list-component.component';

describe('CourseListComponentComponent', () => {
  let component: CourseListComponentComponent;
  let fixture: ComponentFixture<CourseListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
