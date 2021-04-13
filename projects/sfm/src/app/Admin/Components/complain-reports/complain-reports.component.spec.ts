import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainReportsComponent } from './complain-reports.component';

describe('ComplainReportsComponent', () => {
  let component: ComplainReportsComponent;
  let fixture: ComponentFixture<ComplainReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
