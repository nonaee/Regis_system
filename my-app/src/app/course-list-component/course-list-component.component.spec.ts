import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponentComponent } from './course-list-component.component';
import {Course} from "../entity/course";
import * as assert from "assert";

describe('CourseListComponentComponent', () => {
  let component: CourseListComponentComponent;
  let fixture: ComponentFixture<CourseListComponentComponent>;
  let course: Course;
  let courseId: string;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        CourseListComponentComponent,
        Course
      ]
    });

    component = TestBed.get(CourseListComponentComponent);
    course = TestBed.get(Course);
  });


});
