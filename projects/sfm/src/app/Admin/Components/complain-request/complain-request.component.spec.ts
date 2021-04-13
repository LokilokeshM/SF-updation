import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainRequestComponent } from './complain-request.component';

describe('ComplainRequestComponent', () => {
  let component: ComplainRequestComponent;
  let fixture: ComponentFixture<ComplainRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
