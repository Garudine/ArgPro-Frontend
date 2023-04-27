import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartaSeccionContactoComponent } from './cuarta-seccion-contacto.component';

describe('CuartaSeccionContactoComponent', () => {
  let component: CuartaSeccionContactoComponent;
  let fixture: ComponentFixture<CuartaSeccionContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartaSeccionContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartaSeccionContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
