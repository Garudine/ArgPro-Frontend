import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaSeccionHabilidadesComponent } from './segunda-seccion-habilidades.component';

describe('SegundaSeccionHabilidadesComponent', () => {
  let component: SegundaSeccionHabilidadesComponent;
  let fixture: ComponentFixture<SegundaSeccionHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaSeccionHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaSeccionHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
