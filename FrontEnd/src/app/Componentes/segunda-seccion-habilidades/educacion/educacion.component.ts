import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { SerEducacionService } from 'src/app/servicios/ser-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  //VAR EDUCACION//
  educacion: Educacion[] = [];
  nombreEdu: string = '';
  anioInicioEdu: string = '';
  anioFinEdu: string = '';
  descripcionEdu: string = '';

  //VAR GUARDAR EDU
  @Input() educacionList: Educacion[] = [];
  formedu: FormGroup;
  modoEdicion: boolean = false;

  // VAR MODAL //
  closeResult!: string;

  constructor(
    private educacionSer: SerEducacionService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.formedu = this.formBuilder.group({
      id: [0, [Validators.required]],
      nombreEdu: ['', [Validators.required]],
      anioInicioEdu: ['', [Validators.required]],
      anioFinEdu: ['', [Validators.required]],
      descripcionEdu: ['', [Validators.required]],
    });
  }

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  /// DRAG AND DROP
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.educacion, event.previousIndex, event.currentIndex);
  }

  /// CARGA LA DATA DEL BACKEND
  cargarEducacion(): void {
    this.educacionSer.lista().subscribe({
      next: (data) => {
        this.educacion = data;
      },
    });
  }

  /// BORRAR DATA

  onEliminar(idEducacion: number): void {
    this.educacionSer.delete(idEducacion).subscribe((data) => {
      this.educacionList = this.educacionList.filter(
        (edu) => edu.id !== idEducacion
      );
      alert('Educación borrada exitosamente');
      window.location.reload();
    });
  }

  // PARA CREAR NUEVA EDUCACION
  onCreate(): void {
    const edu = new Educacion(
      this.nombreEdu,
      this.anioInicioEdu,
      this.anioFinEdu,
      this.descripcionEdu
    );
    this.educacionSer.save(edu).subscribe({
      next: (data) => {
        alert('Educación añadida');
        window.location.reload();
      },
      error: (err) => {
        alert('Falló');
        window.location.reload();
      },
    });
  }

  // EDITAR EDUCACION

  onEditar(experiencia: Educacion): void {
    this.formedu.patchValue(experiencia);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarEducacion();
      window.location.reload();
    } else {
      this.guardarEducacion();
      alert('Educación guardada exitosamente');
      window.location.reload();
    }
  }

  private editarEducacion(): void {
    let educacionForm: Educacion = this.formedu.value;
    let idEducacion: number = educacionForm.id;
    this.educacionSer
      .guardarEducacion(educacionForm, idEducacion)
      .subscribe((data) => {
        this.educacionList = this.educacionList.map((edu) =>
          edu.id !== idEducacion ? edu : data
        );
      });
  }

  private guardarEducacion(): void {
    let nuevaExperiencia: Educacion = this.formedu.value;
    this.educacionSer.nuevaEducacion(nuevaExperiencia).subscribe({
      next: (data) => {
        this.educacionList.push(data);
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
