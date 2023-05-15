import { Component, Input, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerProyectosService } from 'src/app/servicios/ser-proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tercera-seccion-proyectos',
  templateUrl: './tercera-seccion-proyectos.component.html',
  styleUrls: ['./tercera-seccion-proyectos.component.css'],
})
export class TerceraSeccionProyectosComponent implements OnInit {
  //VAR PROYECTOS//
  proyectos: Proyectos[] = [];
  tituloPro: string = '';
  imagenPro: string = '';
  altImagenPro: string = '';
  fechaPro: string = '';
  descriPro: string = '';
  urlBotPro: string = '';
  nombreBotPro: string = '';

  //VAR GUARDAR PROYE
  @Input() proyectosList: Proyectos[] = [];
  formproye: FormGroup;
  modoEdicion: boolean = false;

  // VAR MODAL //
  closeResult!: string;

  constructor(
    private proyectoSer: SerProyectosService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.formproye = this.formBuilder.group({
      id: [0, [Validators.required]],
      imagenPro: ['', [Validators.required]],
      altImagenPro: ['', [Validators.required]],
      tituloPro: ['', [Validators.required]],
      fechaPro: ['', [Validators.required]],
      descriPro: ['', [Validators.required]],
      nombreBotPro: ['', [Validators.required]],
      urlBotPro: ['', [Validators.required]],
    });
  }

  estaLogeado = false;

  ngOnInit(): void {
    this.cargarProyectos();

    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  ///CARGAR LA DATA DEL BACKEND
  cargarProyectos(): void {
    this.proyectoSer.lista().subscribe({
      next: (data) => {
        this.proyectos = data;
      },
    });
  }

  /// BORRAR DATA
  onEliminar(idProyectos: number): void {
    this.proyectoSer.delete(idProyectos).subscribe((data) => {
      this.proyectosList = this.proyectosList.filter(
        (proye) => proye.id !== idProyectos
      );
      alert('Proyecto borrado exitosamente');
      window.location.reload();
    });
  }

  // PARA CREAR NUEVO PROYECTO
  onCreate(): void {
    const proye = new Proyectos(
      this.imagenPro,
      this.altImagenPro,
      this.tituloPro,
      this.fechaPro,
      this.descriPro,
      this.nombreBotPro,
      this.urlBotPro
    );
    this.proyectoSer.save(proye).subscribe({
      next: (data) => {
        alert('Proyecto añadido');
        window.location.reload();
      },
      error: (err) => {
        alert('Falló');
        window.location.reload();
      },
    });
  }

  // EDITAR PROYECTO

  onEditar(proyectos: Proyectos): void {
    this.formproye.patchValue(proyectos);
    this.modoEdicion = true;
  }

  onSubmit(): void {
    if (this.modoEdicion) {
      this.editarProyecto();
      alert('Proyecto guardado exitosamente');
      window.location.reload();
    } else {
      this.guardarProyectos();
      alert('Proyecto guardado exitosamente');
      window.location.reload();
    }
  }

  private editarProyecto(): void {
    let proyectosForm: Proyectos = this.formproye.value;
    let idProyectos: number = proyectosForm.id;
    this.proyectoSer
      .guardarProyectos(proyectosForm, idProyectos)
      .subscribe((data) => {
        this.proyectosList = this.proyectosList.map((proye) =>
          proye.id !== idProyectos ? proye : data
        );
      });
  }

  private guardarProyectos(): void {
    let nuevosProyectos: Proyectos = this.formproye.value;
    this.proyectoSer.nuevosProyectos(nuevosProyectos).subscribe({
      next: (data) => {
        this.proyectosList.push(data);
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
