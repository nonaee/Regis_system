import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {Course} from '../entity/course';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CourseDataMockService {

 courses:Course[] = [{
   "id" : 1,
   "courseName": "Testing",
   "courseID":"953333",
   "courseCredits":3,
   "teacher":"Aj.a",
   "seat":50,
   "grade":"A",
   "times":"12.30-15.00"
 },{
   "id" : 2,
   "courseName": "Testing",
   "courseID":"953333",
   "courseCredits":3,
   "teacher":"Aj.a",
   "seat":50,
   "grade":"A",
   "times":"12.30-15.00"
 },{
   "id" : 3,
   "courseName": "Testing",
   "courseID":"953333",
   "courseCredits":3,
   "teacher":"Aj.a",
   "seat":50,
   "grade":"A",
   "times":"12.30-15.00"
 }
 ];

  constructor(private http: Http) { }

  getCoursesData(){
    return new Observable<Course[]
      >((subscriber:Subscriber<Course[]>)=>subscriber.next(this.courses));
  }

  createCourse(course:Course){
    course.id = this.courses.length+1;
    this.courses.push(course);
  }




}

