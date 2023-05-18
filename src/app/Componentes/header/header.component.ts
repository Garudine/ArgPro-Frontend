import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from '../../servicios/portfolio.service';
import { datosBasicos } from 'src/app/model/persona.model';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // VAR DATOS
  datos: datosBasicos = null;
  fragment: any = '';

  closeResult!: string;
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
    public datosService: PortfolioService,
    private tokenService: TokenService,
    private authService: AuthService,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute
  ) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
    this.cargarDatos();
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });

    if (this.tokenService.getToken()) {
      this.EstaLoggeado = true;
      this.LoggeoFallido = false;
      this.roles = this.tokenService.getAuthorities();
    } else {
      this.EstaLoggeado = false;
    }
  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) {}
  }

  ///LOGIN, NO TOCAR

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

  ///CARGAR LA DATA DEL BACKEND
  cargarDatos(): void {
    this.datosService.detail(1).subscribe({
      next: (data) => {
        this.datos = data;
      },
    });
  }

  /// MODAL

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
