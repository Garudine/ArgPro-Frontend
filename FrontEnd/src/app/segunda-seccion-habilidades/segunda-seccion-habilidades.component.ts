import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-segunda-seccion-habilidades',
  templateUrl: './segunda-seccion-habilidades.component.html',
  styleUrls: ['./segunda-seccion-habilidades.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SegundaSeccionHabilidadesComponent implements OnInit {
  educacionList: any;
  laboralList: any;
  habilidadList: any;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.educacionList = data.educacion;
      this.laboralList = data.laboral;
      this.habilidadList = data.habilidades;
    });
  }
}
