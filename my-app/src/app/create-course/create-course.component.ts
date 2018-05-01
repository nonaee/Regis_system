import { Component, OnInit } from '@angular/core';
import {Course} from '../entity/course';
import {CourseDataMockService} from '../service/course-data-mock.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  course: any = {};
  isComplete: boolean;

  constructor(private courseDataMockService: CourseDataMockService, private router: Router) {
  }

  ngOnInit() {
    this.course = new Course();
    this.createCourse(this.course);
  }

  createCourse(course: Course) {
    this.isComplete = true;
    console.log(course);
    this.courseDataMockService.createCourse(course);
    alert("Create complete");
    this.router.navigate(['/enroll_course']);
  }
}
