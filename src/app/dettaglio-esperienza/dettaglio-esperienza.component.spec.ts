import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioEsperienzaComponent } from './dettaglio-esperienza.component';

describe('DettaglioEsperienzaComponent', () => {
  let component: DettaglioEsperienzaComponent;
  let fixture: ComponentFixture<DettaglioEsperienzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioEsperienzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioEsperienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
