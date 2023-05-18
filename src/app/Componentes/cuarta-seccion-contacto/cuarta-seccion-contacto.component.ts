import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SerContactoService } from 'src/app/servicios/ser-contacto.service';

@Component({
  selector: 'app-cuarta-seccion-contacto',
  templateUrl: './cuarta-seccion-contacto.component.html',
  styleUrls: ['./cuarta-seccion-contacto.component.css'],
})
export class CuartaSeccionContactoComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contacto: SerContactoService
  ) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Nombre: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Tema: new FormControl('', [Validators.required]),
      Mensaje: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);
    this.contacto.PostMessage(FormData).subscribe({
      next: (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      error: (error) => {
        console.warn(error.responseText);
        console.log({ error });
      },
    });
  }
}
