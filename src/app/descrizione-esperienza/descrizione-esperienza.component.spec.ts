import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneEsperienzaComponent } from './descrizione-esperienza.component';

describe('DescrizioneEsperienzaComponent', () => {
  let component: DescrizioneEsperienzaComponent;
  let fixture: ComponentFixture<DescrizioneEsperienzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescrizioneEsperienzaComponent]
    });
    fixture = TestBed.createComponent(DescrizioneEsperienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
