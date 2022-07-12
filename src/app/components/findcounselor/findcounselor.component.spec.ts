import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcounselorComponent } from './findcounselor.component';

describe('FindcounselorComponent', () => {
  let component: FindcounselorComponent;
  let fixture: ComponentFixture<FindcounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindcounselorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
