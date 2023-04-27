import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-tercera-seccion-proyectos',
  templateUrl: './tercera-seccion-proyectos.component.html',
  styleUrls: ['./tercera-seccion-proyectos.component.css'],
})
export class TerceraSeccionProyectosComponent implements OnInit {
  proyectosList: any;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.proyectosList = data.proyectos;
    });
  }
}
