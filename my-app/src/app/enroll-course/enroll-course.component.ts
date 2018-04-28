import { Component, OnInit } from '@angular/core';
import {CourseDataMockService} from '../service/course-data-mock.service';
import {Course} from '../entity/course';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit {

  courses : Course[];
  constructor(private courseDataMockService:CourseDataMockService) { }

  ngOnInit() {
    this.courseDataMockService.getCoursesData().subscribe(courses => this.courses =courses);
  }

}
