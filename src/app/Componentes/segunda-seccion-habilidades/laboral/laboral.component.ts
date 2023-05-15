import { Component, OnInit, Input } from '@angular/core';
import { SerExperienciaService } from 'src/app/servicios/ser-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/laboral';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css'],
})
export class LaboralComponent implements OnInit {
  //VAR LABORALES//
  laboral: Experiencia[] = [];
  puestoE: string = '';
  lugarE: string = '';
  anioInicioE: string = '';
  anioFinE: string = '';
  descripcionE: string = '';

  //VAR GUARDAR EXPE
  @Input() experienciaList: Experiencia[] = [];
  formexpe: FormGroup;
  modoEdicion: boolean = false;

  // VAR MODAL //
  closeResult!: string;

  constructor(
    private SerExperiencia: SerExperienciaService,
    private tokenService: TokenService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.formexpe = this.formBuilder.group({
      id: [0, [Validators.required]],
      puestoE: ['', [Validators.required]],
      lugarE: ['', [Validators.required]],
      descripcionE: ['', [Validators.required]],
      anioInicioE: ['', [Validators.required]],
      anioFinE: ['', [Validators.required]],
    });
  }

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarExperienciaLab();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  /// EXPERIENCIA LABORAL FUNCIONES ///

  /// PARA TRAER LA EXP LABORAL DEL BACK
  cargarExperienciaLab(): void {
    this.SerExperiencia.lista().subscribe((data) => {
      this.laboral = data;
    });
  }

  /// BORRAR EXPERIENCIA LABORAL
  onEliminar(idExperiencia: number): void {
    this.SerExperiencia.delete(idExperiencia).subscribe((data) => {
      this.experienciaList = this.experienciaList.filter(
        (exp) => exp.id !== idExperiencia
      );
      alert('Experiencia borrada exitosamente');
      window.location.reload();
    });
  }

  // PARA CREAR NUEVA EXPERIENCIA LABORAL
  onCreate(): void {
    const expe = new Experiencia(
      this.descripcionE,
      this.puestoE,
      this.lugarE,
      this.anioInicioE,
      this.anioFinE
    );
    this.SerExperiencia.save(expe).subscribe({
      next: (data) => {
        alert('Experiencia añadida');
        window.location.reload();
      },
      error: (err) => {
        alert('Falló');
        window.location.reload();
      },
    });
  }

  /// DRAG AND DROP
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.laboral, event.previousIndex, event.currentIndex);
  }

  // EDITAR EXPERIENCIAS

  onEditar(experiencia: Experiencia): void {
    this.formexpe.patchValue(experiencia);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarExperiencia();
      alert('Experiencia guardada exitosamente');
      window.location.reload();
    } else {
      this.guardarExperiencia();
      alert('Experiencia guardada exitosamente');
      window.location.reload();
    }
  }

  private editarExperiencia(): void {
    let experienciaForm: Experiencia = this.formexpe.value;
    let idExperiencia: number = experienciaForm.id;
    this.SerExperiencia.guardarExperiencia(
      experienciaForm,
      idExperiencia
    ).subscribe((data) => {
      this.experienciaList = this.experienciaList.map((exp) =>
        exp.id !== idExperiencia ? exp : data
      );
    });
  }

  private guardarExperiencia(): void {
    let nuevaExperiencia: Experiencia = this.formexpe.value;
    this.SerExperiencia.nuevaExperiencia(nuevaExperiencia).subscribe({
      next: (data) => {
        this.experienciaList.push(data);
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
