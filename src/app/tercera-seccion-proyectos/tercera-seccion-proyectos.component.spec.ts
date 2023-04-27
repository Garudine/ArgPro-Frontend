import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraSeccionProyectosComponent } from './tercera-seccion-proyectos.component';

describe('TerceraSeccionProyectosComponent', () => {
  let component: TerceraSeccionProyectosComponent;
  let fixture: ComponentFixture<TerceraSeccionProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceraSeccionProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceraSeccionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
