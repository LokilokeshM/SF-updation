import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintReportComponent } from './add-complaint-report.component';

describe('AddComplaintReportComponent', () => {
  let component: AddComplaintReportComponent;
  let fixture: ComponentFixture<AddComplaintReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplaintReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
