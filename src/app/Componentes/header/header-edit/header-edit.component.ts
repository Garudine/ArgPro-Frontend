import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { datosBasicos } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css'],
})
export class HeaderEditComponent implements OnInit {
  persona: datosBasicos = null;

  url: string = '';
  urlImg: string = '';
  nombre: string = '';

  constructor(
    private datosSer: PortfolioService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosSer.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      },
    });
  }

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Banner/` + name);
    this.nombre = name;
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'Banner');
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
    this.persona.imgBanner = this.url;
    this.datosSer.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar los datos');
        this.router.navigate(['']);
      },
    });
  }

  uploadImageBanner($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'banner_' + id;
    this.uploadImage($event, name);
  }
}
