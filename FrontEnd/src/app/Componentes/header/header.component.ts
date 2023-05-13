import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from '../../servicios/portfolio.service';
import { datosBasicos } from 'src/app/model/persona.model';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  closeResult!: string;
  datosBasicos: datosBasicos = new datosBasicos('', '', '', '', '');
  EstaLoggeado = false;
  LoggeoFallido = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  loggedIn: boolean = false;

  constructor(
    private modalService: NgbModal,
    public portfolioService: PortfolioService,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getPersona().subscribe((data) => {
      this.datosBasicos = data;
    });

    if (this.tokenService.getToken()) {
      this.EstaLoggeado = true;
      this.LoggeoFallido = false;
      this.roles = this.tokenService.getAuthorities();
    } else {
      this.EstaLoggeado = false;
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) => {
        this.EstaLoggeado = true;
        this.LoggeoFallido = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        window.location.reload();
      },
      error: (err) => {
        this.EstaLoggeado = false;
        this.LoggeoFallido = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      },
    });
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  loginModal(content: any) {
    this.modalService
      .open(content, { centered: true, windowClass: 'myCustomModalClass' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
