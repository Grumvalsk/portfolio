import { TestBed } from '@angular/core/testing';

import { InformazioniService } from './informazioni.service';

describe('InformazioniService', () => {
  let service: InformazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
