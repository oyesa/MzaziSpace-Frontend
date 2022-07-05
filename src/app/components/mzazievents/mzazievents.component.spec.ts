import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzazieventsComponent } from './mzazievents.component';

describe('MzazieventsComponent', () => {
  let component: MzazieventsComponent;
  let fixture: ComponentFixture<MzazieventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzazieventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MzazieventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
