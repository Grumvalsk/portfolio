import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRiservataInformazioniComponent } from './area-riservata-informazioni.component';

describe('AreaRiservataInformazioniComponent', () => {
  let component: AreaRiservataInformazioniComponent;
  let fixture: ComponentFixture<AreaRiservataInformazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaRiservataInformazioniComponent]
    });
    fixture = TestBed.createComponent(AreaRiservataInformazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
