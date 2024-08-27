import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioInformazioneComponent } from './dettaglio-informazione.component';

describe('DettaglioInformazioneComponent', () => {
  let component: DettaglioInformazioneComponent;
  let fixture: ComponentFixture<DettaglioInformazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioInformazioneComponent]
    });
    fixture = TestBed.createComponent(DettaglioInformazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
