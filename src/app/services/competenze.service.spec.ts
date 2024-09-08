import { TestBed } from '@angular/core/testing';

import { CompetenzeService } from './competenze.service';

describe('CompetenzeService', () => {
  let service: CompetenzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
