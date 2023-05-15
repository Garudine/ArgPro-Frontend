import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from '../../servicios/portfolio.service';
import { datosBasicos } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-primera-seccion-welcome',
  templateUrl: './primera-seccion-welcome.component.html',
  styleUrls: ['./primera-seccion-welcome.component.css'],
})
export class PrimeraSeccionWelcomeComponent implements OnInit {
  closeResult!: string;
  datosBasicos: datosBasicos = new datosBasicos('', '', '', '', '');

  constructor(
    private modalService: NgbModal,
    public portfolioService: PortfolioService,
    private tokenService: TokenService
  ) {}

  estaLogeado = false;

  ngOnInit(): void {
    this.portfolioService.getPersona().subscribe((data) => {
      this.datosBasicos = data;
    });
    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  editModal(content: any) {
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
