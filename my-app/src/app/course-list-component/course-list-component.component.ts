import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CourseDataMockService} from "../service/course-data-mock.service";
import {Course} from "../entity/course";

@Component({
  selector: 'app-course-list-component',
  templateUrl: './course-list-component.component.html',
  styleUrls: ['./course-list-component.component.css']
})
export class CourseListComponentComponent implements OnInit {

  courses : Course[];

  constructor(private courseDataMockService:CourseDataMockService,private router:Router) { }

  ngOnInit() {

    this.courseDataMockService.getCoursesData()
      .subscribe(courses => this.courses = courses);
  }

}
