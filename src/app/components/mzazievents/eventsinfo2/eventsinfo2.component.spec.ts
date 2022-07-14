import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventsinfo2Component } from './eventsinfo2.component';

describe('Eventsinfo2Component', () => {
  let component: Eventsinfo2Component;
  let fixture: ComponentFixture<Eventsinfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventsinfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventsinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
