import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainStatusComponent } from './complain-status.component';

describe('ComplainStatusComponent', () => {
  let component: ComplainStatusComponent;
  let fixture: ComponentFixture<ComplainStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
