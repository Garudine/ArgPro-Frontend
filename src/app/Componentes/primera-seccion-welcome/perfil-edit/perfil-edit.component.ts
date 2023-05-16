import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { SerPerfilService } from 'src/app/servicios/ser-perfil.service';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css'],
})
export class PerfilEditComponent implements OnInit {
  perfil: Perfil = null;

  url: string = '';
  urlImg: string = '';
  nombre: string = '';

  constructor(
    private perfilSer: SerPerfilService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.perfilSer.detail(id).subscribe({
      next: (data) => {
        this.perfil = data;
      },
      error: (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      },
    });
  }

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Perfil/` + name);
    this.nombre = name;
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'Perfil');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          if (this.nombre == item.name) {
            this.urlImg = this.url;
          }
        }
      })
      .catch((error) => console.log(error));
  }

  clearUrl() {
    this.url = '';
    this.urlImg = '';
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.perfil.imgPerfil = this.url;
    this.perfilSer.update(id, this.perfil).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar los datos');
        this.router.navigate(['']);
      },
    });
  }

  uploadImagePerfil($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.uploadImage($event, name);
  }
}
