import { TestBed } from '@angular/core/testing';

import { ComplaintReportService } from './complaint-report.service';

describe('ComplaintReportService', () => {
  let service: ComplaintReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
