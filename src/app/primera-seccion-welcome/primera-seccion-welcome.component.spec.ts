import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraSeccionWelcomeComponent } from './primera-seccion-welcome.component';

describe('PrimeraSeccionWelcomeComponent', () => {
  let component: PrimeraSeccionWelcomeComponent;
  let fixture: ComponentFixture<PrimeraSeccionWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraSeccionWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraSeccionWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
