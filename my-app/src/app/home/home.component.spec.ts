import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Course} from "../entity/course";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        HomeComponent,
        Course
      ]
    })
  })
});
