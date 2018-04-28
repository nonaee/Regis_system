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
   "times":"12.30-15.00"
 },{
   "id" : 1,
   "courseName": "Testing",
   "courseID":"953333",
   "courseCredits":3,
   "teacher":"Aj.a",
   "seat":50,
   "times":"12.30-15.00"
 },{
   "id" : 1,
   "courseName": "Testing",
   "courseID":"953333",
   "courseCredits":3,
   "teacher":"Aj.a",
   "seat":50,
   "times":"12.30-15.00"
 }
 ];

  constructor(private http: Http) { }

  getCoursesData(){
    return Observable.create((subscriber:Subscriber<Course[]>)=>subscriber.next(this.courses));
  }



}

