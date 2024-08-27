import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRiservataEsperienzeComponent } from './area-riservata-esperienze.component';

describe('AreaRiservataEsperienzeComponent', () => {
  let component: AreaRiservataEsperienzeComponent;
  let fixture: ComponentFixture<AreaRiservataEsperienzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaRiservataEsperienzeComponent]
    });
    fixture = TestBed.createComponent(AreaRiservataEsperienzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
