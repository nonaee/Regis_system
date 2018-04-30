import { TestBed, inject } from '@angular/core/testing';

import { CourseDataMockService } from './course-data-mock.service';

describe('CourseDataMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDataMockService]
    });
  });

  it('should be created', inject([CourseDataMockService], (service: CourseDataMockService) => {
    expect(service).toBeTruthy();
  }));
});
