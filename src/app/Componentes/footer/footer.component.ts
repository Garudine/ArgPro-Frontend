import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RedesFooter } from 'src/app/model/redes-footer';
import { SerRedesFooterService } from 'src/app/servicios/ser-redes-footer.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //VAR REDES
  redes: RedesFooter[] = [];
  textoAltRed: string = '';
  iconoRed: string = '';
  urlRed: string = '';

  //VAR GUARDAR REDES
  @Input() redesList: RedesFooter[] = [];
  formred: FormGroup;
  modoEdicion: boolean = false;

  // VAR MODAL //
  closeResult!: string;

  constructor(
    private redService: SerRedesFooterService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.formred = this.formBuilder.group({
      id: [0, [Validators.required]],
      textoAltRed: ['', [Validators.required]],
      iconoRed: ['', [Validators.required]],
      urlRed: ['', [Validators.required]],
    });
  }

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarRedes();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  //CARGAR LA DATA DEL BACKEND
  cargarRedes(): void {
    this.redService.lista().subscribe({
      next: (data) => {
        this.redes = data;
      },
    });
  }

  /// BORRAR DATA

  onEliminar(idRedesFooter: number): void {
    this.redService.delete(idRedesFooter).subscribe((data) => {
      this.redesList = this.redesList.filter((red) => red.id !== idRedesFooter);
      alert('Red borrada exitosamente');
      window.location.reload();
    });
  }

  // PARA CREAR NUEVA HABILIDAD
  onCreate(): void {
    const red = new RedesFooter(this.iconoRed, this.urlRed, this.textoAltRed);
    this.redService.save(red).subscribe({
      next: (data) => {
        alert('Red añadida');
        window.location.reload();
      },
      error: (err) => {
        alert('Falló');
        window.location.reload();
      },
    });
  }

  // EDITAR HABILIDAD

  onEditar(redesFooter: RedesFooter): void {
    this.formred.patchValue(redesFooter);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarRedesFooter();
      alert('Red guardada exitosamente');
      window.location.reload();
    } else {
      this.guardarRedesFooter();
      alert('Red guardada exitosamente');
      window.location.reload();
    }
  }

  private editarRedesFooter(): void {
    let redesForm: RedesFooter = this.formred.value;
    let idRedesFooter: number = redesForm.id;
    this.redService
      .guardarRedesFooter(redesForm, idRedesFooter)
      .subscribe((data) => {
        this.redesList = this.redesList.map((red) =>
          red.id !== idRedesFooter ? red : data
        );
      });
  }

  private guardarRedesFooter(): void {
    let nuevaRed: RedesFooter = this.formred.value;
    this.redService.nuevasRedesFooter(nuevaRed).subscribe({
      next: (data) => {
        this.redesList.push(data);
      },
    });
  }

  // BASE DEL MODAL
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

  // PARA CERRAR EL MODAL
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
