import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventsinfo1Component } from './eventsinfo1.component';

describe('Eventsinfo1Component', () => {
  let component: Eventsinfo1Component;
  let fixture: ComponentFixture<Eventsinfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventsinfo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventsinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
