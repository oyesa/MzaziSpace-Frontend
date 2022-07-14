import { TestBed } from '@angular/core/testing';

import { CommmunityService } from './commmunity.service';

describe('CommmunityService', () => {
  let service: CommmunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommmunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
