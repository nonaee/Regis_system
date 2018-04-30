import { Injectable } from '@angular/core';
import {Student} from '../entity/student';
import {Course} from '../entity/course';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class StudentDataMockService {

  student : Student = {
    "id": 1,
    "studentId": "582115042",
    "fullname": "Dino Nomo",
    "image": "https://2.bp.blogspot.com/-uqQSWDCBi3k/VygiUXbem6I/AAAAAAAAMZY/WejGhMJc2jIS_RGjJnsG6CRqw_tJVAfvwCKgB/s1600/main-271-235x235.png",
    "username":"001",
    "password":"001",
    "enrolledCourse":[{
      "id" : 1,
      "courseName": "Testing",
      "courseID":"953333",
      "courseCredits":3,
      "teacher":"Aj.a",
      "seat":50,
      "grade":"A",
      "times":"12.30-15.00"
    },{"id" : 2,
      "courseName": "Testing",
      "courseID":"953333",
      "courseCredits":3,
      "teacher":"Aj.a",
      "seat":50,
      "grade":"A",
      "times":"12.30-15.00"
    }]
  };
  constructor() { }
  getStudentsData(){
    return new Observable<Student
      >((subscriber:Subscriber<Student>)=>subscriber.next(this.student));
  }
}
