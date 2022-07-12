import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildservicesComponent } from './childservices.component';

describe('ChildservicesComponent', () => {
  let component: ChildservicesComponent;
  let fixture: ComponentFixture<ChildservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
