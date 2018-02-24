import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

import { GradingComponent } from './grading/grading.component';

import { CourseListComponentComponent } from './course-list-component/course-list-component.component';

import { GradingListStudentComponent } from './grading-list-student/grading-list-student.component';

import {CreateCourseComponent} from './create-course/create-course.component';




const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'grading', component: GradingComponent},
  {path: 'courseList', component: CourseListComponentComponent},

  {path: 'grading', component: GradingComponent},
  {path: 'grading-list-student',component:GradingListStudentComponent},


  {path: 'create_course', component: CreateCourseComponent},

  {path: 'grading', component: GradingComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GradingComponent,
    CourseListComponentComponent,
    GradingListStudentComponent,
    CreateCourseComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
