import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRiservataComponent } from './area-riservata.component';

describe('AreaRiservataComponent', () => {
  let component: AreaRiservataComponent;
  let fixture: ComponentFixture<AreaRiservataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaRiservataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaRiservataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
