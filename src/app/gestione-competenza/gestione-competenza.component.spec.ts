import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneCompetenzaComponent } from './gestione-competenza.component';

describe('GestioneCompetenzaComponent', () => {
  let component: GestioneCompetenzaComponent;
  let fixture: ComponentFixture<GestioneCompetenzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestioneCompetenzaComponent]
    });
    fixture = TestBed.createComponent(GestioneCompetenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
