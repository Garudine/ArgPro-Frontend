import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Habilidades } from 'src/app/model/habilidades';
import { SerHabilidadesService } from 'src/app/servicios/ser-habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  //VAR HABILIDADES
  habilidades: Habilidades[] = [];
  nombreHab: string = '';
  porcentajeHab: string = '';

  //VAR GUARDAR HABILIDADES
  @Input() habilidadesList: Habilidades[] = [];
  formhabi: FormGroup;
  modoEdicion: boolean = false;

  // VAR MODAL //
  closeResult!: string;

  constructor(
    private habilidadSer: SerHabilidadesService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.formhabi = this.formBuilder.group({
      id: [0, [Validators.required]],
      nombreHab: ['', [Validators.required]],
      porcentajeHab: ['', [Validators.required]],
    });
  }

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarHabilidades();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  //CARGA LA DATA DEL BACKEND
  cargarHabilidades(): void {
    this.habilidadSer.lista().subscribe({
      next: (data) => {
        this.habilidades = data;
      },
    });
  }

  /// BORRAR DATA

  onEliminar(idHabilidades: number): void {
    this.habilidadSer.delete(idHabilidades).subscribe((data) => {
      this.habilidadesList = this.habilidadesList.filter(
        (hab) => hab.id !== idHabilidades
      );
      alert('Habilidad borrada exitosamente');
      window.location.reload();
    });
  }

  // PARA CREAR NUEVA HABILIDAD
  onCreate(): void {
    const hab = new Habilidades(this.nombreHab, this.porcentajeHab);
    this.habilidadSer.save(hab).subscribe({
      next: (data) => {
        alert('Habilidad añadida');
        window.location.reload();
      },
      error: (err) => {
        alert('Falló');
        window.location.reload();
      },
    });
  }

  // EDITAR HABILIDAD

  onEditar(habilidades: Habilidades): void {
    this.formhabi.patchValue(habilidades);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarHabilidades();
      alert('Habilidad guardada exitosamente');
      window.location.reload();
    } else {
      this.guardarHabilidades();
      alert('Habilidad guardada exitosamente');
      window.location.reload();
    }
  }

  private editarHabilidades(): void {
    let habilidadesForm: Habilidades = this.formhabi.value;
    let idHabilidades: number = habilidadesForm.id;
    this.habilidadSer
      .guardarHabilidades(habilidadesForm, idHabilidades)
      .subscribe((data) => {
        this.habilidadesList = this.habilidadesList.map((hab) =>
          hab.id !== idHabilidades ? hab : data
        );
      });
  }

  private guardarHabilidades(): void {
    let nuevaHabilidad: Habilidades = this.formhabi.value;
    this.habilidadSer.nuevasHabilidades(nuevaHabilidad).subscribe({
      next: (data) => {
        this.habilidadesList.push(data);
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
