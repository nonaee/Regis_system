import { TestBed, inject } from '@angular/core/testing';

import { StudentDataMockService } from './student-data-mock.service';

describe('StudentDataMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDataMockService]
    });
  });

  it('should be created', inject([StudentDataMockService], (service: StudentDataMockService) => {
    expect(service).toBeTruthy();
  }));
});
