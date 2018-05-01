import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';
import {Course} from "../entity/course";

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;
  let course: Course;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [CreateCourseComponent,
      Course]
    })
    component = TestBed.get(CreateCourseComponent);
  });

  it('should show Create success message when course is added',()=>{
    component.createCourse(course);
    expect(component.isComplete).toBeTruthy();
  })
});
