import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Perfil } from 'src/app/model/perfil';
import { SerPerfilService } from 'src/app/servicios/ser-perfil.service';

@Component({
  selector: 'app-primera-seccion-welcome',
  templateUrl: './primera-seccion-welcome.component.html',
  styleUrls: ['./primera-seccion-welcome.component.css'],
})
export class PrimeraSeccionWelcomeComponent implements OnInit {
  // VAR DATOS
  perfil: Perfil = null;

  constructor(
    public perfilSer: SerPerfilService,
    private tokenService: TokenService
  ) {}

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarPerfil();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  ///CARGAR LA DATA DEL BACKEND
  cargarPerfil(): void {
    this.perfilSer.detail(1).subscribe({
      next: (data) => {
        this.perfil = data;
      },
    });
  }
}
