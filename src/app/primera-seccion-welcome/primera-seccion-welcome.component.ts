import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-primera-seccion-welcome',
  templateUrl: './primera-seccion-welcome.component.html',
  styleUrls: ['./primera-seccion-welcome.component.css'],
})
export class PrimeraSeccionWelcomeComponent implements OnInit {
  closeResult!: string;
  datosPrimeraSeccion: any;

  constructor(
    private modalService: NgbModal,
    private datosPortfolio: PortfolioService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datosPrimeraSeccion = data;
    });
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
