import { TestBed } from '@angular/core/testing';

import { EsperienzeService } from './esperienze.service';

describe('EsperienzeService', () => {
  let service: EsperienzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsperienzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
