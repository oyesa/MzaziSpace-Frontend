import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefathersComponent } from './singlefathers.component';

describe('SinglefathersComponent', () => {
  let component: SinglefathersComponent;
  let fixture: ComponentFixture<SinglefathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefathersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglefathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
