import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../entity/student';
import {StudentDataMockService} from '../service/student-data-mock.service';
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  student: Student;

  constructor(private studentDataMockService: StudentDataMockService) {
  }

  ngOnInit() {
    this.studentDataMockService.getStudentsData()
      .subscribe(student => this.student = student);
  }

  calGPA() {

  }

  calTotalCredit() {
    for (let course of this.student.enrolledCourse) {
      var num;
      num = 3 + course.courseCredits;
    }

    return num;

  }

  calTotalPrice() {


  }

}
